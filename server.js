const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req, res, next)=> {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/api/users', (req, res, next)=> {
  const users =[
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry'}
  ];
  res.send(users);
});
app.listen(3000, ()=> console.log('listening on port 3000'));
