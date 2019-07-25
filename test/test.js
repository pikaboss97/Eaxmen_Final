var assert = require('assert');
var prog = require('../src/routes/op');

describe('Categorizar Investigador', function(){
    describe('Categoría Modulo', function(){

        it('should have a catogorize Method', function(){
            assert.equal(typeof prog, 'object');
            assert.equal(typeof prog.calificar, 'function');
        });

        it('Comprobar la funcionalidad del metodo [Entras en la categoría de Nivel 1]', function(){
            assert.deepEqual(prog.calificar('titulo profesional',4,2,2,2), "Nivel 1");
        });
        it('Comprobar la funcionalidad del metodo [Entras en la categoría de Nivel 2]', function(){
            assert.deepEqual(prog.calificar('doctor',7,2,2,3), "Nivel 2");
        });
        //it('Comprobar la funcionalidad del metodo [Entras en la categoría de Nivel 3]', function(){
            //assert.deepEqual(prog.calificar('maestro',11,3,3,5), "Nivel 3");
        //});

    });
});