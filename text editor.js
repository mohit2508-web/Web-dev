let text=document.querySelector("#text");
let para=document.querySelector('p');
text.addEventListener('input',function(){
    para.innerHTML=text.value;
})