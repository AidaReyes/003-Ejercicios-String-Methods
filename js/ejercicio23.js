function truncarCadena(cadena, numCaracteres) {
    return cadena.length > numCaracteres  
  }
  
  let texto = "JavaScript es genial";
  let numCaracteres = 10;
  console.log(truncarCadena(texto, numCaracteres));