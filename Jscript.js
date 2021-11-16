const dataval = document.getElementById('Datorns-Val');
const spelval = document.getElementById('Spelarens-Val');
const resultatspel = document.getElementById('Resultat');
const knappar = document.querySelectorAll('button');
console.log(knappar);
const val = [knappar[1], knappar[2], knappar[3]];
const score = document.getElementById('score');

const btn = knappar[0];
const reset = document.getElementById('reset');


let scoreboard ={
    spelare:0,
    datorn:0
}



let spelarensval;
let datornsval;
let resultatet;
let namn;


// min knapp efter man skrivit in namnet
btn.addEventListener('click', function(){
    const input = document.querySelector('input');

    namn = input.value;
    input.value = '';
    console.log(namn);
});


val.forEach(val => val.addEventListener('click', (event) => {
    spelarensval = event.target.id;
    spelval.innerHTML = spelarensval;
    genereraDatornsVal()
    getResultat()

}
))

function genereraDatornsVal() {
    const RandomNR = Math.floor(Math.random() * 3) + 1;
    console.log(RandomNR);

    if (RandomNR === 1) {
        datornsval = 'Sten'
    }
    if (RandomNR === 2) {
        datornsval = 'Sax'
    }
    if (RandomNR === 3) {
        datornsval = 'Påse'
    }
    dataval.innerHTML = datornsval;
}


function getResultat() {
    if (datornsval === spelarensval) {
        resultatet = 'Oavgjort!'
    }
    if (datornsval === 'Sten' && spelarensval === "Påse") {
        resultatet = 'Vinst!'
        scoreboard.spelare++;
    }
    if (datornsval === 'Sten' && spelarensval === "Sax") {
        resultatet = 'Förlust!'
        scoreboard.datorn++;
    }
    if (datornsval === 'Påse' && spelarensval === "Sax") {
        resultatet = 'Vinst!'
        scoreboard.spelare++;
    }
    if (datornsval === 'Påse' && spelarensval === "Sten") {
        resultatet = 'Förlust!'
        scoreboard.datorn++;
    }
    if (datornsval === 'Sax' && spelarensval === "Påse") {
        resultatet = 'Förlust!'
        scoreboard.datorn++;
    }if (datornsval === 'Sax' && spelarensval === "Sten") {
        resultatet = 'Vinst!'
        scoreboard.spelare++;
    }
    resultatspel.innerHTML = resultatet;
    score.innerHTML = `Spelaren: ${scoreboard.spelare} || Datorn: ${scoreboard.datorn}`;

    if(scoreboard.datorn === 3){

        alert(namn + "  Du Förlorade!")
        resetGame();
    }
    if(scoreboard.spelare === 3){
        alert(namn + "  Grattis du vann! ")

        resetGame();
    }
    

}

function resetGame(){
    console.log('reset');
    dataval.innerText = '';
    resultatspel.innerText = '';


    scoreboard.spelare = 0;
    scoreboard.datorn = 0;
    score.innerHTML = `Spelaren: ${scoreboard.spelare} || Datorn: ${scoreboard.datorn}`;
}




