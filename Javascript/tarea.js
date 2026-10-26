// 1. Poción mágica
function calcularPocion() {
  const salida = document.getElementById("resultadoPocion");
  const alturaTexto = document.getElementById("altura").value.trim();
  const pocionTexto = document.getElementById("pocion").value.trim();

  if (alturaTexto === "" || pocionTexto === "") {
    salida.textContent = "Error: completa ambos campos.";
    salida.className = "resultado error";
    return;
  }

  const altura = Number(alturaTexto);
  const pocion = Number(pocionTexto);
  if (!Number.isFinite(altura) || !Number.isFinite(pocion) ||
      altura <= 0 || pocion < 0 || pocion > 100) {
    salida.textContent = "Error: altura positiva y poción de 0 a 100 ml.";
    salida.className = "resultado error";
    return;
  }

  const alturaFinal = altura - pocion * 0.5;
  if (alturaFinal <= 0) {
    salida.textContent = "Error: la altura final debe ser positiva.";
    salida.className = "resultado error";
    return;
  }

  let mensaje;
  if (alturaFinal <= 100) {
    mensaje = "Alicia puede cruzar la puerta.";
  } else {
    mensaje = "Alicia no puede cruzar la puerta.";
  }
  salida.textContent = "Altura final: " + alturaFinal.toFixed(2) + " cm.\n" + mensaje;
  salida.className = "resultado correcto";
}

// 2. Merienda
function calcularMerienda() {
  const salida = document.getElementById("resultadoMerienda");
  const nombre = document.getElementById("invitado").value.trim();
  const bebida = document.getElementById("bebida").value;
  const tazasTexto = document.getElementById("tazas").value.trim();

  if (nombre === "" || bebida === "" || tazasTexto === "") {
    salida.textContent = "Error: completa todos los campos.";
    salida.className = "resultado error";
    return;
  }

  const tazas = Number(tazasTexto);
  if (!Number.isInteger(tazas) || tazas < 1 || tazas > 20) {
    salida.textContent = "Error: ingresa entre 1 y 20 tazas enteras.";
    salida.className = "resultado error";
    return;
  }

  let precio = 0;
  let nombreBebida = "";
  switch (bebida) {
    case "te": precio = 5; nombreBebida = "Té"; break;
    case "cafe": precio = 7; nombreBebida = "Café"; break;
    case "chocolate": precio = 9; nombreBebida = "Chocolate"; break;
    case "limonada": precio = 6; nombreBebida = "Limonada"; break;
    default:
      salida.textContent = "Error: bebida incorrecta.";
      salida.className = "resultado error";
      return;
  }

  const subtotal = precio * tazas;
  let descuento = 0;
  if (subtotal >= 50) {
    descuento = subtotal * 0.10;
  }
  const total = subtotal - descuento;

  salida.textContent = "Invitado: " + nombre +
    "\nBebida: " + nombreBebida +
    "\nTazas: " + tazas +
    "\nPrecio unitario: " + precio.toFixed(2) + " Bs" +
    "\nSubtotal: " + subtotal.toFixed(2) + " Bs" +
    "\nDescuento: " + descuento.toFixed(2) + " Bs" +
    "\nTotal: " + total.toFixed(2) + " Bs";
  salida.className = "resultado correcto";
}

// 3. Reina de Corazones
function analizarCartas() {
  const salida = document.getElementById("resultadoCartas");
  const texto = document.getElementById("cartas").value.trim();

  if (texto === "") {
    salida.textContent = "Error: ingresa el número de cartas.";
    salida.className = "resultado error";
    return;
  }
  const cantidad = Number(texto);
  if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > 30) {
    salida.textContent = "Error: ingresa un entero de 1 a 30.";
    salida.className = "resultado error";
    return;
  }

  let pares = 0, impares = 0, sumaPares = 0, sumaImpares = 0;
  let secuencia = "";
  for (let numero = 1; numero <= cantidad; numero++) {
    if (numero % 2 === 0) {
      pares++;
      sumaPares += numero;
      secuencia += numero + " (par) ";
    } else {
      impares++;
      sumaImpares += numero;
      secuencia += numero + " (impar) ";
    }
  }

  let ganador;
  if (sumaPares > sumaImpares) {
    ganador = "La suma mayor es la de los pares.";
  } else if (sumaImpares > sumaPares) {
    ganador = "La suma mayor es la de los impares.";
  } else {
    ganador = "Hay empate.";
  }

  salida.textContent = "Secuencia: " + secuencia +
    "\nCantidad de pares: " + pares + " | Suma: " + sumaPares +
    "\nCantidad de impares: " + impares + " | Suma: " + sumaImpares +
    "\n" + ganador;
  salida.className = "resultado correcto";
}

// Los formularios no deben recargar la página.
document.getElementById("formPocion").addEventListener("submit", function(evento) {
  evento.preventDefault();
  calcularPocion();
});
document.getElementById("formMerienda").addEventListener("submit", function(evento) {
  evento.preventDefault();
  calcularMerienda();
});
document.getElementById("formCartas").addEventListener("submit", function(evento) {
  evento.preventDefault();
  analizarCartas();
});
