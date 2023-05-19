const mongoose = require('mongoose');
 

const comment = new mongoose.Schema({
    plat_name: String,
    price: Number,
    nbre_ingredients: Number,
    description:String,
    plat_image:String,


   
 
})


module.exports = mongoose.model('Comment',comment);