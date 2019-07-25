var metodos = {};

metodos.calificar = (grado, articulos, libros, proyectos, asesorado) => {
    if (grado === 'titulo profesional' && articulos > 3 && libros > 0 && proyectos > 1 && asesorado > 0) {
        return 'Nivel 1';
    } if (grado === 'doctor' && articulos > 6 && libros > 1 && proyectos > 1 && asesorado > 2) {

        return 'Nivel 2';
    } if (grado === 'maestro' && articulos > 6 && libros > 1 && proyectos > 1 && asesorado > 2) {

        return 'Nivel 2';
    } if (grado === 'maestro' && articulos > 10 && libros > 2 && proyectos > 2 && asesorado > 4) {

        return 'Nivel 3';
    } if (grado === 'doctor' && articulos > 10 && libros > 2 && proyectos > 2 && asesorado > 4) {

        return 'Nivel 3';
    } else {

        return 'No se te puede categorizar';
    }
}

module.exports = metodos;