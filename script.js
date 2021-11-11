// player 1 var
let button1 = document.getElementById('buttonPlayer1');
let numberPlayer1 = document.getElementById('numberPlayer1');
let integerPlayer1 = 0;

// player 2 var
let button2 = document.getElementById('buttonPlayer2');
let numberPlayer2 = document.getElementById('numberPlayer2');
let integerPlayer2 = 0;

// timer var
let timer = document.getElementById('timer');
let timercount = 10;

//boolean 
let gameStatus = false;

document.addEventListener('keydown',(event)=>{
    if (gameStatus == true)
    switch(event.key){
        case 'm':
            integerPlayer2 += 1;
            numberPlayer2.innerHTML = integerPlayer2;
            console.log('dit is m');

        break;

        case 'e':
            integerPlayer1 += 1;
            numberPlayer1.innerHTML = integerPlayer1;
            console.log('dit is een e');
        break;

        default: 
            console.log('dit is niet in de switch oelleh'); 
    }
})
function timerTijd(){
    timercount -= 1;
    timer.innerHTML = timercount;
    if(timercount == -1) {
        alert("Player 1 heeft: " + integerPlayer1 + " punten" + ', ' + "Player 2 heeft: " + integerPlayer2 + " punten");
        location.reload();
    }
   
}
function start(){
  setInterval(timerTijd, 500)  
  gameStatus = true;
}




