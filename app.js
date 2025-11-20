const express=require("express")
const app = express()
const port=process.env.PORT 
// kök dizin localhost:5001
app.get("/",(req,res)=>{
    res.json({
        message:"Hoşgeldiniz"
    })
})

app.get("/contact",(req,res)=>{
    res.json({
        message:"Contact"
    })
})

app.get("/calisanlar",(req,res)=>{
    res.json({
        message:"Çalışanlar"
    })
})

