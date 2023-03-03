function convertir(segundos) {

  var dias = Math.floor(segundos / 86400);
  var horas = Math.floor((segundos % 86400) / 3600);
  var minutos = Math.floor(((segundos % 86400) % 3600) / 60);
  var segundos = ((segundos % 86400) % 3600) % 60;
 
  var dias = (dias < 10)? '0' + dias : dias;
  var horas = (horas < 10)? '0' + horas : horas;
  var minutos = (minutos < 10)? '0' + minutos : minutos;
  var segundos = (segundos < 10)? '0' + segundos : segundos;
  
  mensaje = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";
  return mensaje;
}


function reqListener () {

  datos = JSON.parse(this.responseText);
  //alert(datos.unixtime);
  //alert(typeof(datos.unixtime))
  //Número

  var ahora = new Date(datos.unixtime);
  //unixtime
  //1701302400
  //GMT: Thursday, 30 November 2023 0:00:
  var final = 1701302400;
  var segundos = final - ahora;

  var cronos = setInterval(function(){
      document.getElementById("unixtime").innerHTML = segundos;
      mensaje = convertir(segundos);
      document.getElementById("time").innerHTML = mensaje;
      segundos = segundos - 1;           
  }, 1000);


}



var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://worldtimeapi.org/api/timezone/America/Toronto");
oReq.send();
