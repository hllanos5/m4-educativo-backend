import express from "express"
import connectDB from "./config/db.js"
import questionRoutes from "./routes/questions.routes.js"

const app = express()

connectDB()

app.use(express.json())
app.use('/api/questions', questionRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {

  console.log('Servidor corriendo en http://localhost:3000')

})