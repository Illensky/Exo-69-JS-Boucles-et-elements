let list = document.getElementById('liste-commissions');
let input = document.getElementById('textInput');
let valid = document.getElementById('validation');
let supprimer = document.getElementById('delete');


valid.addEventListener('click', function (){
    let nouvelElement = document.createElement("li");
    nouvelElement.innerText = input.value;
    input.value = '';
    list.appendChild(nouvelElement);
});

supprimer.addEventListener("click", function (oldChild){
    list.lastChild.remove();
});