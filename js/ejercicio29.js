const comprimirLaCadena =(cadena)=> {
    let cadenaComprimida = '';
    let letraactual = '';
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] !== letraactual) {
        cadenaComprimida += cadena[i];
        letraactual = cadena[i];
      }
    }
    return cadenaComprimida;
  }
  console.log(comprimirLaCadena("aabbccdde"));