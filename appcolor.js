//Crear un documento html con 3 cuadrados que, al ser clickeados, 
//cambien el color de fondo del documento. Cada cuadrado deberá tener un color distinto.

//Programar un contador de caracteres para un textarea.

//Ej1
var box  = document.getElementsByClassName('Box');
var box1 = document.getElementsByClassName('Box1');
var box2 = document.getElementsByClassName('Box2');
var box3 = document.getElementsByClassName('Box3');


function cambiarcolor(color) {
    document.querySelector('body').style.background = color;
} 

function countChar(val) {
    var len = val.value.length;
    if (len >= 500) {
      val.value = val.value.substring(0, 500);
    } else {
      $('#charNum').text(500 - len);
    }
  };