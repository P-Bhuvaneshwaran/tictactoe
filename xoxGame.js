let combination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

                    
let calculateWins = ["","","","","","","","",""];

let who = document.querySelector("#who");

let player = document.querySelector("#whichPlayer");

let rBtn = document.querySelector("#resetBtn");


let currentPlayer = 'X'

player.textContent = currentPlayer;

let b1 = document.querySelectorAll(".box");


//click Function
b1.forEach(element=>element.addEventListener("click",clickedFunc));

function clickedFunc(event){
    rBtn.style.display = "block"
    let indexId = event.target.id;
    if(calculateWins[indexId]==""){
        calculateWins[indexId]= currentPlayer;
        event.target.textContent = currentPlayer;

        
        currentPlayer = currentPlayer == "X" ? "O" : "X"; 
        if(currentPlayer == "X"){
            event.target.style.color = "grey";
        }
        else{
            event.target.style.color = "lightsalmon";

        }
        player.textContent = currentPlayer;
    }
    else{
        alert("All ready filled")
    }
        // console.log(index,calculateWins[index]);
        

        checkResult();
}


let winning = 0;
let isWin;


function checkResult(){
    console.log("------------");
    
    for (let j = 0; j < combination.length; j++) {
    // console.log(combination[j]);
        const [a,b,c] = combination[j];
        // if(calculateWins[a]!="")
            // console.log("a: "+calculateWins[a], "b: "+calculateWins[b], "c: "+calculateWins[c] +"j: "+j);
            // console.log("a: "+a, "b: "+b, "c: "+c +"j: "+j);
            if(calculateWins[a]&&calculateWins[a]===calculateWins[b]&&calculateWins[a]==calculateWins[c]){
                console.log("yes---");
                who.textContent=calculateWins[a] +"'' wins";
                isWin=true;
                colorFunc(a,b,c);
                break;
            }
            
        }

        if(winning  === combination.length && !isWin){
            who.textContent = "Try again";
            player.textContent = "";
        }
        winning++;
        // console.log(" ");
}

function colorFunc(x,y,z){
    console.log("1"+ x,y,z);
        b1[x].classList.add("color");
        b1[y].classList.add("color");
        b1[z].classList.add("color");
        currentPlayer="";
        player.textContent = "";
}


// reset button

rBtn.addEventListener("click",resetFunction);

function resetFunction(){
    rBtn.style.display="none";
    currentPlayer = "X";
    player.textContent = currentPlayer;
    calculateWins =["","","","","","","","",""]; 
    b1.forEach(element=>{
        // element.style.backgroundColor = "white";
        console.log(element.classList.remove("color"))
        element.textContent=""
    })
    winning = 0;
    who.textContent = "";
    isWin=false;

}









// let btn = document.querySelector("button");
// btn.addEventListener("click",()=>{
//     console.log("check");
    
//     calculateWins.forEach((element,index) => {
//         console.log(element+" "+index);
        
//     });
// })
