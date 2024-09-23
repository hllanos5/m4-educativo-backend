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
