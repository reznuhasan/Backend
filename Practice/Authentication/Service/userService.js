const User=require('../Model/user');
const customError = require('../Utiljs/error');
const bcrypt=require('bcrypt');
const findUsers=()=>{
    return User.find({});
}

const findByProperty=(key,value)=>{
    if(key==="_id"){
       return User.findById(value);
    }
    return User.findOne({[key]:value});
}
const createUser=async({name,email,password,role,activeStatus})=>{
    const checkUser=await findByProperty("email",email);
    if(checkUser){
        throw customError("user already exist",400);
    }
    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(password,salt);
    const user=new User({
        name:name,
        email:email,
        password:hash,
        role:(role)?role:["Student"],
        activeStatus:(activeStatus)?activeStatus:"Pending"
    })
    return user.save();
}


module.exports={findUsers,findByProperty,createUser}