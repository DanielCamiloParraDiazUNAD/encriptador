function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    textoCifrado = textoCifrado.toLowerCase()   
    
    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./imagenes1/sherlock.png";
        
    } else {
        muñeco.src = "./imagenes1/tienda-espia.png"; 
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Oooops!", "Debes ingresar un texto", "warning");
    }
    
    
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if (texto.length !=0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con exito";
            parrafo.textContent = "";
            muñeco.src = "./imagenes1/desencriptado.png";
        } else {
            muñeco.src = "./imagenes1/tienda-espia.png"; 
            tituloMensaje.textContent = "Ningun mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Oooops!", "Debes ingresar un texto", "warning");
        }
}



function btnCopiar(){
    // let texto = document.getElementById("texto").value;
    // let tituloMensaje = document.getElementById("titulo-mensaje");
    // let parrafo = document.getElementById("parrafo");
    // let muñeco = document.getElementById("muñeco");

    // let texto = document.getElementById("texto").value;


    texto.select();
    texto.setSelectionRange(0,99999);
    navigator.clipboard.writeText(texto.value);
}