const textarea = document.getElementById("mensagemInput")
const enviarButton = document.getElementById("buttonInput")

function EnviarAction(){
   const result = document.getElementById("comment-result")

   var texto = `<div class="perfil">
   <div class="foto">
       <img src="../perfil/perfilsemfoto.jfif" alt="">
       <h3>Nome do Usuario</h3>
   </div>
   <div class="mensagem">
       <p>${textarea.value}</p>
   </div>
   <div class="avaliacao">
       <ul>
           <li>😍</li>
           <li>😥</li>
       </ul>
   </div>
</div>`
    const ofensas = ["macaco", "negro", "criolo"]
    for(let i=0;i<ofensas.length;i++){
        if(String(textarea.value).search(ofensas[i])===0){
            alert("Esse tipo de palavra viola nossa conduta ética e moral.")
        }
    }
    $("main#comment-result").append(texto)
}

enviarButton.addEventListener("click", (event)=>{
    EnviarAction()
    textarea.value = ''
    textarea.focus()
})
textarea.addEventListener("keyup", (event)=>{
    if(event.key === "Enter"){
        EnviarAction()
        textarea.value = ''
    }
})