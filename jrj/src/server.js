const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const db=require('./dbconnect.js')
const path=require('path');
const cors=require('cors');
app.use(cors());
//post参数解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//静态文件开启
//app.use(express.static(path.join(__dirname,'./public')))
//router
const user=require('./router/user.js')
app.use('/api/user',user);
// app.get('/login',(req,res)=>{
// 	res.send('1111')
// })

app.listen(3000,()=>{
	console.log('server start in port'+3000)
})