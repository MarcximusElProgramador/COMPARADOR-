
let winStreak

num1=Math.round(Math.random()*100);
num2=Math.round(Math.random()*100);

if (num1 === num2){
    randomizer();
}

var textDelIndex=document.getElementById('pregunta');

function randomizer(){
    num1=Math.round(Math.random()*100);
    num2=Math.round(Math.random()*100);

    if (num1 === num2){
        randomizer();
    } else {
        console.log(winStreak);
        return;
    } 
}

function changeStatus() {
    if (winStreak === undefined){
        winStreak = 0;
        document.getElementById('gamePage').style.display = 'block';
        document.getElementById('homePage').style.display = 'none';
        var textDelIndex=document.getElementById('pregunta');
        textDelIndex.innerHTML= `Is ${num1} higher than ${num2}?`;

    } if (winStreak ===5){
        document.getElementById('gamePage').style.display = 'none';
        document.getElementById('homePage').style.display = 'none';
        document.getElementById('winningPage').style.display = 'block';
        return; 
    }
}

function checkAnswer(z){

    if ((num1 > num2 && z) || (num1 < num2 && !z)){
        winStreak++
        changeStatus();
        randomizer();
        textDelIndex.innerHTML= `Is ${num1} higher than ${num2}?`;
        return;

    } else {
        winStreak = 0;
        randomizer();
        textDelIndex.innerHTML= `You missed folk <br>Is ${num1} higher than ${num2}?`;
    }
}