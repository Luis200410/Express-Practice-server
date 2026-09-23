import {getDBConnection} from '../db/db.js'

export async function getCurrentUser(req, res){

    try{
        const db = await getDBConnection()

        if(!req.session.userId){
            return res.json({isLoggedIn: false})
        }

        const findUser = await db.get(`SELECT * FROM users WHERE id = ?`, [req.session.userId])
        console.log(findUser)
        return res.json({isLoggedIn: true, name: findUser.name})
    }catch(err){
        console.error('getCurrentUser error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }

    
}