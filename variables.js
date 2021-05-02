var usuario = "administrador";
var password = 1234;
var login;
var usuario1;
var password1;
var mensaje;
var numero1;
var numero2;
var numero3;
var HolaMundo;
var message = "hello world";

function login(){
   usuario1 = prompt ("Ingrese usuario");
   password1 = prompt ("Ingrese su contraseña");

   if(usuario1 == usuario && password1 == password){
       console.log("Bienvenido");  
        document.getElementById("mensaje").innerHTML= "Bienvenidos";
   }else{
       console.log("Error");
       document.getElementById("mensaje").innerHTML= "Usuario o contraseña incorrecto";
   }
}

function numero() {
    numero1 = prompt ("Ingrese un numero del 1 al 10");
    numero2 = prompt ("Ingrese otro número del 1 al 10");
    numero3 = prompt ("Ingrese un último número del 1 al 10");
    if(numero1 >= numero2){
        if(numero1 >= numero3){
            console.log("El numero ingresado mayor es: " + numero1);
        }else{ 
            console.log("El numero ingresado mayor es: " + numero3);
        }
        if(numero2 <= numero3){
            console.log("El numero ingresado menor es: " + numero2);
        }else{
            console.log("El numero ingresado menor es: " + numero3);
        }

        
    }else{
        if(numero2>= numero3){
            console.log("El numero ingresado mayor es: " + numero2);

        }else{
            console.log("El numero ingresado mayor es: " + numero3);
        }
        if(numero1 <= numero3){
            console.log("El numero ingresado menor es: " + numero1);
        }else{
            console.log("El numero ingresado menor es: " + numero3);
        }
    }
 

}

function HolaMundo(){
    console.log(message);
}