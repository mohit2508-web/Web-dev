let btn=document.querySelector('button');
let inp=document.querySelector('input');
let ul=document.querySelector('ul');
btn.addEventListener('click',function(){
    let list=document.createElement('li');
    list.innerText=inp.value;

    let delbtn=document.createElement('button');
    delbtn.innerText='delete';
    delbtn.classList.add('delete');

    list.appendChild(delbtn)
    ul.appendChild(list);
    inp.value="";

});

let delbtns=document.querySelectorAll('.delete');
delbtns.innerText='love you';
console.log(delbtns)
for(delbtn of delbtns){
    delbtn.addEventListener("click",function(){
        console.log('deleted');
        let para=this.parentElement;
        console.log(para)
    });
}