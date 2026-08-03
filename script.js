// ===============================
// EmmaHarmonie Test Engine V1
// ===============================

const questions = [
{
question:"En ce moment, vous sentez-vous souvent stressé(e) ?",
answers:[
"Jamais",
"Parfois",
"Souvent",
"Presque toujours"
]
}
];

let currentQuestion = 0;

const startButton = document.getElementById("demarrer");
const questionnaire = document.getElementById("questionnaire");
const resultat = document.getElementById("resultat");

startButton.addEventListener("click", startTest);

function startTest(){

startButton.style.display="none";

showQuestion();

}

function showQuestion(){

const q = questions[currentQuestion];

let html = "";

html += "<h2>Question " + (currentQuestion+1) + " / " + questions.length + "</h2>";

html += "<h3>"+q.question+"</h3>";

q.answers.forEach((answer,index)=>{

html += "<button class='reponse' onclick='nextQuestion("+index+")'>";

html += answer;

html += "</button>";

});

questionnaire.innerHTML = html;

}

function nextQuestion(choice){

currentQuestion++;

if(currentQuestion>=questions.length){

showResult();

return;

}

showQuestion();

}

function showResult(){

questionnaire.style.display="none";

resultat.style.display="block";

resultat.innerHTML=`
<h2>🎉 Félicitations</h2>

<p>Le moteur du test fonctionne correctement.</p>

<p>Nous allons maintenant ajouter les 14 autres questions.</p>
`;

}
