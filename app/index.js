var express = require('express');
var mongoose=require('mongoose');
var mongodb_url='mongodb://rw1:rw1@106.14.174.65:27017/article';



var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


express.static('public');
app.set('view engine', 'pug');
app.set('views', './app/views/');


//首页
app.get('/', function(req, res) {
    var list = [
        { _id: '1111111', title: 'title', content: 'this is content' },
        { _id: '1111111', title: 'title', content: 'this is content' },
        { _id: '1111111', title: 'title', content: 'this is content' },
        { _id: '1111111', title: 'title', content: 'this is content' }
    ];
    res.render('index.pug', { page_title: '首页', list: list });
});
//详情页
app.get('/detail/:id', function(req, res) {
    var article = { title: 'title', content: 'this is content' };
    res.render('detail.pug', { page_title: '详情页', id: req.params.id, article: article });
});
//列表页
app.get('/list', function(req, res) {
    var list = [
        { _id: '1111111', title: 'title', content: 'this is content' },
        { _id: '1111111', title: 'title', content: 'this is content' },
        { _id: '1111111', title: 'title', content: 'this is content' },
        { _id: '1111111', title: 'title', content: 'this is content' }
    ];
    res.render('list.pug', { page_title: '列表页', list: list });
});
//添加页
app.get('/add', function(req, res) {
    res.render('add.pug', { page_title: '添加页' });
});
app.post('/add', function(req, res) {
    const db = mongoose.createConnection(mongodb_url); //创建一个数据库连接
    var articleModel=require('./model/article.js');
    var articleEntity=new articleModel(req.body);
    articleEntity.save();
    res.send(JSON.stringify(req.body));
});
//更新页
app.get('/update/:id', function(req, res) {
    var article = { title: 'title', content: 'this is content' };
    res.render('update.pug', { page_title: '更新页', id: req.params.id, article: article });
});

//删除页
app.get('/delete/:id', function(req, res) {
    res.send('删除成功');
});

app.listen(3000, function() {
    console.log('article app listening on port 3000!');
});