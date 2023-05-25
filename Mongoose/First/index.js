const express = require('express');
const mongoose = require('mongoose')
const app = express();
const todoHandler=require('./routeHandler/todoHandler')
app.use(express.json())


//connect mongoose
main().catch(err => console.log(err));
async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/todos');
   console.log('database connected')
 }

app.use('/todo',todoHandler)
const errorHandaling = (err, req, res, next) => {
   if (res.headersSent) {
      return next(err);
   }
   res.status(500).json({ error: err })
}

app.listen(4000, () => {
   console.log("server listening on port http://localhost:4000")
})
