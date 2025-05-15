



    document.getElementById("subtitulo").innerHTML = "Esse é meu segundo programa JavaScript";    
  
  /*document.getElementById("resposta").innerHTML =
   window.confirm("Você está gostando do curso?");*/

document.getElementById("resposta").innerHTML = "A idade digitada foi:" + 
window.prompt("qual sua idade?");

    function AbrePagina()
    {
       window.open("aulaJS2.html", "_blank");
    }

    
    function enviardados()
{
    document.getElementById("inputusuario").innerHTML= "Nome enviado foi:" + window.prompt("Digite seu nome:");
}
    
     function exibenome()
    {
        window.alert("Nome digitado foi:" + document.getelementById("nome").value);
    }