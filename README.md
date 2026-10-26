# Alicia en el país de las maravillas

**Materia:** Programación Web I  
**Tecnologías:** HTML5, CSS3 y JavaScript nativo.

## Descripción
Esta aplicación web reúne tres ejercicios interactivos inspirados en Alicia en el país de las maravillas. Los formularios reciben información, verifican los datos y presentan resultados directamente en la página sin recargarla.

## Organización
- `index.html`: contiene los tres formularios.
- `css/estilos.css`: contiene los colores, bordes, botones y diseño adaptable.
- `Javascript/tarea.js`: contiene funciones, estructuras de control, cálculos y validaciones.

## Funcionamiento
El archivo `index.html` puede abrirse en un navegador moderno con las carpetas del proyecto conservadas. Cada formulario incluye sus campos y un botón para ejecutar la operación. Los resultados se muestran inmediatamente debajo de cada ejercicio.

## Ejercicio 1: Poción mágica
**Entradas:** altura de Alicia en centímetros y poción en mililitros.

**Regla:** altura final = altura inicial − (poción × 0,5). La puerta mide 100 cm.

**Proceso:** la función `calcularPocion()` comprueba los valores, calcula la altura y utiliza `if/else` para establecer si Alicia atraviesa la puerta.

**Validaciones:** altura inicial mayor que cero, poción entre 0 y 100 ml y altura final positiva.

**Ejemplo:** altura 140 cm y poción 100 ml producen 90 cm; Alicia puede pasar.

## Ejercicio 2: Merienda del Sombrerero Loco
**Entradas:** nombre, bebida y número de tazas.

**Precios:** té 5 Bs, café 7 Bs, chocolate 9 Bs y limonada 6 Bs.

**Proceso:** la función `calcularMerienda()` obtiene el precio mediante `switch`. Calcula el subtotal y aplica un 10 % de descuento cuando llega a 50 Bs. Después muestra el total.

**Validaciones:** nombre no vacío, bebida seleccionada y cantidad entera de 1 a 20 tazas.

**Ejemplo:** 6 chocolates cuestan 54 Bs. Descuento 5,40 Bs. Total 48,60 Bs.

## Ejercicio 3: Desafío de la Reina de Corazones
**Entrada:** número entero de cartas entre 1 y 30.

**Proceso:** la función `analizarCartas()` utiliza `for` para recorrer las cartas. Con `%` comprueba si cada número es par o impar, cuenta las cantidades, suma los valores y compara ambos grupos.

**Salida:** secuencia de cartas, cantidades y sumas de pares e impares y el grupo con mayor suma o empate.

**Ejemplo:** con 3 cartas, los pares suman 2 y los impares suman 4.

## Elementos del código
- `const`: variables cuyo valor no se reasigna.
- `let`: variables que cambian, como los contadores y acumuladores.
- `if/else`: selección por condiciones.
- `switch`: selección de precio de la bebida.
- `for`: repetición para las cartas.
- `getElementById()`: búsqueda de elementos del HTML.
- `value`: lectura de los campos.
- `textContent`: presentación de resultados y errores.
- `addEventListener("submit", ...)`: gestión de formularios.
- `preventDefault()`: impide la recarga del navegador.
- `Number()`: conversión numérica de datos.
- Operadores `+`, `-`, `*`, `%`, `===`, `<=`, `>=` y `||`.

## Validación y pruebas
El programa controla campos vacíos, rangos no permitidos y cantidades no enteras cuando corresponde. El conjunto de verificación contempla cinco casos por ejercicio, con entradas válidas, inválidas y casos límite.

## Características
- Tres ejercicios en una misma página.
- HTML, CSS y JavaScript separados.
- Diseño adaptable, sin Flexbox ni CSS Grid.
- Formularios con etiquetas vinculadas a los campos.
- Resultados y errores dentro de la página, sin recarga.

## Conclusión
El proyecto aplica las estructuras de programación fundamentales mediante situaciones interactivas, combinando formularios HTML, estilos CSS y manipulación del DOM con JavaScript.
