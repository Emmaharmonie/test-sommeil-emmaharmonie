/* ==========================================================================
   EmmaHarmonie - Bilan Sommeil
   script.js
   ==========================================================================
*/

const questions = [

    {
        id: "stress",
        text: "À quelle fréquence vous sentez-vous stressé(e) au cours de la journée ?",
        profile: "stress",
        answers: [
            { text: "Jamais", value: 0 },
            { text: "Parfois", value: 1 },
            { text: "Souvent", value: 2 },
            { text: "Presque tous les jours", value: 3 }
        ]
    },

    {
        id: "rumination",
        text: "Le soir, votre esprit continue-t-il de réfléchir une fois couché(e) ?",
        profile: "rumination",
        answers: [
            { text: "Jamais", value: 0 },
            { text: "Parfois", value: 1 },
            { text: "Souvent", value: 2 },
            { text: "Toujours", value: 3 }
        ]
    },

    {
        id: "reveils",
        text: "Vous réveillez-vous pendant la nuit ?",
        profile: "fatigue",
        answers: [
            { text: "Jamais", value: 0 },
            { text: "1 fois", value: 1 },
            { text: "2 à 3 fois", value: 2 },
            { text: "Très souvent", value: 3 }
        ]
    },

    {
        id: "ecrans",
        text: "Utilisez-vous un téléphone ou une tablette dans l'heure précédant le coucher ?",
        profile: "ecrans",
        answers: [
            { text: "Jamais", value: 0 },
            { text: "Parfois", value: 1 },
            { text: "Souvent", value: 2 },
            { text: "Tous les soirs", value: 3 }
        ]
    },

    {
        id: "fatigue",
        text: "Comment vous sentez-vous au réveil ?",
        profile: "fatigue",
        answers: [
            { text: "Reposé(e)", value: 0 },
            { text: "Un peu fatigué(e)", value: 1 },
            { text: "Fatigué(e)", value: 2 },
            { text: "Épuisé(e)", value: 3 }
        ]
    },

    {
        id: "charge",
        text: "Avez-vous l'impression de porter beaucoup de responsabilités actuellement ?",
        profile: "emotion",
        answers: [
            { text: "Non", value: 0 },
            { text: "Un peu", value: 1 },
            { text: "Beaucoup", value: 2 },
            { text: "Énormément", value: 3 }
        ]
    },

    {
        id: "habitudes",
        text: "Vos horaires de coucher sont-ils réguliers ?",
        profile: "habitudes",
        answers: [
            { text: "Toujours", value: 0 },
            { text: "Souvent", value: 1 },
            { text: "Rarement", value: 2 },
            { text: "Jamais", value: 3 }
        ]
    },

    {
        id: "mental",
        text: "Avez-vous du mal à 'déconnecter' après votre journée ?",
        profile: "hyperactivite",
        answers: [
            { text: "Jamais", value: 0 },
            { text: "Parfois", value: 1 },
            { text: "Souvent", value: 2 },
            { text: "Toujours", value: 3 }
        ]
    },

    {
        id: "detente",
        text: "Prenez-vous un moment pour vous détendre avant de dormir ?",
        profile: "stress",
        answers: [
            { text: "Toujours", value: 0 },
            { text: "Souvent", value: 1 },
            { text: "Rarement", value: 2 },
            { text: "Jamais", value: 3 }
        ]
    },

    {
        id: "energie",
        text: "Votre énergie baisse-t-elle fortement dans la journée ?",
        profile: "burnout",
        answers: [
            { text: "Jamais", value: 0 },
            { text: "Parfois", value: 1 },
            { text: "Souvent", value: 2 },
            { text: "Tous les jours", value: 3 }
        ]
    },

    {
        id: "temps",
        text: "Depuis combien de temps vos difficultés de sommeil sont-elles présentes ?",
        profile: "fatigue",
        answers: [
            { text: "Quelques jours", value: 0 },
            { text: "Quelques semaines", value: 1 },
            { text: "Quelques mois", value: 2 },
            { text: "Plus d'un an", value: 3 }
        ]
    },

    {
        id: "reveil",
        text: "Vous réveillez-vous avant votre réveil sans réussir à vous rendormir ?",
        profile: "rumination",
        answers: [
            { text: "Jamais", value: 0 },
            { text: "Parfois", value: 1 },
            { text: "Souvent", value: 2 },
            { text: "Très souvent", value: 3 }
        ]
    },

    {
        id: "travail",
        text: "Votre activité professionnelle ou personnelle vous préoccupe-t-elle le soir ?",
        profile: "stress",
        answers: [
            { text: "Jamais", value: 0 },
            { text: "Parfois", value: 1 },
            { text: "Souvent", value: 2 },
            { text: "Constamment", value: 3 }
        ]
    },

    {
        id: "repos",
        text: "Avez-vous l'impression que votre sommeil est réparateur ?",
        profile: "fatigue",
        answers: [
            { text: "Toujours", value: 0 },
            { text: "Souvent", value: 1 },
            { text: "Rarement", value: 2 },
            { text: "Jamais", value: 3 }
        ]
    },

    {
        id: "moral",
        text: "Ces difficultés ont-elles un impact sur votre moral ?",
        profile: "emotion",
        answers: [
            { text: "Pas du tout", value: 0 },
            { text: "Un peu", value: 1 },
            { text: "Beaucoup", value: 2 },
            { text: "Énormément", value: 3 }
        ]
    }

];

