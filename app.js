const express=require("express");

const app=express();
app.get("/",(req,res)=>{
    res.end(
        "hey mate, u made an api"
    );
})

app.listen(process.env.PORT || 3000);