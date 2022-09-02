const express=require("express");
const app=express();
const mongoose=require("mongoose");
require("./data");
const Men=require("./model");

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("jj");
    
})

app.post("/add",async(req,res)=>{

    try{
        const ad=new Men(req.body);
        console.log(req.body);
        const insert=await ad.save();
        res.send(insert);
        

    }catch(err){
        //console.log(err);
        res.send(err);
    }
})



app.get("/search/:id",async(req,res)=>{

    try{    
        // const name=req.params.name;
        // const getmen=await Men.findByName({name});
        // res.send(getmen);

        const _id=req.params.id;
        const getmen=await Men.findById({_id});
        res.send(getmen);
}catch(err){
        //console.log(err);
        res.send(err);
    }
})



app.patch("/update/:id",async(req,res)=>{

    try{    
        // const name=req.params.name;
        // const getmen=await Men.findByName({name});
        // res.send(getmen);

        const _id=req.params.id;
        const geten=await Men.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(geten);
}catch(err){
        console.log(err);
        res.send(err);
    }
})



app.delete("/delete/:id",async(req,res)=>{

    try{    
        // const name=req.params.name;
        // const getmen=await Men.findByName({name});
        // res.send(getmen);

        const _id=req.params.id;
        const geten=await Men.findByIdAndDelete(_id);
        res.send("deleted");
        
}catch(err){
        console.log(err);
        res.send(err);
    }
})



app.listen(8000,()=>{
console.log("successfull");

})