const profileLabels = {

    stress: "Stress",
    rumination: "Rumination",
    hyperactivite: "Hyperactivité mentale",
    fatigue: "Dette de sommeil",
    burnout: "Fatigue importante",
    habitudes: "Habitudes de sommeil",
    ecrans: "Exposition aux écrans",
    emotion: "Charge émotionnelle"

};

let currentQuestion = 0;
let userAnswers = [];

const profileScores = {
    stress: 0,
    rumination: 0,
    hyperactivite: 0,
    fatigue: 0,
    burnout: 0,
    habitudes: 0,
    ecrans: 0,
    emotion: 0
};

const profileDescriptions = {
    stress:
        "Le stress quotidien semble occuper une place importante. Lorsqu'il reste élevé, il peut rendre l'endormissement plus difficile et favoriser des nuits moins réparatrices.",

    rumination:
        "Vous semblez avoir tendance à continuer de réfléchir une fois couché(e). Ce fonctionnement est fréquent chez les personnes qui ont du mal à mettre leur cerveau au repos.",

    hyperactivite:
        "Votre activité mentale reste élevée en fin de journée. Il peut être difficile de ralentir le rythme et de laisser place au sommeil.",

    fatigue:
        "Vos réponses suggèrent une fatigue installée ou un sommeil peu récupérateur. Plusieurs facteurs peuvent expliquer cette sensation.",

    burnout:
        "Votre niveau d'énergie semble diminué. Cette fatigue mérite d'être prise en compte, surtout si elle persiste dans le temps.",

    habitudes:
        "Certaines habitudes du quotidien peuvent influencer la qualité du sommeil : horaires irréguliers, manque de routine ou rythme de vie changeant.",

    ecrans:
        "L'utilisation des écrans en soirée peut retarder l'endormissement chez certaines personnes en stimulant l'activité cérébrale.",

    emotion:
        "Votre charge émotionnelle actuelle semble importante. Les émotions peuvent avoir un impact sur la qualité des nuits."
};

const tips = {
    stress:
        "Essayez de prévoir un moment calme avant le coucher : respiration, lecture ou relaxation.",

    rumination:
        "Noter vos pensées sur papier avant d'aller dormir peut aider certaines personnes à diminuer les ruminations.",

    hyperactivite:
        "Évitez les activités très stimulantes dans l'heure précédant le coucher.",

    fatigue:
        "Essayez de conserver des horaires de sommeil aussi réguliers que possible.",

    burnout:
        "Si cette fatigue est importante ou durable, n'hésitez pas à consulter un professionnel de santé.",

    habitudes:
        "Une routine du soir régulière favorise souvent un meilleur endormissement.",

    ecrans:
        "Limiter les écrans 30 à 60 minutes avant le coucher peut être bénéfique.",

    emotion:
        "Prendre quelques minutes pour relâcher les tensions de la journée peut améliorer votre qualité de sommeil."
};

const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");

const startBtn = document.getElementById("startBtn");

const questionTitle = document.getElementById("questionTitle");
const answersContainer = document.getElementById("answersContainer");

const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");

const questionNumber = document.getElementById("questionNumber");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");

const profileCards = document.getElementById("profileCards");
const analysisText = document.getElementById("analysisText");
const tipsText = document.getElementById("tipsText");

const scoreValue = document.getElementById("scoreValue");
const scoreCircle = document.getElementById("scoreCircle");

