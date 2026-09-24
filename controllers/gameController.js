import {getDBConnection} from '../db/db.js'



export async function startBattle(req, res){
    const db = await getDBConnection()

    const hero = await db.get(`SELECT * FROM heroes WHERE `)

    
}

export async function startRound(req, res){
    const db = await getDBConnection()
}

export async function resetBattle(req, res){

}

