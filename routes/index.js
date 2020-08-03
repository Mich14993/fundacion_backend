'use strict'
const express = require('express')
const guideCtrl = require('../controllers/GuiaController')
const practicaCtrl=require('../controllers/PracticasController')
const cuestionarios =require('../controllers/CuestionarioController')
const cuestionarioValidacion=require('../validations/cuestionarioValidation')
const router = express.Router()



// Routes
router.get("/", (req, res) => {
 res.send("Hello from Node.js app \n");
});
router.get('/materia', guideCtrl.getMateria)
router.get('/getPractica/:pId',practicaCtrl.getPractica)
router.post('/postPractica',practicaCtrl.savePractica)
router.delete('/deletePractica/:pId', practicaCtrl.deletePractica)
////////////Cuestionarios////////////////
router.post('/cuestionariopost',cuestionarioValidacion.cuestionarioValidacion,cuestionarios.postCuestionario)
///////validacion cuestionarios////
router.post('/validacionText',cuestionarioValidacion.validacionText,cuestionarios.validacionTexto)
router.post('/validacionSelect',cuestionarioValidacion.validacionSelect,cuestionarios.validacionSelect)
router.post('/validacionSelectOption',cuestionarioValidacion.validacionSelectOption,cuestionarios.validacionSelectOption)


module.exports = router
