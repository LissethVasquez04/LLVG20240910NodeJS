const { model } = require("mongoose");

const mongoose = requiere ('mongoose');

const ProductLLVGShema = new mongoose.Schema({
    nombreLLVG:{type:String, required:true},
    descripcionLLVG:{type:String, required:true},
    precio:{type:Number, required:true},
});

const ProductLLVG = mongoose.model('ProductLLVG', ProductLLVGShema);
modelu.exports = ProductLLVG; 