'use strict'
const {check,body}=require('express-validator')

const cuestionarioValidacion=[
 	check('title').isLength({min:10,max:100}).withMessage(`El campo Título debe contener mayor a 10 caracteres
 		y menor a 100 caracteres`),
  	check('description').isLength({min:30,max:500}).withMessage(`El campo Descripción debe contener mayor a 30 caracteres
 		y menor a 500 caracteres`)
]
const validacionText=[
	check('questionText').isLength({min:50},{max:500}).withMessage(`El campo Ingresar pregunta debe contener mayor a 50
		caracteres y menor a 500 caracteres`)
]
const validacionSelect=[
	check('preguntatext').isLength({min:50},{max:500}).withMessage(`El campo Ingresar pregunta debe contener mayor a 50
		caracteres y menor a 500 caracteres`),
	body('opciones').custom((value, { req }) => {
	  if (value.length<2) {
	  	throw new Error(`Se debe crear dos o mas opciones`)
	  }
	  else
	  {
	  	return true
	  }
	  
	})
]
const validacionSelectOption=[
	check('textOption').isLength({min:10},{max:50}).withMessage(`El campo Nombre de la opcion debe contener mayor a 10 
		caracteres y menor a 50 caracteres`)
]
module.exports={
	cuestionarioValidacion,
	validacionText,
	validacionSelect,
	validacionSelectOption
}