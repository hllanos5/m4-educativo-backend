<<<<<<< HEAD
import express from 'express'
import {DB_URL, PORT} from './config/config.js'
import {connect} from 'mongoose'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import {validateCORS} from './middlewares/middleware.js'

const app = express()
app.use(express.json())
app.use(validateCORS)
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

connect(DB_URL).then(()=>{
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
  })
})
=======
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
>>>>>>> 934bbc9ad91a20cc26327a5b216147ac57dd0d32
