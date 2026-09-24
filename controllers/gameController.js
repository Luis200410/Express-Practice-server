import { createDiceGameEngine } from '../domain/diceGameEngine.js'
import { getDBConnection } from '../db/db.js';

async function getHeroesFromDB(){
    const db = await getDBConnection()
    const heroes = await db.all(`SELECT * FROM heroes`)
    return heroes
}

const engine = createDiceGameEngine(getHeroesFromDB);

export async function getHeroes(req, res){
    try{
        const displayHeroes = await engine.getHeroes()
        return res.status(200).json({heroes: displayHeroes})
    }catch (error) {
        return res.status(500).json({ error: "Error starting Battle" });
    }
}

export async function startBattle(req, res){
    try{
        const { heroId } = req.body; 
        const newBattle = await engine.startBattle(heroId)
        return res.status(200).json(newBattle)
    }catch (error) {
        return res.status(500).json({ error: "Error starting Battle" });
    }
}

export async function startRound(req, res){
    try{
        const newRound = engine.playRound()
        return res.status(200).json(newRound)
    }catch (error) {
        return res.status(500).json({ error: "Error starting Round" });
    }
}

export async function resetBattle(req, res){
    try{
        const reset = engine.resetBattle()
        return res.status(200).json(reset)
    }catch(err){
        return res.status(500).json({error: "Error Restarting Battle"})
    }
}

