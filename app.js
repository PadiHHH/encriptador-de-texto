const textArea = document.querySelector(".texto__input");
const mensaje = document.querySelector(".texto__output__textarea");

/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/

// Función para validar el texto que contenga letras minúsculas y sin caracteres especiales
function validarTexto(texto) {
    // Solo acepta letras minúsculas y espacios
    const caracteresValidos = 'abcdefghijklmnñopqrstuvwxyz ';

  for (let i = 0; i < texto.length; i++) {
    if (caracteresValidos.includes(texto[i])) {
      return true;
    }
  }
  return false;
}

// Función cuando se hace click en el botón Encriptar: 
// Desaparece los elementos de título, párrafo y la imagen
// Aparecen los elementos del boton de copiar y el resultado de la encriptacion
function btnEncriptar(){
    if (validarTexto(textArea.value)) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        document.querySelector(".texto__output__titulo").style.display = "none";
        document.querySelector(".texto__output__parrafo").style.display = "none";
        document.querySelector(".seccion__output__imagen").style.display = "none";
        document.querySelector(".boton__copiar").style.display = "block";
        document.querySelector(".texto__output__textarea").style.display = "block";
    } else {
        alert("Por favor, solo ingrese letras minúsculas y sin caracteres especiales")
    }
    
}

// Función encargada de encriptar con los parámetros definidos por las instrucciones
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptada;
}

// Función cuando se hace click en el botón Desencriptar: 
// Desaparece los elementos de título, párrafo y la imagen
// Aparecen los elementos del boton de copiar y el resultado de la desencriptacion
function btnDesencriptar(){
    if (validarTexto(textArea.value)) {
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        document.querySelector(".texto__output__titulo").style.display = "none";
        document.querySelector(".texto__output__parrafo").style.display = "none";
        document.querySelector(".seccion__output__imagen").style.display = "none";
        document.querySelector(".boton__copiar").style.display = "block";
        document.querySelector(".texto__output__textarea").style.display = "block";

    } else {
        alert("Por favor, solo ingrese letras minúsculas y sin caracteres especiales")
    }
    
}


// Función encargada de desencriptar con los parámetros definidos por las instrucciones
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptada;
}


// Función para copiar los elementos del textarea en el portapapeles del usuario
function btnCopiar() {
    let copiar = navigator.clipboard.writeText (mensaje.value);
    return copiar ;
}
