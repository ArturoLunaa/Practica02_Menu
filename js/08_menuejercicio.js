'use strict'
var optPlatillo = "";
var optBebida = "";
var cantPlatillo = 0;
var cantBebida = 0;
var moreFood = 0;
var moreDrink = 0;
//ALIMENTOS TOTAL
var totalHam = 0;
var totalHD = 0;
var totalPap = 0;
//BEBIDAS TOTAL
var totalAgua = 0;
var totalCer = 0;
var totalSoda = 0;

var totalBeb = 0;
var total = 0;

document.write("<h2>PLATILLOS</h2>");
do{
    optPlatillo = prompt("Menu de Platillos\n Seleccione la opción de su agrado: \n 1. Hamburguesa de res ($40) \n 2. Hotdog ($30) \n 3.Papas fritas ($25 orden)");
        cantPlatillo = prompt("¿Cuántas ordenes de este platillo requiere?");
        cantPlatillo = parseInt(cantPlatillo);
        //Pregunta si quiere ordenar otra cosa
    moreFood = prompt("¿Desea ordenar otro alimento? \n 1.Si \n 2.No");
    moreFood = parseInt(moreFood);
    
    var i=moreFood;

switch (optPlatillo) {
    case "1":
        //Hamburguesa 40
        totalHam += 40*cantPlatillo;
        document.write("<p>HAMBURGUESA-- " + cantPlatillo + " PIEZAS-- $"+ totalHam +"\n</p>" );
        break;
    case "2":
        //Hotdog 30
      
        totalHD += 30*cantPlatillo;
        document.write("<p>HOTDOG-- " + cantPlatillo + " PIEZAS-- $"+ totalHD +"\n</p>" );
        break;
    case "3":
        //Papas fritas 25
       
        totalPap += 25*cantPlatillo;
        document.write("<p>PAPAS\-- " + cantPlatillo + " PIEZAS-- $"+ totalPap +"\n</p>" );
        break;

    default:
        alert("Usted ha seleccionado una opción incorrecta, recargue la web para volver a elegir")
        break;    
}

}while(i==1);
//SACAR TOTAL POR PLATILLOS
var totalPla = 0;
totalPla += totalHam + totalHD + totalPap;
document.write("<h4> TOTAL PLATILLOS: $" + totalPla + "</h4>");


document.write("<h2>BEBIDAS</h2>");
do{
    optBebida = prompt("Menu de bebidas \n Seleccione la opción de su agrado: \n 1. Agua ($20) \n 2. Soda ($30) \n 3. Cerveza ($45)");
        cantBebida = prompt("¿Cuántas de éstas bebidas requiere?");
        cantBebida = parseInt(cantBebida);
        //Pregunta si quiere ordenar otra bebida
    moreDrink = prompt("¿Desea ordenar otra bebida? \n 1.Si \n 2.No");
    moreDrink = parseInt(moreDrink);
    
    var i=moreDrink;

    switch (optBebida) {
        case "1":
            //Agua 20
            totalAgua += 20*cantBebida;
            document.write("<p>AGUA--" + cantBebida + " PIEZAS-- $"+ totalAgua +"\n</p>" );
            break;
        case "2":
            //Soda 30
            totalSoda += 30*cantBebida;
            document.write("<p>SODA-- " + cantBebida + " PIEZAS-- $"+ totalSoda +"\n</p>" );
            break;
        case "3":
            //Cerveza 45
            totalCer += 45*cantBebida;
            document.write("<p>Cerveza-- " + cantBebida + " PIEZAS-- $"+ totalCer +"\n</p>" );
            break;
    
        default:
            alert("Usted ha seleccionado una opción incorrecta, recargue la web para volver a elegir")
            break;    
    }  

  
}while(i==1);


totalBeb = totalAgua + totalCer + totalSoda;
total = totalPla + totalBeb;
document.write("<h4>TOTAL BEBIDAS: $" + totalBeb + "</h4><h3>TOTAL: $" + total + "</h3>");





