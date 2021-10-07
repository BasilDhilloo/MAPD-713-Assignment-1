const express = require('express')
const router = express.Router();


const { Image } = require('../models/images');

var getCount = 0;
var postCount = 0;
var putCount = 0
var delCount = 0

//Get all the images
router.get('/api/images', (req, res) => {
    getCount = getCount + 1;
    Image.find({}, (err, data) => {
        if(!err){
            res.send(data);
        }else{
            console.log(err)
        }
    });
    console.log("Get Request:", getCount)
    
})

//Save Images
router.post('/api/images/add', (req, res) => {
    postCount = postCount + 1;
    const img = new Image({
        imageId: req.body.imageId,
        name: req.body.name,
        url: req.body.url,
        size: req.body.size
    })
    img.save((err, data) => {
        res.status(200).json({code: 200, message: 'Image Added Successfully!', 
        addImage:data})
    });
    console.log("Put Request:", postCount)
})

//Get the Single Image
router.get('/api/image/:id', (req,res) => {
    getCount = getCount + 1;
    Image.findById(req.params.id, (err, data) => {
        if(!err){
            res.send(data);
        }else{
            console.log(err)
        }
    })
    console.log("Get Request:", getCount)
})

//Update the images

router.put('/api/images/edit/:id', (req,res) => {
    putCount = putCount + 1;
    const img = {
        imageId: req.body.imageId,
        name: req.body.name,
        url: req.body.url,
        size: req.body.size
    }
    Image.findByIdAndUpdate(req.params.id, { $set: img }, { new: true }, (err, data) => {
        if(!err){
            res.status(200).json({ code: 200, message: "Image Updated Successfully",
        updateImage: data})
        }else{
            console.log("Error", err)
        }
    })
    console.log("Put Request:", putCount)
})

//Delete the images
router.delete('/api/images/:id', (req,res) => {
    delCount = delCount + 1;
    Image.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err){
            res.status(200).json({ code: 200, message: "Image Deleted Successfully",
            deleteImage: data})
        }else{
            console.log(err)
        }
    })
    console.log("Delete Request:", delCount)
})

module.exports = router;