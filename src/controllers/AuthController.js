import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config/config.js'

class AuthController {
  static async login (req, res) {
    try {
      const { username, password } = req.body

      const user = await User.findOne({ username })

      console.log(user);

      if (!user) return res.status(404).json({ message: 'El usuario no existe' })

      const isValid = bcrypt.compare(password, user.password)


      console.log(isValid);
      if (!isValid) return res.status(400).json({ message: 'Credenciales inválidas' })

      const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' })
      res.json({ message: 'Login exitoso', token })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async me (req, res) {
    try {
      const userCourses = await req.user.populate('courses')
      const user = userCourses.toObject()

      delete user.password
      res.json(user)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}

export default AuthController
