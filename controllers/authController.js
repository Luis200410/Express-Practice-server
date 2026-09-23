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

        if(looking){
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

    username = username.trim()

    if (!username || !password){
        return res.status(400).json({error: "All fields are required"})
    }

    try{
        const db = await getDBConnection()

        const matchUser = await db.get('SELECT * FROM users WHERE username = ?', [username])

        if(!matchUser){
        return res.status(401).json({error: 'Invalid Credentials'})
        }

        const matchPassword = await bcrypt.compare(password, matchUser.password)

        if(!matchPassword){
        return res.status(401).json({error: 'Invalid Credentials'})
        }

        req.session.userId = matchUser.id

        res.status(201).json({message: 'Logged in'})

    }catch(err){
        console.log('Login error', err.message)
        res.status(500).json({err: 'Login failed. PLease try again'})

    }

}