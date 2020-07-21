'use strict'
const {check,validationResult}=require('express-validator')
const Cuestionario= require('../models/Cuestionario')


let postCuestionario = (req,res)=>{

	const e = validationResult(req)
	if (!e.isEmpty()) {
		return res.status(422).json({ e: e.array() })
	}
	else{
		return res.status(200).send({
			 message:`la validacion es correcta`
		})
		
	}
	
}
let validacionTexto=(req,res)=>{
	const e=validationResult(req)
	if(!e.isEmpty()){
		return res.status(442).json({e:e.array()})
	}
	else{
		return res.status(200).json({
			message:`la validacion es correcta`
		})
	}
}
let validacionSelect=(req,res)=>{
	const e=validationResult(req)
	if (!e.isEmpty()) {
		return res.status(442).json({e:e.array()})
	}
	else{
		return res.status(200).json({
			message:`la validacion es correcta`
		})
	}

}
let validacionSelectOption=(req,res)=>{
	const e= validationResult(req)
	if(!e.isEmpty()){
		return res.status(442).json({e:e.array()})
	}
	else{
		return res.status(200).json({
			message:`la validacion es correcta`
		})
	}
}

module.exports={
	postCuestionario,
	validacionTexto,
	validacionSelect,
	validacionSelectOption
}