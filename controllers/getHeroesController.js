import {getDBConnection} from '../db/db.js'


export async function getHeroes(req, res){
    try {
        const db = await getDBConnection()
        const heroes = await db.all(`SELECT * FROM heroes`)
        res.status(200).json({heroes})
    }catch (err){
        res.status(500).json({error: 'Failed to pull Heroes from database'})
    }
}