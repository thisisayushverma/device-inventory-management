import mongoose, { model } from "mongoose";
import { type } from "os";

const deviceSchema = mongoose.Schema({
    model :{
        type:String,
        required : true
    },
    company : {
        type:String,
        required : true
    },
    price :{
        type:Number,
        required:true
    },
    typeId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Type',
        required:true
    },
    imageUrl :{
        type:String
    },
    status:{
        type:String
    },
    description :{
        type:String
    }
})


export default Devices = new mongoose.model("Device",deviceSchema);