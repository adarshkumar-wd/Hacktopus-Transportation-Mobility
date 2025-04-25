import monsoose from 'mongoose'

export const dbConnect = async () => {
    try {
        const connection  = await monsoose.connect(process.env.MONGODB_URI);
        if (!connection) {
            console.log("Database not connected properly ..");
        }

        console.log("Db connected Successfully")
    } catch (error) {
        console.log("DB Connection error : " , error);
        throw new Error(error);
        
    }
}