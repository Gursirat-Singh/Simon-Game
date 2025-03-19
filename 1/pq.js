let body = document.querySelector('body');

let input = document.createElement("input");
body.appendChild(input);
let button = document.createElement("button");
body.appendChild(button);
button.innerText= "Click Me"

input.placeholder="username";
button.id = "btn";

let btn = document.querySelector('button');
let btn1= document.getElementById('btn');

btn.classList.add('btncss');

let h1 = document.createElement('h1');
body.appendChild(h1);
h1.innerText = "DOM Practice"
h1.classList.add('h1css');

let p = document.createElement('p');
body.appendChild(p);
p.innerHTML = "Apna College <b>Delta</b> Practice";