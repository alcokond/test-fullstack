const express = require('express')
const cors = require('cors')
const clientesRoutes = require('./routes/clientes')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/api/clientes', clientesRoutes)

app.listen(3000, () => {
    console.log('Servidor backend con SQLite escuchando en http://localhost:3000')
})