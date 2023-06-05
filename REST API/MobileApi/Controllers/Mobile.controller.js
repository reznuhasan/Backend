const Mobile=require('../Models/Mobile.Model');

const addMobile=async(req,res)=>{
    try{
        const totalMobiles=await Mobile.find({});
        const newId=(totalMobiles.length===0)?101:101+totalMobiles.length;
        const newMobile={
            id:newId,
            title:req.body.title,
            price:req.body.price,
            description:req.body.description,
            image:req.body.image,
            date:req.body.date,
            rating:req.body.rating
        }
        const myMobile=new Mobile(newMobile);
        await myMobile.save();
        res.status(200).json({message:"send data successfully",myMobile});

    }catch(err){
        res.status(500).json({message:"server side error",err})
    } 
}
const findAllMobiles=async(req,res)=>{
    try{
        const price=req.query.price;
        const rate=req.query['rating.rate'];
        console.log(price,rate);
        let myCon={};
        if(price && rate){
            myCon={
                $and:[
                    {price:{$gt:500}},
                    {'rating.rate':{$gt:rate}}
                ]
            };
        }
        let allMobiles;
        if(price){
             allMobiles=await Mobile.find(myCon).select({title:1,_id:0,price:1,id:1}).sort({price:-1});
        }else{
            allMobiles=await Mobile.find({}).select({title:1,_id:0,price:1,id:1}).sort({price:-1});
        }
        if(allMobiles){
            res.status(200).json({message:"find data successfully",allMobiles})
        }else{
            res.status(404).json({message:"Product not found"})
        }
        
    }catch(err){
        res.status(500).json({message:"server side error",err})
    } 
}
const findById=async(req,res)=>{
    try{
        const oneMobile=await Mobile.findOne({id:req.params.id}).select({title:1,_id:0,price:1});
        if(oneMobile){
            res.status(200).json({message:"find one data successfully",oneMobile})
        }else{
            res.status(404).json({message:"product not found"})
        }
    }catch(err){
        res.status(500).json({message:"server side error",err})
    } 
}
module.exports={addMobile,findAllMobiles,findById}