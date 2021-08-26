document.write("<h1>Práctica 02- Restaurante</h1>");
//ALIMENTOS
var nachos = 45;
var pizza = 120;
var tacos = 10;
//BEBIDAS
var agua = 15;
var soda = 30;
var cerveza = 45;


console.log("ALIMENTOS:");
var nA = 2;
console.log("Número de alimentos que desea:", nA);

var platillo = pizza & nachos;
switch(platillo){
    case nachos:
        console.log("Usted seleccionó Nachos $45");
        break;
    case pizza & nachos:
        console.log("Usted seleccionó Pizza $120 y Nachos $45");
        break;
    case tacos:
        console.log("Usted seleccionó Tacos $10");
        break;
    case nachos:
        console.log("Usted seleccionó Nachos $45");
        break;
    case pizza:
        console.log("Usted seleccionó Pizza $120");
        break;
    default:
        alert("seleccionaste una opcion incorrecta o que no se encuentra en el menú");
}


console.log("BEBIDAS:");
var nB = 3;
console.log("Número de bebidas que desea:", nB);

var bebidas = cerveza & soda & agua;

switch(bebidas){
    case agua:
        console.log("Usted seleccionó Agua Natural $15");
        break;
    case soda:
        console.log("Usted seleccionó Sodas $30");
        break;
    case cerveza:
        console.log("Usted seleccionó Cerveza $45");
        break;
    case soda:
        console.log("Usted seleccionó Sodas $30");
        break;
    case cerveza & soda & agua:
        console.log("Usted seleccionó Cerveza $45, Soda $30 y Agua $15");
        break;
    default:
        alert("seleccionaste una opcion incorrecta o que no se encuentra en el menú");
}

var total = cerveza + soda + agua + pizza + nachos;
console.log("SU TOTAL SERÍA DE: $", total);


