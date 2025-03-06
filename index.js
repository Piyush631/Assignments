const express=require("express")
var cors = require('cors')

const app=express();
app.use(cors());
app.use(express.json())

app.post("/sum",(req,res)=>{
    const a =parseInt(req.body.a);
    const b=parseInt(req.body.b);
    res.send({

    sum:a + b
    })
})
app.listen(3000);