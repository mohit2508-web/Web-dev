let inp=document.querySelector('input');
input.addEventListener('keydown',function(event){
   if(event.code=='ArrowUp'){
    console.log("move the character forward");
   }else if(event.code=='ArrowDown'){
    console.log("move the character backward");
   }else if(event.code=='ArrowLeft'){
    console.log("move the character left");
   }else if(event.code=='ArrowRight'){
    console.log("move the character right");
   }

});
// inp.addEventListener('keyup',function(){
//     console.log("key pressed");
    
// })
