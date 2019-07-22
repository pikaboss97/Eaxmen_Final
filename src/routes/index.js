const express = require('express');
const router = express.Router();
const Expediente = require('../models/expediente');


router.get('/', async (req,res) =>{
    
    const expedientes = await Expediente.find();
    console.log(expedientes);
    res.render('index', {
        expedientes
    });
})

router.post('/add', async (req, res) => {


    const expd = new Expediente(req.body);
    console.log(expd);
    await expd.save();
    //res.send('echo');
    res.redirect('/');
})

router.get('/calificar/:id', async (req,res) => {
    const{ id } = req.params;
    const exp = await Expediente.findById(id);
    if(exp.grado ==='titulo profesional' && exp.articulos > 3 && libros > 0 && proyectos >1 && asesorado>0){
        res.send('Entras en la categoría de Nivel 1');
    }if(exp.grado ==='doctor' && exp.articulos > 6 && exp.libros > 1 & exp.proyectos > 1 && exp.asesorado> 2){
        res.send('Entras en la categoría de Nivel 2');
    }if(exp.grado ==='maestro' && exp.articulos > 6 && exp.libros > 1 & exp.proyectos > 1 && exp.asesorado> 2){
        res.send('Entras en la categoría de Nivel 2');
    }if(exp.grado ==='maestro' && exp.articulos > 10 && exp.libros > 2 & exp.proyectos > 2 && exp.asesorado> 4){
        res.send('Entras en la categoría de Nivel 3');
    }if(exp.grado ==='doctor' && exp.articulos > 10 && exp.libros > 2 & exp.proyectos > 2 && exp.asesorado> 4){
        res.send('Entras en la categoría de Nivel 3');
    }else{
        res.send('No se te puede categorizar');
    }
    
})
module.exports = router;