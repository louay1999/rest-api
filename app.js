
const express=require("express")
const app=express()
const port=process.env.PORT ||5000
const dbConection=require("./config/db")
const User=require("./models/User")



dbConection()
app.use(express.json())


app.get("/user",async(req,res)=>{
try {
    const allUser=await User.find()
    res.status(200).json(allUser)
} catch (error) {
    console.log(error.message)
}
})
app.post("/user",async(req,res)=>{
  try {
    const userData=req.body
    const data = await User.create(userData)
     res.status(200).json({message:"user created",data:data})
  } catch (error) {
    console.log(error.message)
  }
})





app.listen(port,()=>console.log(`server runing on port : ${port}`))

