var express = require('express');

var app = express();

app.listen(3000,()=>{
    console.log('localhost:3000');    
})

app.use(express.static(__dirname + '/public'));

app.get('/data',(req,res)=>{
    res.sendFile(__dirname + '/data/Du_lieu.xml');
})


app.get('/test',(req,res)=>{
    res.sendFile(__dirname + '/test.html')
})

app.get('/View/KhachThamQuanView',(req,res)=>{
    res.sendFile(__dirname + '/View/KhachThamQuanView.html')
})

app.get('/View/ThuNganView',(req,res)=>{
    res.sendFile(__dirname + '/View/ThuNganView.html')
})

app.get('/View/QuanlyView',(req,res)=>{
    res.sendFile(__dirname + '/View/QuanlyView.html')
})