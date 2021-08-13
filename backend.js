
let playerScore=0;
let computerScore=0;
function computerPlay(){
    let r=Math.floor(Math.random()*3+1);
   
    switch(r){
        case 1: return `ROCK`;
        case 2: return `PAPER`;
        case 3: return `SCISSORS`;
        default: console.log("math.random isn't working");
    }
}


function playRound(playerSelection,computerSelection){
    playerSelection= playerSelection.trim();
    playerSelection= playerSelection.toUpperCase();
    if(playerSelection==computerSelection)
    {
        return "It's a tie!";
    }
    else if(playerSelection=="ROCK"&&computerSelection=="SCISSORS")
    {
        playerScore++;
        return "YOU WIN!! ROCK BEATS SCISSORS";
    }
    else if(playerSelection=="SCISSORS"&&computerSelection=="PAPER")
    {
        playerScore++;
        return "YOU WIN!! SCISSORS BEAT PAPER";
    }
    else if(playerSelection=="PAPER"&&computerSelection=="ROCK")
    {
        playerScore++;
        return "YOU WIN!! PAPER BEATS ROCK",playerScore,computerScore;
    }
    else if(computerSelection=="ROCK"&&playerSelection=="SCISSORS")
    {
        computerScore++;
        return "YOU LOSE!! ROCK BEATS SCISSORS";
    }
    else if(computerSelection=="SCISSORS"&&playerSelection=="PAPER")
    {
        computerScore++;
        return "YOU LOSE!! SCISSORS BEAT PAPER";
        
    }
    else if(computerSelection=="PAPER"&&playerSelection=="ROCK")
    {
        computerScore++;
        return "YOU LOSE!! PAPER BEATS ROCK";
        
    }
    console.log(playerScore+" "+computerScore);

}

function game(){
    let playerSelection;
    let message;
    let i;
    
    for(i=0;i<=5;i++){
        playerSelection=prompt("ROCK,PAPER OR SCISSORS?","");
        if (playerSelection==null){
            alert("Please enter rock, paper or scissors in the dialog box");
            i--;
            continue;
        }
        message= playRound(playerSelection,computerPlay());
        console.log("I AM MAIN"+playerScore+" "+computerScore);
        score_display(message);
    }
    winner_display();
}

function score_display(message){
    scorePara=document.getElementById("para");
    scorePara.innerHTML=message+"\n\nYOUR SCORE:"+playerScore+" COMPUTER SCORE:"+computerScore;
}

function winner_display(){
    if(playerScore>computerScore){
        alert("YOU WIN!! YOU BEAT THE COMPUTER");
    }
    else if(computerScore>playerScore){
        alert("YOU LOSE....:( BETTER LUCK NEXT TIME");
    }
    else{
        alert("IT IS A TIE!");
    }

}


    
