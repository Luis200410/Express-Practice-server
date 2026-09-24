
import express from 'express'
import { getHeroes, startBattle, startRound, resetBattle } from '../controllers/gameController.js'


export const gameRouter = express.Router()

gameRouter.get('/api/heroes', getHeroes)
gameRouter.post('/api/battle/start', startBattle)
gameRouter.post('/api/battle/round', startRound)
gameRouter.post('/api/battle/reset', resetBattle)

