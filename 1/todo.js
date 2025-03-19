let input = document.querySelector('input');
let ul = document.createElement('ul');
let div = document.querySelector('div');
div.append(ul);
let button = document.querySelector('button');
button.addEventListener("click", function (){
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    let delbtn = document.createElement("button");
    delbtn.classList.add('delbtn')
    delbtn.innerText = "DEL"
    ul.appendChild(delbtn);
})
ul.addEventListener("click",function(event){
    if(event.target.nodeName=='BUTTON'){
        let li = event.target.parentElement;
        li.remove();
    }
});
