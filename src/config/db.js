import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
    try {
        console.log('Conectando a:', process.env.DB_URL)
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Conectado exitosamente a MongoDB')
    } catch (error) {
        console.log('Errol al conectarse a MongoDB:', error)
        process.exit(1)
    }
}

export default connectDB