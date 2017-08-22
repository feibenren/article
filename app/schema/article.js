var mongoose=require('mongoose');
var articleSchema=new mongoose.Schema({
    title:{type:String,require:true},
    content:{type:String,require:true}
});
module.exports.articleSchema=articleSchema;