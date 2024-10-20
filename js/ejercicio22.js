function convertirACamelCase(frase) {
    return frase
      .toLowerCase() 
      .split(' ')    
      .map((palabra, indice) => 
        indice === 0 
          ? palabra 
          : palabra.charAt(0).toUpperCase() + palabra.slice(1) 
      )
      .join(''); 
  }
  
 
  let frase = "hola mundo ";
  console.log(convertirACamelCase(frase)); 