const express=require('express');
const { homePage } = require('./controllers/users.controller');

const app=express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:
true}))
const useRouter=require('./routes/users.route');
app.use(useRouter)
app.get('/',homePage)

module.exports=app;

