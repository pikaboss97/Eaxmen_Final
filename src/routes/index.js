//var fn = {};
const express = require('express');
const router = express.Router();
const Expediente = require('../models/expediente');

const calificar = require('calificar');
const op = require('./op');

router.get('/', async (req, res) => {

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

router.get('/calificar/:id', async (req, res) => {
    const { id } = req.params;
    const exp = await Expediente.findById(id);
    
    //calificar.categorizar(exp.grado,exp.articulos,exp.libros,exp.proyectos,exp.asesorado,res);
    var cat = op.calificar(exp.grado,exp.articulos,exp.libros,exp.proyectos,exp.asesorado);
    console.log(cat);
    res.send(cat);
   

})
module.exports = router;
//module.exports = fn;