let form=document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    let username=this.elements[0];
    let password=this.elements[1];
    console.log(username.value);
    console.log(password.value);
})