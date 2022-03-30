const mysql = require("mysql2")


const bcrypt = require('bcrypt');




const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'quiz',
    
})



exports.registeruser = (req, res) => {
    console.log(req.body)

    const { email,password,username} = req.body

    db.query('SELECT email FROM register WHERE email=?', [email], async (error, result) => {
        if (error) {
            console.log(error);
        }
        if (result.length > 0) {

            return  res.status(200).json({
                message: "USER EXIST",
              });
        }
        // else if (password !== repeatpass) {
        //     return res.status(200).json( {
        //         message: 'PASSWORD ARE NOT SAME '
        //     })
        // }

        let hashedPassword = await bcrypt.hash(password, 8);
        // console.log(hashedPassword)

        db.query('INSERT INTO register SET ? ', { email: email, pass: hashedPassword,name:username }, (error, result) => {
            if (error) { console.log(error) }
            else {
                // console.log(result)
                return  res.status(200).json({
                    message: "USER REGISTER",
                  });

            }



        })


    })


}

exports.checkUser=async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    
    console.log(req.body)
       var sql = 'select * from register where email=?';
       var query= mysql.format(sql,[email]);
       db.query(await query, async function(err,row){
         if(err){
            return  res.status(200).json(error)
              
         }else{
             console.log(row)
        
           const mainpassword=row[0].pass;
          console.log(mainpassword);
        //   console.log('password from user',password);
          const userPassword=password;
          console.log(userPassword)
           
           const passwordcheck=await bcrypt.compare(userPassword, mainpassword)
          console.log(passwordcheck);
           if(!passwordcheck){
            return  res.status(200).json({
                message: "INVALID EMAIL OR PASSWORD",
              });
           }else{
            return  res.status(200).json({
                message: "LOGIN SUCCESSFUL",
              });
           }
          }
        }
        )
  };


// this is for modal data we are sending data from frontend and store this in database
