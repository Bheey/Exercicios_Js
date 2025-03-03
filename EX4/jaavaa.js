let contador = 0
let input = document.getElementById('tarefas')
let BtnAdd = document.getElementById('btn_add')
let main = document.getElementById('areaLista')

function adici(){
    let valorInput = input.value
    if((valorInput!=="") && (valorInput!==null)&& (valorInput!==undefined)){

        ++contador
        let novoItem = `<div id="${contador}" class="item">
            <div ondlick="marcar(${contador})" class="item-icon" id="icone_${contador}" >&#x1F7E2;</div>
            <div ondlick="marcar(${contador})" class="item-nome">${valorInput}</div>
            <div class="item-botao"><button onclick="deletar(${contador})" class="delete">🗑️ Deletar</button></div>
        </div>`

        main.innerHTML += novoItem
        input.value = ""
        input.focus()
    }
}
function deletar(id){
    var suma = document.getElementById(id)
    suma.remove()
}
function marcar(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')
}
input.addEventListener("keyup", function(event){
     if(event.keyCode === 13){
        event.preventDefault()
        BtnAdd.click()
     }
})