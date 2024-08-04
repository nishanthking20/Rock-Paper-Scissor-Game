let userscore = 0;
let compscore = 0;

const msg = document.querySelector("#res");
const userPoints = document.querySelector("#your-score");
const compPoints = document.querySelector("#comp-score");


console.log(msg);

const displayWinner = (userScore,userSelect,compChoice) =>{
    if(userScore){
        userscore++;
        console.log("user win");
        userPoints.innerText = userscore;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        msg.innerText = "User win!! "+userSelect+" beats "+compChoice;

    }
    else {   
        compscore++;
        console.log("comp win");
        compPoints.innerText = compscore;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        msg.innerText = "Comp win!! "+compChoice+" beats "+userSelect;;
    }
}

const draw = () =>{
    console.log("draw")
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
    msg.innerText = "Draw!!";

}


const randomGen = (user_img) =>{
    const options = ['rock','paper','scissor'];
    const randomIndex = Math.floor(Math.random()*3);
    document.getElementById("user").src=user_img;
    document.getElementById("computer").src=options[randomIndex]+'.png';
    return options[randomIndex];
}

const playgame = (userSelect) => {
    //user selected choice
    const temp=userSelect+'.png';
    console.log(temp);
    const compChoice = randomGen(temp);
    console.log(compChoice);
    if(userSelect === compChoice){
        //draw 
        draw();
    }
    else{
        let userScore = true;
        if(userSelect =="rock"){
            // scissor, paper => computer
            userScore = compChoice === "scissor"?true:false;
        }
        else if(userSelect=="paper"){
            // stone, scissor
            userScore = compChoice ==="rock"?true:false;
        }
        else{
            // stone , paper
            userScore = compChoice === "paper" ? true:false;
        }
        displayWinner(userScore,userSelect,compChoice);
    }

};

function clicked(user)
{
    
        const userSelect = user;
        playgame(userSelect);
}