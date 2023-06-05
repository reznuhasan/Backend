const express=require('express');
const { addMobile, findAllMobiles, findById } = require('../Controllers/Mobile.controller');
const router=express.Router();

router.post("/",addMobile)
router.get("/all",findAllMobiles)
router.get("/:id",findById)

module.exports=router;