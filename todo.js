let name=prompt("Enter your Name:");
alert("Welecome"+" "+name);
let todo=[];
let req=prompt("Enter your request:");
while(true){
    if (req=='quit'){
        console.log("you quiet")
        break;
    }
     else if (req=='add'){
        task=prompt("Enter your task which you want to add:");  
        console.log("Task Added");
        todo.push(task)
        
    }
    else if(req=='list'){
         console.log("------------");
         for(let i=0; i<todo.length;i++){
            console.log(i,todo[i]);
         } 
       
         console.log("------------");     
    }
    else if(req=="delete"){
        let index=prompt("Enter the index no of task Which you want to delete:");
        todo.splice(index,1);
        console.log("Task deleted");
    }
    else{
        alert(" Invalid request,Try again!")
    }
     req=prompt("Enter your request:");

}
    

