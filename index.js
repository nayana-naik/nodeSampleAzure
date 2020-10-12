const express =  require ('express')
const app = express()
const port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith, Content-Type, Accept");
    next();
   });


app.get('/', (req,res)=>{
    //res.send('Hello World')
    res.json('Hello World')
})

app.get('/test', (req,res)=>{
    //res.send('Test-1')
    res.json('Test-1')
})
app.get('/test2', (req,res)=>{
    //res.send('Test2')
    res.send('Test-2')
})

// app.get('/test3', (req,res)=>{
//     var num1=2, num2=0, num3;
//     num3=num1 / num2;

//     res.send(num3)
// })

app.listen(port, ()=>{
    console.log(`Listening to port ${port}!`)
})

