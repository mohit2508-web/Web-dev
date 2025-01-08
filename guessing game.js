let range=prompt("Enter the range of random numbers:");
console.log("Range:",range);
let random_no=Math.floor(Math.random()*range)+1;
let guess_no=prompt("Please Guess the no:");
while(true){
    if(guess_no==random_no){
        console.log("You Guess correctly");
        break;
    }
    else if(guess_no=="quit"){
        console.log("You quit the game");
        break;
    }
    else {
        if (guess_no>random_no){
            alert("Invalid guess no (Hint:Guess no is too high)");

        }
        else{
            alert("Invalid guess no (Hint:Guess no is too low)");
        }
        

    }
    guess_no=prompt("Please Guess the no:");
}