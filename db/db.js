import mongoose from "mongoose";

const dbConnector = async()=>{
    try {
        const dbConnect = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
    } catch (error) {
        throw error;
    }
}

export {
    dbConnector
}