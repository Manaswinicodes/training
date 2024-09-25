//Modify Existing Elements
//Task: Write a JavaScript function that changes the background color of all <p> elements on the page to blue when a button is clicked.
//Hint: Use getElementsByTagName() or querySelectorAll() and a loop to modify the style property of the elements.

function background(){
    let p =document.getElementsByName('p');
    for(let i=0; i<p.length; i++){
        p[i].style.backgroundColor = 'blue';
    }
}
let button = document.getElementById('click')

button.addEventListener('click', background);
