
// 9. Convertir la primera letra a mayúscula
const capitalizarPrimeraLetra = (cadena) => 
    cadena.charAt(0).toUpperCase() + cadena.slice(1);

// 10. Contar ocurrencias de una letra en una cadena
const contarOcurrencias = (cadena, letra) => 
    [...cadena].filter(caracter => caracter === letra).length;

// 11. Revertir una cadena
const revertirCadena = (cadena) => cadena.split('').reverse().join('');

// 12. Comprobar si una palabra es un palíndromo
const esPalindromo = (palabra) => 
    palabra === revertirCadena(palabra);

// 13. Concatenar dos cadenas
const concatenarCadenas = (cadena1, cadena2) => cadena1 + cadena2;

// 14. Obtener el carácter en una posición
const obtenerCaracter = (cadena, posicion) => cadena.charAt(posicion);

// 15. Obtener el último carácter de una cadena
const obtenerUltimoCaracter = (cadena) => cadena.charAt(cadena.length - 1);

// 16. Convertir una cadena en un array de palabras
const convertirAArrayDePalabras = (cadena) => cadena.split(' ');

// 17. Contar el número de palabras en una cadena
const contarPalabras = (cadena) => cadena.split(' ').length;

// 18. Eliminar todas las vocales de una cadena
const eliminarVocales = (cadena) => cadena.replace(/[aeiouAEIOU]/g, '');

// 19. Comprobar si una cadena comienza con una palabra
const comienzaCon = (cadena, palabra) => cadena.startsWith(palabra);

// 20. Comprobar si una cadena termina con una palabra
const terminaCon = (cadena, palabra) => cadena.endsWith(palabra);

// 21. Reemplazar todas las ocurrencias de una palabra
const reemplazarTodasLasOcurrencias = (cadena, palabraAntigua, palabraNueva) => 
    cadena.replaceAll(palabraAntigua, palabraNueva);

// 22. Convertir una frase a camelCase
const convertirACamelCase = (cadena) => 
    cadena.split(' ').map((palabra, index) => 
        index === 0 ? palabra.toLowerCase() : capitalizarPrimeraLetra(palabra)
    ).join('');

// 23. Truncar una cadena a un número de caracteres
const truncarCadena = (cadena, maxLength) => 
    cadena.length > maxLength ? cadena.substring(0, maxLength) + '...' : cadena;

// 24. Comprobar si una cadena contiene solo números
const soloNumeros = (cadena) => /^\d+$/.test(cadena);