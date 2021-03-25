const express = require('express');
const router=express.Router();
const main = require("./main");

router.get('/getWetherData', function(req,res){
    main().then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(500).send({error:error.message});
        console.log(error);
    });
});

module.exports=router;