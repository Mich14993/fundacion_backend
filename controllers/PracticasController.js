
'use strict'
const {check,body,validationResult}=require('express-validator')
const Practica = require('../models/Practica')
const Materia = require('../models/Materia')

let getPractica = async(req,res,next)=>{
	try{
		return res.status(200).send({
			materia:await Materia.findOne({"_id":req.params.pId}).exec(),
			practicas:await Practica.find({"materia_id":req.params.pId})
					  .sort({number_practice:-1}).exec()
		})
		next()
	}
	catch(e){
		if (e) {
			return res.status(404).send('Not found')
			next()
			return res.status(500).send({
		      message: `Error al realizar la petición: ${e}`
		    })
			next()
		}
	}
}
let savePractica = async(req,res,next)=>{
	let practica=await Practica.find({"materia_id":req.body.materia_id}).countDocuments().exec()
	if (req.body.number_practice) {
	    await body('number_practice')
	      .equals((practica+1).toString())
	      .withMessage(`Error: Práctica ${req.body.number_practice} ya existente`)
	      .run(req);
	}
	try {
	  	validationResult(req).throw();
	  	const{number_practice,title,materia_id}=req.body
	  	const practica= new Practica({number_practice,title,materia_id})
	 	await practica.save()
	  	return res.status(200).send({message:'Añadido correctamente'})
	  	next()
	} 
	catch (e) {
		if (e) {
			return res.status(422).json(e.mapped())
			next()
			return res.status(500).send({message:`Error al guardar en la BD ${e}`})
			next()
	 	}
	}
}
let deletePractica =async(req, res,next)=> {
	    try{
			let prueba= await Practica.findById(req.params.pId)
			await Practica.updateMany({materia_id:{$in:prueba.materia_id},
			number_practice:{$gt:prueba.number_practice}},
			{ $inc: { number_practice: -1 }},{multi:true})	
	    	await Practica.remove({ _id: req.params.pId })
			return res.status(200).send({message: "El producto ha sido eliminado"})
		}
		catch(e){
			if(e) {
				return res.status(500).send({message: `Error al borrar la práctica, la práctica no existe `})
				next()
			}
		}	
} 
module.exports={
	getPractica,
	savePractica,
	deletePractica
}