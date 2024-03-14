    const mongoose = require('mongoose');

    // mongoose.connect("mongodb://localhost:27017/FastKartAPI");
    // mongoose.connect(`mongodb+srv://Raj:uq5rMhO1FfkLkOU3@cluster0.fvudrsz.mongodb.net/API`);
    mongoose.connect(`mongodb+srv://decoraevnt@decora.s2aup1m.mongodb.net/API`);
    // mongoose.connect(`decoraevnt@decora.s2aup1m.mongodb.net`);


    const db = mongoose.connection;

    db.on("connected",(err)=>{
        if(err){
            console.log(`db is not connected`);
            return false;
        }
        console.log(`db is connected`);
    })

    module.exports = db;