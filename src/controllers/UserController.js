import User from '../models/User.js'
import bcrypt from 'bcrypt'

class UserController {
static async index (req, res) {
    try {
        const users = await User.find().select('-password -__v')
        res.json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

static async getById (req, res) {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        
        if (!user) return res.status(404).json({message: 'Usuario no encontrado'})

        res.json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

static async store (req, res) {
    try {
        const {fName, mName, lName, username, email, password} = req.body
        if (!fName || !mName || !lName || !username || !email || !password ) return res.status(400).json({message: 'Faltan datos'})

            const userEmail = await User.findOne({email})
            if (userEmail) return res.status(400).json({message: 'El correo ya existe'})

            const userUsername = await User.findOne({username})
            if (userUsername) return res.status(400).json({message: 'El usuario ya existe'})

                const hash = await bcrypt.hash(password, 10)
                const user = await User.create({
                    fName,
                    mName,
                    lName,
                    username,
                    email,
                    password: hash
                  })
                  const userObj = user.toObject()
                  delete userObj.password
                  delete userObj.__v

                  res.status(201).json({message: 'Usuario creado', user: userObj})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

static async delete (req, res) {
    try {
        
    const {id} = req.params
    const userEliminado = await User.findByIdAndDelete(id)

    if (!userEliminado) return res.status(404).json({message: 'No exite el usuario'})

    res.json({message: 'Usuario eliminado', user: userEliminado})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
}

export default UserController