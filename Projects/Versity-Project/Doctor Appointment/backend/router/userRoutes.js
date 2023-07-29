const express=require('express');
const { createUser, loginUser } = require('../controller/userCtrl');
const router=express.Router();
const passport=require('passport');
router.use(express.json())
router.use(passport.initialize())
router.post('/register',createUser)
router.post('/login',loginUser)
router.get('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.status(202).send({
            success:true,
            user:{
                id:req.user.userId,
                email:req.user.email,
                username:req.user.username
            }
        })
    }
);
module.exports=router;