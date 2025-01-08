let gameseq=[];
let userseq=[];
let maxScore=0;
let btns=['yellow','red','purple','green'];
alert(" Mohit Jadon welcome you to this Game!!")
let started=false;
let level=0;
let backgroundMusic = document.getElementById('background-music');
backgroundMusic.play();

document.addEventListener("mousedown",function(){
    if(started==false){
        console.log('game started');
        started=true;
        levelup()
    }
});
function gameflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250)
    }
function userflash(btn){
        btn.classList.add('userflash');
        setTimeout(function(){
            btn.classList.remove('userflash');
        },250)
        }

let h2=document.querySelector('h2');
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`
    let randInx=Math.floor(Math.random()*4);
    let randColor=btns[randInx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    gameflash(randBtn);
    console.log(gameseq)
};
function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000)
        }
    }else{
        if(level>maxScore){
            maxScore=level
        }
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br><b>Highest Score=>${maxScore} <br> Note:-Touch anywhere on the screen to ReStart Game`
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },150) 
        gameReset()
    }
}
function btnPress(){
   let btn=this;
   userflash(btn);
   usercolor=btn.getAttribute('id');
   userseq.push(usercolor);
   checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click',btnPress)
}
function gameReset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}