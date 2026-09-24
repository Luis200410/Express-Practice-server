import express from "express";
import { getHeroesRouter } from "./routes/heroesRouter.js";
import { authRouter } from "./routes/authRouter.js";
import { getUserNameRouter } from "./routes/meRouter.js";
import session from 'express-session'
import dotenv from 'dotenv'
import {gameRouter} from "./routes/gameRouter.js"

dotenv.config()
const app = express();
const PORT = 8000;
const secret = process.env.SESSION_SECRET

app.use(express.json())
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie : {
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    }
}))

app.use(express.static('public'));



app.use('/api', getHeroesRouter)
app.use('/api/auth', authRouter)
app.use('/api/auth', getUserNameRouter)
app.use('/api/battle', gameRouter)



app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err)
}) 