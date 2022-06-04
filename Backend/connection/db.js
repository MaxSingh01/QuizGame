import mongoose from 'mongoose'



const Connection = () => {
    const URL = 'mongodb+srv://Max01:P%40ssw0rd%231@cluster0.pgnac.mongodb.net/quizDB?retryWrites=true&w=majority'
    try {
         mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true,  })
        console.log('database connected successfully')
    }catch(error){
        console.log("error while connecting to monogo db",error)
    }

}

export default Connection;