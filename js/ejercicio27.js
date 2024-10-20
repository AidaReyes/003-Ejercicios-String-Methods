const SnakeCase =(cadena) => {
    return cadena.toLowerCase().replace(/ /g, '_');
  };
 console.log(SnakeCase('Las ganas de superarme por las noches me perturban'));