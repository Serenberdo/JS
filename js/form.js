var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
  event.preventDefault();

  var form = document.querySelector("#form-adicionar");

  var paciente = obtemPacienteDoForm(form);

  var erros = validaPaciente(paciente);
  if (erros.length > 0) {
    exibeMensagemDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function obtemPacienteDoForm (form){

  var paciente = {

    nome:form.nome.value,
    altura:form.altura.value,
    peso: form.peso.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value)

  }
  return paciente;
}

function montaTr(paciente){

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd (paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd (paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd (paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd (paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd (paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd (dado, classe){
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

function validaPaciente (paciente){

  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O Nome não pode ficar em branco.");
  }

  if (paciente.gordura.length == 0) {
    erros.push("Taxa de Gordura não pode ficar em branco.");
  }

  if (paciente.peso.length == 0) {
    erros.push("O Peso não pode ficar em branco.");
  }

  if (paciente.altura.length == 0) {
    erros.push("A Altura não pode ficar em branco.");
  }

  if (!validaPeso(paciente.peso))
    erros.push("Peso Inválido.");

  if (!validaAltura(paciente.altura))
    erros.push("Altura Inválida.");

  return erros;
}

function exibeMensagemDeErro(erros){

var ul = document.querySelector("#mensagens-erro");
ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
