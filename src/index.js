import express from 'express'
import { DB_URL, PORT } from './config/config.js'
import { connect } from 'mongoose'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import { validateCORS } from './middlewares/middleware.js'
import questionRoutes from './routes/questions.routes.js'
import examRouter from './routes/exams.routes.js'
import resultRoutes from './routes/results.routes.js'
import videoRoutes from './routes/videos.routes.js'
import coursesRoutes from './routes/courses.routes.js'
const app = express()

app.use(express.json())
app.use(validateCORS)

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/exams', examRouter)
app.use('/api/questions', questionRoutes)
app.use('/api/results', resultRoutes)
app.use('/api/videos', videoRoutes);
app.use('/api/courses', coursesRoutes);

connect(DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
  })
})
