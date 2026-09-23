import {getDBConnection} from '../db/db.js'
import bcrypt from 'bcryptjs'

export async function registerUser(req, res){

    let {name, username, password} = req.body

    if (!name || !username || !password){
        return res.status(400).json({error: "All fields are required"})
    }

    name = name.trim()
    username = username.trim()

    try{
        const db = await getDBConnection()

        const looking  = await db.get('SELECT * FROM users WHERE  name = ? AND username = ?', [name, username])

        if(existingUser){
        return res.status(400).json({error: 'The user already exists, Try Again'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const insertUser = await db.run('INSERT INTO users (name, username, password) VALUES (?, ?, ?)', [name, username, hashedPassword])
        console.log(insertUser)

        res.status(201).json({message: 'User successfully register'})

    }catch(err){
        console.log('Something went wrong with the registration: ', err.message)
        res.status(500).json({err: 'Something went wrong with the registration'})

    }

}

export async function loginUser(req, res){

    let {username, password} = req.body

    if (!username || !password){
        return res.status(400).json({error: "All fields are required"})
    }
    
    username = username.trim()

    try{
        const db = await getDBConnection()

        const existingUser = await db.get('SELECT * FROM users WHERE  name = ? AND username = ?', [name, username])

        if(existingUser){
        return res.status(400).json({error: 'The user already exists, Try Again'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const insertUser = await db.run('INSERT INTO users (name, username, password) VALUES (?, ?, ?)', [name, username, hashedPassword])

        res.status(201).json({message: 'User successfully register'})

    }catch(err){
        console.log('Something went wrong with the registration: ', err.message)
        res.status(500).json({err: 'Something went wrong with the registration'})

    }

}