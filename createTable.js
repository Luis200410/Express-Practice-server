import { heroes } from "./data/heroes.js";
import {open} from "sqlite";
import sqlite3 from "sqlite3";
import path from "node:path"

const data = heroes

async function createTable(){
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS heroes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        attackPower INTEGER NOT NULL,
        defensePower INTEGER NOT NULL,
        maxHp INTEGER NOT NULL,
        imageUrl TEXT NOT NULL
    )
    `)

    await db.close()
    console.log("Table created")
}

createTable()
