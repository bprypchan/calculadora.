
function seleccionar(numero){   
    document.getElementById("pantalla2").innerHTML += numero;
    console.log(numero);
    return numero;
 }

 function simbolos(caracter){
    document.getElementById("pantalla2").innerHTML += caracter;
    console.log(caracter);
 }

 function porcentaje(){
     document.getElementById("pantalla2").innerHTML=eval(document.getElementById("pantalla2").innerHTML*(1/100));
 }

 function resultado(valor){
    document.getElementById("pantalla2").innerHTML=eval(document.getElementById("pantalla2").innerHTML);
    console.log(valor);
 }

 function borrarTodo(){
     document.getElementById("pantalla2").innerHTML = "";
 }

 function evento(){
    var texto = (document.getElementById("pantalla2").innerHTML);
    texto = true;
    if (texto) {
        texto = texto.slice(0, -1);
    }
   } //no funciona. no se como hacer para borrar un caracter si tengo varias variables para todo
  
    
  