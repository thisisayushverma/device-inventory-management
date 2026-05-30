import mongoose from "mongoose";

const typeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

export default Types = new mongoose.model("Type",typeSchema);