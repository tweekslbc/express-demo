const fs = require('fs');
const FILE = "./users.json";

const readJSON = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(FILE, (err, data) => {
      if (data) {
        try {
          resolve(JSON.parse(data.toString()));
        } catch (ex) {
          reject(ex);
        }
      } else {
        reject(err);
      }
    });
  });
};

const getUsers = () => {
  return readJSON();
};

module.exports = {
  getUsers
};
