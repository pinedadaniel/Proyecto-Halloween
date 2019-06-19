var totalPuntos = 1230;
var amigos =['Mike','Lucas','Dustin','Eleven','Max'];
var artefactos = 3;
var puntosArtefactosPorAmigo = [0,0,0,0,0];
var porcentaje = [0,0,0,0,0];
var totalPuntosArtefacto =0;

for (var i=0; i<amigos.length; i++){
    for (var j=0; j <artefactos; j++){
        do{
    var artefacto = prompt("Ingrese los puntos del artefacto "+(j+1)+" Recolectado por "+amigos[i]);
    artefacto = parseInt(artefacto)
        }while(artefacto<1 || artefacto > 100)
 

 puntosArtefactosPorAmigo[i] += artefacto;


//alert("el total de punos va en " + puntosArtefactosPorAmigo[i]);
    }

totalPuntosArtefacto+= puntosArtefactosPorAmigo[i];

}

for (var k =0; k < puntosArtefactosPorAmigo.length; k++){
    document.write(
        "<h3> * Los puntos que recogio "+ amigos[k]+" fueron en total: "+ puntosArtefactosPorAmigo[k],

"<h3> --------------------------------------------------------------------------------------");
   
}

document.write("<h3> *Total de puntos de Poder mistico Reunidos: "+"|"+ totalPuntosArtefacto +"| "

);
if(totalPuntosArtefacto < 1230){
    document.write("<h3> ¡No se alcanzo la meta de Puntos para liberar a Will! ")
    }else if(totalPuntosArtefacto >= 1230){
    document.write("<h3> ¡Se alcanzo la meta de puntos para liberar a Will! ")
    }
    for(p=0; p < porcentaje.length; p++){
    porcentaje[p] = puntosArtefactosPorAmigo[p]* 100 / totalPuntosArtefacto;
    porcentaje[p] = Math.round(porcentaje[p])  
   document.write( "<h3> * El porcentaje de " +amigos[p]+ " respecto al total es: "+ porcentaje[p]+"%" ,)

   if(puntosArtefactosPorAmigo[p] < 250){
       var resultadop = "  ---> no cumplio con la meta de los puntos por persona"
       document.write(resultadop)
       }else if (puntosArtefactosPorAmigo[p]>= 250){
   var resultadon = "  --->  si cumplio con la meta de los puntos por persona"
       document.write(resultadon)
       }

}
    