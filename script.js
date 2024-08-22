let svar = ['JAAA', 'Prøv igjen en annen gang!', 'Nei', 'Udefinert', 'Hell yes!', 
            '8-Ball Says: NO', 'Det ser lyst ut', 'Dette ble kaldt', 'Unnskyld, jeg lag...ger',
            'Jeg er ikke sikker', 'Jeg er usikker', 'Jeg er sikker', 
            'Jeg er sikker på at jeg er usikker'];

let answer = '8';
let classFont = 'font'; 

function show() {
    let html = '';
    html +=`
    <div class="container">
        <h1>Magic 8 Ball</h1>
        <p>Ask a yes or no question and click the button to see the answer!</p>
    </div>

    <div class="8ball">
        <img src="8ball.png" alt="Magic 8 Ball">
    </div>
    <div class="show">
        <input type="text" id="question" placeholder="Still spørsmålet ditt her">
        <button id="ask">Ask the Magic 8 Ball!</button>
    </div>
    <div id="showAnswer" class="popup"> 
        <h2>Svaret ditt er:</h2>        
        <p id="answerText"></p> 
        <button id="closeBtn">Klikk her for å spørre meg mer!</button> 
    </div>
    <div class="overlay"></div>
    `;

    document.getElementById('app').innerHTML = html;

    
    document.getElementById('ask').addEventListener('click', getRandomAnswer);
    document.getElementById('closeBtn').addEventListener('click', hidePopup);
}

function getRandomAnswer() {
    let random = Math.floor(Math.random() * svar.length);
    let question = document.getElementById('question').value;
    answer = svar[random];
    showAnswer();
}

function showAnswer() {
    document.getElementById('answerText').innerHTML = answer;
    document.getElementById('showAnswer').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block'; // Show the overlay
}

function hidePopup() {
    document.getElementById('showAnswer').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none'; // Hide the overlay
}

// Start appen
show();
