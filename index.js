const express=require('express')
const app=express()
const port=8081
app.get("/welcome",(req,res)=>{
    res.end("Welcome to Dominoes!")
})

app.get("/contact",(req,res)=>{
    const contacts={phone:'11860210000',
email:"guestcaredominoes@jublfood.com"}
res.json(contacts)
})

app.get("/*",(req,res)=>{
    res.sendStatus(404)
})

app.listen(port,(req,resp)=>{
    console.log("Server is listening",port)
})