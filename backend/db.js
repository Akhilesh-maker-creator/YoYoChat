import mongoose from "mongoose";

export const connectDB = async() => {
        try {
            const connect = await mongoose.connect(process.env.MONGO_URI) 
            console.log(`connected to Database-${connect.connection.host}`);
            
        } catch (error) {
            console.log(`Error in connecting to database-${error}`);
            
        }
  
}


