import mongoose from "mongoose";

const typeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const Types = mongoose.model("Type",typeSchema);

export default  Types;