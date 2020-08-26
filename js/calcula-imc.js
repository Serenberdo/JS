var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
//----------------------------------------------------
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso (peso);
  var alturaEhValida = validaAltura (altura);


  if (!pesoEhValido){
    tdPeso.textContent = "Peso Inválido!";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
  }


  if (!alturaEhValida) {
    tdAltura.textContent = "Altura Inválida!";
    alturaEhValida = false;
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    var novoimc = calculaImc(peso, altura);
    tdImc.textContent = novoimc;
  }  else {tdImc.textContent = "Peso ou Altura Inválidos.";}
}

function validaPeso (peso){

  if(peso > 5 && peso < 350)
    return true;
  else
    return false;

}

function validaAltura (altura){

  if(altura > 0.2 && altura < 3)
    return true;
  else
    return false;

}

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura*altura);
  return imc.toFixed(0);

}
