const express=require ("express");
const app=express();
app.get(" /", (req,res)=>{
    res.send("hello user");
    
});

app.listen(8500, (err)=>{
    if (err) throw err;
    console.log("Server is running on 8500");
});
