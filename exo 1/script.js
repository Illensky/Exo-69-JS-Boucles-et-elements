let list = document.getElementById('liste-commissions');
let input = document.getElementById('textInput')
let valid = document.getElementById('validation')


valid.addEventListener('click', function (){
    let nouvelElement = document.createElement("li");
    nouvelElement.innerText = input.value
    list.appendChild(nouvelElement)
})
