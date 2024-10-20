const resultado =(cadena)=> {
    const frecuencia = {};
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i];
      if (frecuencia[caracter]) {
        frecuencia[caracter]++;
      } else {
        frecuencia[caracter] = 1;
      }
    }
    return frecuencia;
  }
  
  const cadena = "abbccc";
  console.log(resultado(cadena)); 