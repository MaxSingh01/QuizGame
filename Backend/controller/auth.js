import User from '../modal/user.js'
import mongoose from 'mongoose'


mongoose.connect('mongodb://localhost:27017/userDB',{useNewUrlParser: true});
export const registeruser = (req, res) => {
    console.log(req.body)

    // const { email,password,username} = req.body
    const newUser =new User({
      email:req.body.email,
      password:req.body.password,
      name:req.body.username
  })
  newUser.save(function(err){
      if(err){
          console.log(err);
      } else{
         res.status(200).json({
           message:"Signup SUCCESSFUL"
         })
      }
  })
}

export const checkUser=async (req,res)=>{
    const Email=req.body.email;
    const Password=req.body.password;
    
    console.log(req.body)
    User.findOne({email:Email},(err,result)=>{
      console.log(result)
      if(err){
          console.log(err)
      }
      else{
          if(result){
              if(result.password===Password){
                res.status(200).json({
                  message:"LOGIN SUCCESSFUL"
                })
              }else{
                res.status(200).json({
                  message:"Invalid Credentials !"
                })
              }
          }
      }
  })
  };


