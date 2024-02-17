// function play(){
//     //hide the home screen
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }
function continueGame(){
    //generate a random alphabet
    const alphabet = getARandomAlphabet();
    //console.log(alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}