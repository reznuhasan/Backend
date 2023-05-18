const {v4:uuidv4}=require('uuid');

const products=[
    {
        id:uuidv4(),
        name:'mobile',
        price:2550,
    },
    {
        id:uuidv4(),
        name:'laptop',
        price:35000
    },{
        id:uuidv4(),
        name:'watch',
        price:5000
    }
]

module.exports=products;