const questions = [
  {
    question: "Vous mettez plus de 30 minutes à vous endormir ?",
    oui: "Stress ou anxiété",
    non: null
  },
  {
    question: "Vous vous réveillez plusieurs fois par nuit ?",
    oui: "Sommeil fragmenté",
    non: null
  },
  {
    question: "Vous utilisez votre téléphone avant de dormir ?",
    oui: "Excès d'écrans",
    non: null
  },
  {
    question: "Vous buvez du café après 16h ?",
    oui: "Excès de caféine",
    non: null
  },
  {
    question: "Vous vous sentez fatigué dès le réveil ?",
    oui: "Sommeil peu réparateur",
    non: null
  }
];

let index = 0;
let resultats = [];

const bouton = document.getElementById("demarrer");
const questionnaire = document.getElementById("questionnaire");
const resultat = document.getElementById("resultat");

bouton.addEventListener("click", afficherQuestion);

function afficherQuestion() {

    if (index >= questions.length) {
        afficherResultat();
        return;
    }

    const q = questions[index];

    questionnaire.innerHTML = `
        <h2>${q.question}</h2>

        <button onclick="reponse(true)">Oui</button>

        <button onclick="reponse(false)">Non</button>
    `;
}

function reponse(oui) {

    if (oui && questions[index].oui) {
        resultats.push(questions[index].oui);
    }

    index++;

    afficherQuestion();
}

function afficherResultat() {

    questionnaire.style.display = "none";
    bouton.style.display = "none";

    if(resultats.length===0){

        resultat.innerHTML =
        "<h2>Votre sommeil semble globalement satisfaisant.</h2>";

        return;
    }

    resultat.innerHTML = `
        <h2>Causes possibles :</h2>
        <ul>
        ${resultats.map(r=>`<li>${r}</li>`).join("")}
        </ul>
    `;
}
