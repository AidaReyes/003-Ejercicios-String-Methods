const removerCaracter =(cadena)=> {
    return cadena.replace(/[^a-zA-Z0-9\s]/g, '');
};
console.log(removerCaracter("Hola@mundo!"));