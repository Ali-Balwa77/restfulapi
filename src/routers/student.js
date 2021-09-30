const express = require("express");
const router = new express.Router();
const studentdata = require("../models/students");

router.post("/student",async(req,res)=>{
    try{
        const user = new studentdata(req.body);
        const result = await user.save()
        res.status(201).send(result)
    }catch(err){
        res.status(400).send(err)
    }
})

router.get("/student",async(req,res)=>{
    try{
        const result = await studentdata.find();
        res.send(result);
    }catch(err){
        res.send(err);
    }
})

router.get("/student/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentsdata = await studentdata.findById(_id);
        if(!studentsdata){
            return res.status(404).send();
        }else{
            res.send(studentsdata)
        }
    }catch(err){
        res.status(500).send(err)
    }
})

router.patch("/student/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updatestudent= await studentdata.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.send(updatestudent)
        console.log(updatestudent)
    }catch(err){
        res.status(404).send(err)
    }
})

router.delete("/student/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(_id)
        const deletestudent = await studentdata.findByIdAndDelete(_id);
        console.log(deletestudent)
        if(!deletestudent){
            return res.status(400).send()
        }
        res.send(deletestudent)
        console.log(deletestudent)

    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router;