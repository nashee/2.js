"use strict";

var list = document.querySelector('.list');
var item = document.querySelector('.item');
var button = document.querySelector('.btn');
var input = document.querySelector('.input');
button.addEventListener('click', addList);

function addList() {
  var itemLi = document.createElement('li');
  var userText = document.createTextNode(input.value);
  itemLi.appendChild(userText);
  list.appendChild(itemLi);
  input.value = "";
}