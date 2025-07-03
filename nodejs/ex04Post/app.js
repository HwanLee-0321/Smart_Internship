const express = require('express');
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const session = require('express-session');
const app = express();

app.use('/', indexRoutes);
app.use('/users', userRoutes);

app.listen(3000, ()=>{
  console.log('Server is running on http://localhost:3000');
})