const emailInput = document.getElementById("email");
const consent = document.getElementById("consent");
const sendEmail = document.getElementById("sendEmail");

const CIRCLE_LENGTH = 565;

function startQuiz() {

    document.querySelector(".hero").style.display = "none";

    quizSection.classList.remove("hidden");

    displayQuestion();

}

function displayQuestion() {

    const question = questions[currentQuestion];

    questionTitle.textContent = question.text;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    const progress =
        ((currentQuestion) / questions.length) * 100;

    progressPercent.textContent =
        `${Math.round(progress)} %`;

    progressFill.style.width =
        `${progress}%`;

    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const div = document.createElement("div");

        div.className = "answer";

        if (userAnswers[currentQuestion] === index) {

            div.classList.add("selected");

        }

        div.innerHTML = `
            <strong>${answer.text}</strong>
        `;

        div.addEventListener("click", () => {

            userAnswers[currentQuestion] = index;

            document
                .querySelectorAll(".answer")
                .forEach(a => a.classList.remove("selected"));

            div.classList.add("selected");

        });

        answersContainer.appendChild(div);

    });

    previousBtn.style.visibility =
        currentQuestion === 0 ? "hidden" : "visible";

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Voir mon bilan"
            : "Suivant →";

}

function nextQuestion() {

    if (userAnswers[currentQuestion] === undefined) {

        alert("Veuillez sélectionner une réponse.");

        return;

    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        displayQuestion();

    } else {

        calculateResults();

    }

}

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        displayQuestion();

    }

}

function calculateResults() {

    Object.keys(profileScores).forEach(profile => {
        profileScores[profile] = 0;
    });

    let total = 0;
    const maximum = questions.length * 3;

    questions.forEach((question, index) => {

        const answerIndex = userAnswers[index];
        const value = question.answers[answerIndex].value;

        total += value;

        // Profil principal
        profileScores[question.profile] += value;

        // Pondérations complémentaires
        switch (question.id) {

            case "stress":
                profileScores.emotion += value * 0.5;
                profileScores.hyperactivite += value * 0.5;
                break;

            case "rumination":
                profileScores.stress += value * 0.7;
                profileScores.hyperactivite += value * 0.8;
                break;

            case "mental":
                profileScores.rumination += value * 0.8;
                profileScores.stress += value * 0.5;
                break;

            case "reveils":
                profileScores.stress += value * 0.4;
                break;

            case "ecrans":
                profileScores.habitudes += value * 0.8;
                break;

            case "fatigue":
                profileScores.burnout += value * 0.7;
                break;

            case "charge":
                profileScores.stress += value * 0.8;
                break;

            case "travail":
                profileScores.emotion += value * 0.8;
                break;

            case "repos":
                profileScores.burnout += value * 0.5;
                break;

        }

    });

    const sleepScore = Math.max(
        0,
        Math.round(100 - ((total / maximum) * 100))
    );

    showResults(sleepScore);

}
function showResults(score) {

    quizSection.classList.add("hidden");

    resultSection.classList.remove("hidden");

    scoreValue.textContent = score + "%";

    const offset =
        CIRCLE_LENGTH - (score / 100) * CIRCLE_LENGTH;

    scoreCircle.style.strokeDashoffset = offset;

    progressFill.style.width = "100%";

    const sortedProfiles =
        Object.entries(profileScores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    profileCards.innerHTML = "";

    analysisText.innerHTML = "";

    tipsText.innerHTML = "";

    sortedProfiles.forEach(([profile, value]) => {

        const percent = Math.round((value / 9) * 100);

        profileCards.innerHTML += `

        <div class="profile-card">

            <h4>${profileLabels[profile]}</h4>

            <p>${profileDescriptions[profile]}</p>

            <div class="profile-percent">

    ${Math.min(percent,100)} %

</div>

<div class="progress-profile">

    <div
        class="progress-profile-fill"
        style="width:${Math.min(percent,100)}%">
    </div>

</div>

        </div>

        `;

        analysisText.innerHTML += `

        <p>

            <strong>${profileLabels[profile]} :</strong>
            ${profileDescriptions[profile]}

        </p>

        `;

        tipsText.innerHTML += `

        <p>

            • ${tips[profile]}

        </p>

        `;

    });

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

/* ======================================================================
   INITIALISATION
   ====================================================================== */

startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", nextQuestion);

previousBtn.addEventListener("click", previousQuestion);

/* ======================================================================
   FIN DU SCRIPT
   ====================================================================== */
