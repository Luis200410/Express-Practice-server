import express from 'express'
import { startBattle, startRound, resetBattle} from '../controllers/gameController.js'

export const gameRouter = express.Router()

gameRouter.get('/start', startBattle)
gameRouter.get('/round', startRound)
gameRouter.get('/reset', resetBattle)

