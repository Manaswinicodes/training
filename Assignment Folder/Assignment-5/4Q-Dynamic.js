//Dynamic List Creation
//Task: Write a JavaScript function that allows the user to add items to an unordered list (<ul>). The user should type the item in a text input and click an "Add" button. The item should be added to the list dynamically.
//Hint: Use createElement(), appendChild(), and addEventListener().


const input = document.getElementById('itemInput');
const button = document.getElementById('addButton');
const list = document.getElementById('itemList');

button.addEventListener('click',function(){
    const text = itemInput.value.trim();
    if(text!== ''){
        const Listitem =document.createElement('li');
        Listitem.textContent = text;
      itemList.appendChild(Listitem);
      itemInput.value = '';
    }
})




