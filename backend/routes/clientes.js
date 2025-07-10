const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const {
    getClientes,
    getClienteById,
    crearCliente,
    actualizarCliente,
    eliminarCliente
} = require('../controllers/clienteController')

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
})

const upload = multer({ storage })

router.get('/', getClientes)
router.get('/:id', getClienteById)
router.post('/', upload.single('imagen'), crearCliente)
router.put('/:id', upload.single('imagen'), actualizarCliente)
router.delete('/:id', eliminarCliente)

module.exports = router;