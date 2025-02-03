// Lógica Certinha
function calcularPace() {
  var distanciaPercorrida = document.getElementById("distancia"); // pedir info para user
  var TimeHours = document.getElementById("Hours");
  var TimeMinutes = document.getElementById("Minutes");
  var TimeSeconds = document.getElementById("Seconds");
  //
  var distanciaPercorrida = Number(distanciaPercorrida.value);
  var TimeHours = Number(Hours.value);
  var TimeMinutes = Number(Minutes.value);
  var TimeSeconds = Number(Seconds.value);
  //
  //calculos
  var TimeMinutes = TimeHours * 60 + TimeMinutes + TimeSeconds / 60;
  var pacebruto = TimeMinutes / distanciaPercorrida;
  // calcular decimal dos segundos
  var calcularDecimal = (pacebruto - Math.trunc(pacebruto)) * 0.6;
  var paceReal = (Math.trunc(pacebruto) + calcularDecimal).toFixed(2);
  document.getElementById("resultado").innerText =
    "Seu ritmo é de : " + paceReal + "km/min";
}

//=======================================================================
