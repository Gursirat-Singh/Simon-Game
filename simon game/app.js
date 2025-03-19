let body = document.querySelector("body");
let h3 = document.querySelector("h3");
let gseq=[];
let useq=[];
let rank=0;
let hlist=[];
let btns = ["green","red","orange","blue"]; 
let start = false;
let level = 0;
body.addEventListener('keypress',function (){
    if(start === false){
        start = true;
        levelup();
    }
});
let p = document.querySelector('p');
function levelup(){
    useq=[];
    level++;
    p.innerText = `level ${level}`;
    let randindex = Math.floor(Math.random()*3);
    let randcolor = btns[randindex];
    let randbtn = document.querySelector(`.${randcolor}`);
    flash(randbtn);
    gseq.push(randcolor);
    console.log(gseq);
    rank++;
}
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },300);
}
function uflash(btn){
    btn.classList.add("uflash");
    setTimeout(function () {
        btn.classList.remove("uflash");
    },300);
}
let allbtns = document.querySelectorAll('.btn');
for(let btn of allbtns){
    btn.addEventListener('click',btnpress);
}
function btnpress(){
    let btn = this;
    uflash(btn);
    ucol = btn.getAttribute("id");
    useq.push(ucol);
    checkans(useq.length-1);
}

function checkans(idx){
    if(useq[idx]===gseq[idx]){
        if(useq.length == gseq.length){
            setTimeout(levelup(),1000);
        }
    }
    else{
        hlist.push(rank);
        let k = 0;
        for(let rank of hlist){
            if(rank>k){
                k=rank;
            }
        }
        p.innerHTML=`Game over! Your Score is <b>${level}</b><br><br> Highest Score = ${k}`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='#F4ACB7';
        },150);
        reset();
        
    }
}

function reset(){
    start = false;
    gseq=[];
    useq=[];
    level=0;
    rank=0;
}