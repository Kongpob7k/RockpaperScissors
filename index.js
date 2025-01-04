const Choice=["rock","paper","scissors"];

let HumanScore=0,ComputerScore=0;

function getComputerChoice(){
    return Choice[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    while(true){
        let Human=prompt("What is your Choice"); 
        Human.toLowerCase();
        if(Human!="rock"&&Human!="paper"&&Human!="scissors"){
            alert("You Entered wrong choice please try again");
            continue;
        }
        return Human;
    }
}

function PlayRound(HumanChoice,ComputerChoice){
    while((HumanScore!=5) || (ComputerScore!=5)){
        HumanChoice=getHumanChoice();
        ComputerChoice=getComputerChoice();
        if(HumanChoice===ComputerChoice)continue;
        else if(HumanChoice==="rock"){
            if(ComputerChoice==="paper")ComputerScore++;
            else if(ComputerChoice==="scissors")HumanScore++;
        }
        else if(HumanChoice==="paper"){
            if(ComputerChoice==="rock")HumanScore++;
            else if(ComputerChoice==="scissors")ComputerScore++;
        }
        else if(HumanChoice==="scissors"){
            if(ComputerChoice==="rock")ComputerScore++;
            else if(ComputerChoice==="paper")HumanScore++;
        }
        console.log(HumanChoice+" "+ComputerChoice+"\n");
    }
    if(HumanScore===5)console.log("HUMAN WIN");
    else console.log("COMPUTER WIN");
}

PlayRound(getHumanChoice(),getComputerChoice())

console.log(getHumanChoice());