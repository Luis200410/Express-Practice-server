import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function viewAllProducts() {
  const db = await open({ 
    filename: path.join('database.db'),
    driver: sqlite3.Database
  });

  try { 
    const users = await db.all('SELECT * FROM users')
    // Neater table display
    const displayItems = users.map(({ id, name, username, password}) => {
      return { id, name, username, password}
    })
    console.table(displayItems)
  } catch (err) {
    console.error('Error fetching users:', err.message)
  } finally {
    await db.close()
  }
}

viewAllProducts()