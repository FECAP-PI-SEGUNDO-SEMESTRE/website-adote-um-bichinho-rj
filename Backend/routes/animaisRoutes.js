// const express = require('express')
// const router = express.Router();
// const personagensController = require('../controllers/personagensController')
// // const upload = require('../config/multerConfig')

// router.post('/', personagensController.createForm)
// // router.put('/:id', upload.single('imagem'), formularioController.updatePersonagem)
// // router.get('/', formularioController.getAllPersonagem)
// // router.get('/:id', formularioController.getPersonagemById)
// // router.delete('/:id', formularioController.deletePersonagem)

// module.exports = router


const express = require('express')
const router = express.Router();
const animaisController = require('../controllers/animaisController')
const upload = require('../config/multerConfig')

router.post('/', upload.single('imagem'), animaisController.createAnimal)
router.put('/:id', upload.single('imagem'), animaisController.updateAnimal)
router.get('/', animaisController.getAllAnimals)
router.get('/:id', animaisController.getAnimalById)
router.delete('/:id', animaisController.deleteAnimal)

module.exports = router