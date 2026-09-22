import express from "express";
import { getHeroesRouter } from "./routes/heroesRouter.js";


const app = express();

const PORT = 8000;

app.use(express.static('public'));

app.use(express.json())

app.use('/api/heroes', getHeroesRouter)


app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err)
}) 