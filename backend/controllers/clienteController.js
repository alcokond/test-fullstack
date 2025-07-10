const { v4: uuidv4 } = require('uuid')
const db = require('../db/database')
const path = require('path')

function getClientes(req, res) {
    const { search = '', estado, page = 1, size = 10 } = req.query
    const offset = (page - 1) * size
    let query = `SELECT * FROM clientes WHERE 1=1`
    let countQuery = `SELECT COUNT(*) as total FROM clientes WHERE 1=1`
    let where = ''
    const params = []

    if (search) {
        where += ` AND (nombre LIKE ? OR email LIKE ?)`
        params.push(`%${search}%`, `%${search}%`)
    }
    if (estado === 'activo') where += ` AND activo = 1`
    if (estado === 'inactivo') where += ` AND activo = 0`

    const total = db.prepare(countQuery + where).get(...params).total

    query += where + ` LIMIT ? OFFSET ?`
    const clientes = db.prepare(query).all(...params, Number(size), Number(offset))

    res.json({ data: clientes, total })
}

function getClienteById(req, res) {
    const cliente = db.prepare('SELECT * FROM clientes WHERE id = ?').get(req.params.id)
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' })
    res.json(cliente)
}

function crearCliente(req, res) {
    const { nombre, email, telefono, activo } = req.body
    const imagen = req.file ? `/uploads/${req.file.filename}` : null

    const id = uuidv4()
    const activoDb = parseInt(activo) === 1 ? 1 : 0

    db.prepare(`
    INSERT INTO clientes (id, nombre, email, telefono, activo, imagen)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(id, nombre, email, telefono, activoDb, imagen)

    res.status(201).json({ id, nombre, email, telefono, activo: activoDb, imagen })
}

function actualizarCliente(req, res) {
    const { id } = req.params
    const { nombre, email, telefono, activo } = req.body
    const imagen = req.file ? `/uploads/${req.file.filename}` : null

    if (!nombre || !email || !telefono) {
        return res.status(400).json({ error: 'Nombre, email y teléfono son obligatorios' })
    }

    const cliente = db.prepare('SELECT * FROM clientes WHERE id = ?').get(id)
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' })

    const activoDb = parseInt(activo) === 1 ? 1 : 0

    db.prepare(`
    UPDATE clientes
    SET nombre = ?, email = ?, telefono = ?, activo = ?, imagen = COALESCE(?, imagen)
    WHERE id = ?
  `).run(nombre, email, telefono, activoDb, imagen, id)

    res.json({ id, nombre, email, telefono, activo: activoDb, imagen: imagen || cliente.imagen })
}

function eliminarCliente(req, res) {
    const { id } = req.params
    const cliente = db.prepare('SELECT * FROM clientes WHERE id = ?').get(id)
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' })

    db.prepare(`DELETE FROM clientes WHERE id = ?`).run(id)
    res.json({ mensaje: 'Cliente eliminado exitosamente' })
}

module.exports = {
    getClientes,
    getClienteById,
    crearCliente,
    actualizarCliente,
    eliminarCliente
}
