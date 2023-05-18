const { v4: uuidv4 } = require('uuid');
const users=[
    {
        id:uuidv4(),
        name:'Rizwan',
        email:'reznuhasan31@gmail.com'
    },
    {
        id:uuidv4(),
        name:'Alif',
        email:'alifrahman31@gmail.com'
    },
]

module.exports=users;