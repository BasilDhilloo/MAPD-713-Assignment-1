const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const connectt = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            // useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log(`Mongo DB Connected: ${connectt.connection.host}`)
        console.log("The server is running on port 5000")
    }
    catch(err){
        console.log(err)
        process.exit(1);
    }
}


module.exports = connectDB;