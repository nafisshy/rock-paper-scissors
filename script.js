let playerSelection;
let playerScore=0;
let computerScore=0;
const startButton = document.querySelector('#start-button');
startButton.addEventListener('click',()=>{
        const rock=document.createElement('button');
        rock.innerText = "ROCK";
        rock.setAttribute('id',"ROCK");
        rock.style.cssText= "background-color:yellow; margin:20px";
        document.body.append(rock);
        const paper=document.createElement('button');
        paper.innerText = "PAPER";
        paper.setAttribute('id',"PAPER");
        paper.style.cssText= "background-color:yellow; margin:20px";
        document.body.append(paper);
        const scissors=document.createElement('button');
        scissors.innerText = "SCISSORS";
        scissors.setAttribute('id',"SCISSORS");
        scissors.style.cssText= "background-color:yellow; margin:20px";
        document.body.append(scissors);
        document.body.removeChild(startButton);
        playerSelecting();
        createStopButton();
});

function createStopButton(){
    const stopButton = document.createElement('button');
    stopButton.innerText = "STOP";
    stopButton.style.cssText= "background-color:red; margin:20px";
    document.body.append(stopButton);
    stopButton.addEventListener('click',()=>{
        winner_display();
        playerScore=0;
        computerScore=0;
    });
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

function playerSelecting(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            playerSelection=button.id;
            game();
        });
    });
}

function game(){
    let message;
    message= playRound(playerSelection,computerPlay());
    score_display(message);
}

function computerPlay(){
    let r=Math.floor(Math.random()*3+1);
   
    switch(r){
        case 1: return `ROCK`;
        case 2: return `PAPER`;
        case 3: return `SCISSORS`;
        default: console.log("math.random isn't working");
    }
}

function score_display(message){
    scorePara=document.getElementById("para");
    scorePara.innerText=message+"\n\nYOUR SCORE:"+playerScore+" COMPUTER SCORE:"+computerScore;
}

function playRound(playerSelection,computerSelection){
    if(playerSelection==computerSelection)
    {
        return "It's a tie!";
    }
    else if(playerSelection=="ROCK"&&computerSelection=="SCISSORS")
    {
        playerScore++;
        return "YOU WIN!! ROCK BEATS SCISSORS";
    }
    else if(computerSelection=="PAPER"&&playerSelection=="ROCK")
    {
        computerScore++;
        return "YOU LOSE!! PAPER BEATS ROCK";
        
    }
    else if(playerSelection=="SCISSORS"&&computerSelection=="PAPER")
    {
        playerScore++;
        return "YOU WIN!! SCISSORS BEAT PAPER";
    }
    else if(computerSelection=="ROCK"&&playerSelection=="SCISSORS")
    {
        computerScore++;
        return "YOU LOSE!! ROCK BEATS SCISSORS";
    }
    else if(playerSelection=="PAPER"&&computerSelection=="ROCK")
    {
        playerScore++;
        return "YOU WIN!! PAPER BEATS ROCK";
    }
    else if(computerSelection=="SCISSORS"&&playerSelection=="PAPER")
    {
        computerScore++;
        return "YOU LOSE!! SCISSORS BEAT PAPER";
        
    }
    else 
    {
        return "THERE IS SOME ERROR";
    }
    
   

}