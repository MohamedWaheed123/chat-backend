const express =require('express');
const bodyparse =require('body-parser');
const app = express();
const bcrypt = require('bcrypt');
const cors = require ('cors');
const knex = require('knex');
const register= require('./controllers/register');
const signIn= require('./controllers/signin');
const getMessages =require('./controllers/getMessages');
const deleteMessage =require('./controllers/deleteMessage');
const editMessage =require('./controllers/editMessage');
const addMessage =require('./controllers/addMessage');



const db=knex({
    client: 'pg',
    connection: {
        host:'127.0.0.1',
      user:'postgres',
      password:'test',
      database:'chat'
    },
  });
 

app.use(bodyparse.json());
app.use(cors());



app.post('/signin',(req,res)=>{signIn.handleSignIn(req,res,db,bcrypt)})
app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)})
app.get('/getMessages',(req,res)=>{getMessages.getMessages(req,res,db)})
app.delete('/deleteMessage',(req,res)=>{deleteMessage.deleteMessage(req,res,db)})
app.put('/editMessage',(req,res)=>{editMessage.editMessage(req,res,db)})
app.post('/addMessage',(req,res)=>{addMessage.addMessage(req,res,db)})

app.listen(3000,()=>{

    console.log('app is running on port 3000');
}

)
