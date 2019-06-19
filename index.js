var totalPuntos = 1230;
var amigos =['Mike','Lucas','Dustin','Eleven','Max'];
var artefactos = 3;
var puntosArtefactosPorAmigo = [0,0,0,0,0];
var porcentaje = [0,0,0,0,0];
var totalPuntosArtefacto =0;

for (var i=0; i<amigos.length; i++){
    for (var j=0; j <artefactos; j++){
        do{
    var artefacto = prompt("Ingrese los puntos del primer artefacto"+(j+1)+" Recolectado por "+amigos[i]);
    artefacto = parseInt(artefacto)
        }while(artefacto<1 || artefacto > 100)
 

 puntosArtefactosPorAmigo[i] += artefacto;


//alert("el total de punos va en " + puntosArtefactosPorAmigo[i]);
    }

totalPuntosArtefacto+= puntosArtefactosPorAmigo[i];

}

for (var k =0; k < puntosArtefactosPorAmigo.length; k++){
    document.write("<h3> Los puntos que recogio "+ amigos[k]+" Fueron en total "+ puntosArtefactosPorAmigo[k]);
   
}

for(p=0; p < porcentaje.length; p++){
    porcentaje[p] = puntosArtefactosPorAmigo[p]* 100 / totalPuntosArtefacto;
  
    
    document.write("<h4> El Porcentaje de " +amigos[p]+ " respecto al total es: "+ porcentaje[p]+"%")
}



