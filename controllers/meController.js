import {getDBConnection} from '../db/db.js'

export async function getCurrentUser(req, res){

    const db = await getDBConnection()

    if(!req.session.userId){
        
    }

}