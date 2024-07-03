const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE).then(out=>{
    console.log("Mongodb server connected");
}).catch(err=>{
    console.log(`Mongodb server not connected ${err}...`);
})