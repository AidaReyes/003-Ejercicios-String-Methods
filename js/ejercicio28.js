const Palabras =(cadena)=> {
    return cadena.replace(/\b\w/g, (match) => match.toUpperCase());
  }
  console.log(Palabras("tal vez en otra galaxia sí fue diferente"));  