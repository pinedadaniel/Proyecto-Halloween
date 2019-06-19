

var totalMike =0;
var totalLucas =0;
var porcentajeMike;
var porcentajeMike;
var nombres = ['Mike','Lucas'];


var artefactosMike = [3]; 
var artefactosLucas = [3]; 

for(i=0; i < nombres.length; i++){

    if(prompt("Ingrese el nombre del miembro de AV Clup (Mike, Lucas) ") == nombres[0]){
    nombres
    
    artefactosMike[0]= prompt("Ingrese la puntuacion de Poder del primer artefacto (Entre 1-100)")
   
    artefactosMike[1]= prompt("Ingrese la puntuacion de Poder del segundo artefacto (Entre 1-100")
    
    artefactosMike[2]= prompt("Ingrese la puntuacion de Poder del tercer artefacto (Entre 1-100)")
   
    totalMike += artefactosMike[i];

    
    
}else if (prompt("Ingrese el nombre del miembro de AV Clup (Mike, Lucas) ") == nombres[1]){
    nombres
    artefactosLucas[0]= prompt("Ingrese la puntuacion de Poder del primer artefacto (Entre 1-100)")

    artefactosLucas[1]= prompt("Ingrese la puntuacion de Poder del segundo artefacto (Entre 1-100")

    artefactosLucas[2]= prompt("Ingrese la puntuacion de Poder del tercer artefacto (Entre 1-100)")

}
}

porcentajeMike =( totalMike* 100)/1230;
porcentajeLucas =( totalLucas* 100)/1230;
//totalMike = artefactosMike[0] + artefactosMike[1] + artefactosMike[2];

document.write(nombres[0] ,": ---> Puntuacion Total  ", + totalMike,"/ 250", " --->  El Porcentaje es de:  " + porcentajeMike + "% / 100%", 
                            " <br/> Puntuacion del primer artefacto:  " + artefactosMike[0] ,
                            " <br/> Puntuacion del segundo artefacto: " + artefactosMike[1],
                            " <br/> Puntuacion del tercer artefacto: " + artefactosMike[2], " <br/> "
                            
                            )

document.write("<br/>",nombres[1]  , ": ---> Puntuacion Total  ", + totalLucas,"/ 250"," ---> El Porcentaje es de:", + porcentajeLucas + "% / 100%",
  " <br/> Puntuacion del primer artefacto:  " + artefactosLucas[0] ,
                                     "  <br/> Puntuacion del segundo artefacto: " + artefactosLucas[1],
                                     "  <br/>  Puntuacion del tercer artefacto: " + artefactosLucas[2])





















// Captura datos de entrada 

//nombres = prompt("Ingrese su nombre")

console.log(nombres)






 



