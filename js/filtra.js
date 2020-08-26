var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  var pacientes = document.querySelectorAll(".paciente");

  if(this.value.length > 0){
    for (var i = 0; i < pacientes.length; i++) {

      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value, "i");

      if (!expressao.test(nome)){
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }

    }
  } else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");

    }
  }

});

// obs: há um modo de fazer essa comparação sem a necessidade de utilizar expressões regulares!
// Podemos utilizar a função substring, que recebe dois parâmetros, fazendo com que ela devolva parte da string, com o tamanho definido nos parâmetros.
// var comparavel = nome.substr(0, this.value.length);
// if (!(this.value == comparavel)) {
//     paciente.classList.add("invisivel");
// } else{
//     paciente.classList.remove("invisivel");
// }
// Mas e a distinção entre letras maiúsculas e minúsculas?
// Nesse caso não temos distinção entre letras maiúsculas e minúsculas, mas para contornar isso, antes de compará-las, podemos colocar as duas strings em letras minúsculas, para efetuar a comparação entre elas em seguida:
// var comparavel = nome.substr(0, this.value.length);
// var comparavelMinusculo = comparavel.toLowerCase();
// var valorDigitadoMinusculo = this.value.toLowerCase();
//
// if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
//     paciente.classList.add("invisivel");
// } else{
//     paciente.classList.remove("invisivel");
// }
