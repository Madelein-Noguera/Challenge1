const textArea = document.querySelector(".text-area");
const resultado = document.querySelector(".resultado");
const remover = document.querySelector(".caja__contenedor");



const matrizCodigo = [
  ["e", "enter"], 
  ["i", "imes"], 
  ["a", "ai"], 
  ["o", "ober"], 
  ["u", "ufat"]
];

function transformarTexto(texto, esEncriptar) {
  texto = texto.toLowerCase();
  for (const [original, reemplazo] of matrizCodigo) {
    const [buscar, reemplazar] = esEncriptar ? [original, reemplazo] : [reemplazo, original];
    texto = texto.replaceAll(buscar, reemplazar);
  }
  return texto;
}

function btEncriptar() {
  resultado.value = transformarTexto(textArea.value, true);
  textArea.value = "";
  remover.remove()

  
}

function btDesencriptar() {
  resultado.value = transformarTexto(textArea.value, false);
  textArea.value = "";
  remover.remove()
}

function copy() {
  navigator.clipboard.writeText(resultado.value)
    .then(() => alert("Se ha copiado su texto"))
    .catch(err => alert("Error al copiar: " + err));
}

document.querySelector("#copy").addEventListener("click", copy);

