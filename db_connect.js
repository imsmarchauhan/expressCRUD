const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/crud-app-database")
// mongoose.connect("mongodb://127.0.0.1:27017/crud-app-database")
// .then(()=>{
//      console.log("Database is Connected");
// })
// .catch((error)=>{
//      console.log(error)
// })


async function getConnect(){
     try{
          await mongoose.connect("mongodb://127.0.0.1:27017/crud-app-database")
          console.log("Database is Connected")
     }
     catch(error){
          console.log(error)
     }
}
getConnect()