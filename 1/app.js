let h2 = document.querySelector('h2');
let input = document.querySelector('input');
input.addEventListener('keypress',function (){
    let newtext = this.value.replace(/[^a-zA-Z\s]/g,'');
    h2.innerText = newtext;
})
