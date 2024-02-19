const express = require('express')
const app = express()
const mongoose = require('mongoose');
const UserList = require('./models/userSchema');
const testMiddleware = require('./middleware/testMiddleware');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const port = 4000
app.use(express.json())
mongoose.connect('mongodb+srv://sadia:sadia12345@cluster0.frhrmzc.mongodb.net/learning?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));

  app.get("/users",testMiddleware, async (req,res)=>{
    const users = await UserList.find({});
    res.send(users)
  })
app.post("/users", (req,res)=>{
    console.log(req.body)
    const {firstname, lastname, email, password} = req.body;
    var token = jwt.sign({ id: email}, 'sadia');
    console.log(token, "token");
    bcrypt.hash(password, 10, function(err, hash) { 
    const users = new UserList({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hash
    })
    users.save()
    res.send(users)
   })
  
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})