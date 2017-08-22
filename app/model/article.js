var articleSchema=require('../schema/article.js');
var articleModel=db.model('article',articleSchema);

module.exports.articleModel=articleModel;