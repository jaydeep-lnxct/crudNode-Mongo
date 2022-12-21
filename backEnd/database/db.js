import mongoose from 'mongoose'


const Connection = async () => {
    const URL = process.env.DB_CONNECT;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true },
             () => console.log("Database Connected "))
    } catch (error) {
        console.log("ERROR FROM DATABASE CONNECTION------------------",error)
    }
};

export default Connection;