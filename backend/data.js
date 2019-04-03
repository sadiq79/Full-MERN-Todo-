const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this will be our database's data structure

const DataSchema = new Schema(
    {
        id: Number,
        message: String
    },
    { timestamps: true }
);

// export the new schema so we could modify it using Node.js
module.exports=mongoose.model("Data", DataSchema);