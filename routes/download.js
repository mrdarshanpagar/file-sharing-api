const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const File = require("../models/file");

router.get('/:uuid', async (req, res)=>{

    try{
        const file = await File.findOne({uuid: req.params.uuid})
        if(!file){
            return res.render('download', {error: 'Link has been expired.'})
        }
        let filePath = `${__dirname}/../${file.path}`
        res.download(filePath)

    }catch(err){
        res.render('download', {error: 'Something went wrong.'})
    }

})

module.exports = router