/**
 * Obtener data
 */
exports.getData = (require, response) => {
    if(satellite.name === '' || satellite.country === ''){
        response.send(doesNotExist('No existen ningun satelite registrado.'));
    } else{
        response.send(satellite)
    }
}; 

/**
 * Insertar data
 */
exports.insertData = (require, response) => {
    if(!require.body.name || !require.body.country){
        response.send(requiredParams());
    } else if(satellite.name !='' || satellite.country != ''){
        response.send({
            error: true,
            message: "Ya hay un satelite registrado",
            suggestion: "Utilizar el metodo DELETE para eliminar el satelite registrado"
        });
    } else{
        setSatelliteValues(require.body.name, require.body.country);
        response.send(success('Satelite registrado correctamente'));
    }
}; 

/**
 * Actualizar data
 */
exports.updateData = (require, response) => {
    if(!require.body.name || !require.body.country){
        response.send(requiredParams());
    } else if(satellite.name === '' || satellite.country === ''){
        response.send(doesNotExist('No existen ningun satelite registrado para actualizar'));
    } else{
        setSatelliteValues(require.body.name, require.body.country);
        response.send(success('Satelite actualizado correctamente'));
    }
}; 

/**
 * Eliminar data
 */
exports.removeData = (require, response) => {
    if(satellite.name === '' || satellite.country === ''){
        response.send(doesNotExist('No existen ningun satelite registrado para borrar'));
    } else{
        setSatelliteValues('', '');
        response.send(success('Satelite eliminado exitosamente'));
    }    
};

/**
 * Funciones y array utilizado guardar informacion y mostrar
 * mensajes.
 */
let satellite = {
    name: '',
    country: ''
};

function doesNotExist(msg){
    return {
        error: true,
        message: msg,
        suggestion: 'Utilizar un metodo POST para registrar un satelite',
        post_params: "name, country"   
    }
};

function requiredParams(msg){
    return{
        error: true,
        message: 'El nombre y el pais son obligatorios'
    }
};

function success(msg){
    return{
        error: false,
        message: msg,
        data: satellite
    }
}

function setSatelliteValues(name, country){
    satellite.name = name;
    satellite.country = country;
}