const fs = require("fs");
const FILE = "./users.json";

const writeJSON = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile(FILE, JSON.stringify(data), (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  });
};

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

const createUser = user => {
  return getUsers().then(users => {
    const maxId = users.reduce((acc, user) => {
      if (user.id > acc) {
        acc = user.id;
      }
      return acc;
    }, 0);
    user.id = maxId + 1;
    users.push(user);
    return writeJSON(users);
  })
  .then(() => {
    return user;
  });
};
const getUsers = () => {
  return readJSON();
};

module.exports = {
  getUsers,
  createUser
};
