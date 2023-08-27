const User=require('../Model/user')

const findUsers=()=>{
    return User.find({});
}

const findUserById=(userId)=>{
    return User.findById(userId)
}


module.exports={findUsers,findUserById}