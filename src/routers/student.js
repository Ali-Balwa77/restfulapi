const express = require("express");
const router = new express.Router();
const studentcontroller = require('../controllers/student.controller')

router.post("/student", studentcontroller.creatstudentdata)

router.get("/student",studentcontroller.getstudentdata)

router.get("/student/:id",studentcontroller.getstudentdatabyid)

router.patch("/student/:id",studentcontroller.getstudentupdatedata)

router.delete("/student/:id",studentcontroller.getstudentdeletedata)

module.exports = router;