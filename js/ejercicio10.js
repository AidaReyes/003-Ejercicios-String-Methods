const contarOcurrencias = (cadena, letra) => 
    [...cadena].filter(caracter => caracter === letra).length;
console.log(contarOcurrencias("javascript", "a")); 