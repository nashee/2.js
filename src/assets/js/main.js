let list = document.querySelector('.list');
let item = document.querySelector('.item');
let button = document.querySelector('.btn');
let input = document.querySelector('.input');

button.addEventListener('click', addList );
function addList(){
    let itemLi= document.createElement('li');
    let userText = document.createTextNode(input.value);
    itemLi.appendChild(userText);
    list.appendChild(itemLi);
    input.value = "";
    
}

    
