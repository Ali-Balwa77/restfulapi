const studentdata = require("../models/students");

module.exports = {
    creatstudentdata: 
        async(req,res)=>{
            try{
                const user = new studentdata(req.body);
                const result = await user.save()
                res.status(201).send(result)
            }catch(err){
                res.status(400).send(err)
            }
        },
        
    getstudentdata:
        async(req,res)=>{
            try{
                const result = await studentdata.find();
                res.send(result);
            }catch(err){
                res.send(err);
            }
        },

    getstudentdatabyid:
        async(req,res)=>{
            try{
                const _id = req.params.id;
                const studentsdata = await studentdata.findById(_id);
                if(!studentsdata){
                    return res.status(404).send();
                }else{
                    res.send(studentsdata.email)
                }
            }catch(err){
                res.status(500).send(err)
            }
        },
        
    getstudentupdatedata:
        async(req,res)=>{
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
        },

    getstudentdeletedata:
        async(req,res)=>{
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
        }
}