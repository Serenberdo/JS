//Seleciona classe pacientes
var pacientes = document.querySelectorAll(".paciente");

//seleciona a tabela
var tabela = document.querySelector("table");

//Remove tabela por double click
tabela.addEventListener("dblclick", function(event){
  //remove parentNode "td" do alvo do double clique
  if (event.target.tagName == "TD") {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
            event.target.parentNode.remove();
    }, 500);
  }
});
