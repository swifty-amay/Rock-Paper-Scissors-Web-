function getComputerChoice(){
    let choice = Math.floor(Math.random()*10);
    console.log(choice);
    switch(choice){
        case 0:
            return "rock";
        case 2:
        case 4:
        case 6:
        case 8:
            return "paper";
        default:
            return "scissor"; 
    }
}
console.log(getComputerChoice());