const Choice=["rock","paper","scissors"];
const btn=document.querySelectorAll("button");

let HumanScore=0,ComputerScore=0;


function getComputerChoice(){
    return Choice[Math.floor(Math.random()*3)];
}

function PlayRound(HumanChoice,ComputerChoice){
    if(HumanChoice==="rock"){
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
}

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click", ()=> {
        const ComputerChoice=getComputerChoice();
        PlayRound(Choice[i],ComputerChoice)
        if(HumanScore===5)alert("PLAYER WIN!");
        else if(ComputerScore===5)alert("COMPUTER WIN!");
        const ComputerText=document.querySelector(".Text-Computer");
        const PlayerText=document.querySelector(".Text-Player");
        ComputerText.textContent = "Computer Score:"+ComputerScore+"\nComputer Choose"+ComputerChoice;
        ComputerText.style.whiteSpace = "pre-line";
        PlayerText.textContent = "Player Score:"+HumanScore+"\nPlayer Choose"+Choice[i];
        PlayerText.style.whiteSpace = "pre-line";
        console.log(HumanScore+" "+ComputerScore);
    });
}


