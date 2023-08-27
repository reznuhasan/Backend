const User=require('../Model/user')

const findUsers=()=>{
    return User.find({});
}



module.exports={findUsers}