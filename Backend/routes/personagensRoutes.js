const express = require('express')
const router = express.Router();
const personagensController = require('../controllers/personagensController')
// const upload = require('../config/multerConfig')

router.post('/', personagensController.createForm)
// router.put('/:id', upload.single('foto'), formularioController.updatePersonagem)
// router.get('/', formularioController.getAllPersonagem)
// router.get('/:id', formularioController.getPersonagemById)
// router.delete('/:id', formularioController.deletePersonagem)

module.exports = router