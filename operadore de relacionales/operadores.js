   
   
let diaHoy = 17;
let diaAyer = 16;
let mesHoy = 10;
let mesAyer = 10;
let mesTexto = "10";
let comparacion;

	//mayor que
	comparacion = diaHoy > diaAyer;
	document.write("Resultado1: " + comparacion + "<br>");  

	//menor que
	comparacion = diaHoy < diaAyer;
	document.write("Resultado2: " + comparacion + "<br>");  

	//mayor o igual
	comparacion = mesHoy >= mesAyer;
	document.write("Resultado3: " + comparacion + "<br>");  

	//menor o igual
	comparacion = mesHoy <= mesAyer;
	document.write("Resultado4: " + comparacion + "<br>"); 

	//iguales
	comparacion = mesHoy == mesAyer;
	document.write("Resultado5: " + comparacion + "<br>"); 

	//idénticos
	comparacion = mesHoy == mesTexto;
	console.log(comparacion)  
	comparacion = mesHoy === mesTexto;
	document.write("Resultado6: " + comparacion + "<br>");  

	
	comparacion = (diaHoy > diaAyer) && (mesHoy == mesAyer);
	document.write("Resultado7: " + comparacion + "<br>");  

	
	comparacion = (diaHoy > diaAyer) || (diaHoy == diaAyer);
	document.write("Resultado8: " + comparacion + "<br>");  
