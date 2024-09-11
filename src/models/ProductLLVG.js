const mongoose = require ('mongoose');

const ProductLLVGShema = new mongoose.Schema({
    nombreLLVG:{type:String, required:true},
    descripcionLLVG:{type:String, required:true},
    precio:{type:Number, required:true},
});

const ProductLLVG = mongoose.model('ProductLLVG', ProductLLVGShema);
module.exports = ProductLLVG; 