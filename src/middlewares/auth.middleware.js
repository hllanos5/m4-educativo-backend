import jwt from 'jsonwebtoken'
import {SECRET_KEY} from '../config/config.js'
import User from '../models/User.js'

export const validateJWT = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        if (!authorization) return res.status(400).json({message: 'Se debe proveer un token'})
            
        const decoded = jwt.verify(authorization, SECRET_KEY)
        const user = await User.findById(decoded?.userId)

        if (!user) return res.status(400).json({message: 'No autorizado'})

        req.user = user
        next()
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) return res.status(400).json({ message: 'Token expirado' })
        if (error instanceof jwt.JsonWebTokenError) return res.status(400).json({ message: 'Token inválido' })
        res.status(500).json({mesage: error.message})
        
    }
}