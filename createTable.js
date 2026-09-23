import {open} from "sqlite";
import sqlite3 from "sqlite3";
import path from "node:path"


async function createTable(){
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    )
    `)

    await db.close()
    console.log("Table created")
}

createTable()
