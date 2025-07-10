const Database = require('better-sqlite3')
const path = require('path')
const dbPath = path.join(__dirname, '../../clientes.db')
const db = new Database(dbPath)

db.prepare(`
  CREATE TABLE IF NOT EXISTS clientes (
    id TEXT PRIMARY KEY,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    telefono TEXT NOT NULL,
    activo INTEGER NOT NULL DEFAULT 1,
    imagen TEXT
  )
`).run()

module.exports = db;
