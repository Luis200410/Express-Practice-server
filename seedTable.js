import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { heroes } from './data/heroes.js'

async function seedTable() {
 
  const db = await open({
    filename: path.join('database.db'),
    driver: sqlite3.Database
  })

  try {
    await db.exec('BEGIN TRANSACTION')

    for (const {name, attackPower, defensePower, maxHp, imageUrl} of heroes){
      await db.run (
      `INSERT INTO heroes (name, attackPower, defensePower, maxHp, imageUrl)
      VALUES (?, ?, ?, ?, ?)`,
      [name, attackPower, defensePower, maxHp, imageUrl]
      )
    }

   await db.exec('COMMIT')

  } catch(err){
    db.exec('ROLLBACK')
    console.log("Something went wrong", err.message)
  } finally {
    db.close()
    console.log("transaction complete")
  }
  }
  

seedTable()