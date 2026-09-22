import express from 'express'
import { getHeroes } from '../controllers/getHeroesController.js'

export const getHeroesRouter = express.Router()

getHeroesRouter.get('/', getHeroes())