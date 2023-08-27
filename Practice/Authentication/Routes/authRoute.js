const { loginUser, privateRoute, createUser } = require('../Controller/authCtrl');
const { authenticate } = require('../Middleware/authenticate');

const router=require('express').Router({
    caseSensitive:true,
})

router.post('/register',createUser);
router.post('/login',loginUser)
router.get('/private',authenticate,privateRoute)
module.exports=router;