const express=require("express");
const lodash=require("lodash");

const app=express();
app.get("/",(req,res)=>{
    res.end(
        "hey mate, u made an api"
    );
})

app.listen(3000);