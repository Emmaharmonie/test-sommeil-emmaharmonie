/* EmmaHarmonie - Bilan Sommeil - version améliorée */

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
    text: "Avez-vous du mal à « déconnecter » après votre journée ?",
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
  stress: "Stress et tensions",
  rumination: "Ruminations",
  hyperactivite: "Activité mentale",
  fatigue: "Fatigue et récupération",
  burnout: "Baisse d'énergie",
  habitudes: "Habitudes de sommeil",
  ecrans: "Exposition aux écrans",
  emotion: "Charge émotionnelle"
};

const profileDescriptions = {
  stress:
    "Le stress et les préoccupations de la journée semblent avoir une place importante dans vos difficultés de sommeil. Lorsque l'esprit reste sous tension, il peut être plus difficile de ralentir au moment du coucher.",

  rumination:
    "Votre esprit semble avoir tendance à continuer à réfléchir au moment du coucher ou lors des réveils nocturnes. Les pensées peuvent alors prendre de la place et rendre le retour au sommeil plus difficile.",

  hyperactivite:
    "Votre activité mentale semble rester élevée en fin de journée. Vous pouvez avoir du mal à réellement déconnecter et à laisser progressivement votre esprit ralentir avant la nuit.",

  fatigue:
    "Vos réponses suggèrent une fatigue ou une récupération insuffisante. Un sommeil qui ne permet pas de récupérer suffisamment peut avoir des répercussions sur l'énergie et le quotidien.",

  burnout:
    "Votre niveau d'énergie semble particulièrement diminué. Cette fatigue mérite d'être prise en compte, notamment lorsqu'elle s'installe ou devient persistante.",

  habitudes:
    "Certaines habitudes quotidiennes peuvent influencer la qualité du sommeil. La régularité des horaires et la mise en place d'un rythme adapté peuvent favoriser de meilleures conditions pour dormir.",

  ecrans:
    "L'utilisation des écrans en soirée peut maintenir une activité mentale et retarder l'installation du calme nécessaire au sommeil chez certaines personnes.",

  emotion:
    "Une charge émotionnelle importante peut également avoir un impact sur la qualité des nuits. Les préoccupations, tensions ou émotions de la journée peuvent continuer à solliciter l'esprit au moment du coucher."
};

const tips = {
  stress:
    "Essayez de prévoir un moment calme avant le coucher : respiration, lecture ou relaxation.",

  rumination:
    "Noter vos pensées ou vos préoccupations sur papier avant d'aller dormir peut aider à leur donner une place sans avoir à les garder en tête.",

  hyperactivite:
    "Évitez les activités très stimulantes dans l'heure précédant le coucher et accordez-vous progressivement un temps de transition.",

  fatigue:
    "Essayez de conserver des horaires de sommeil aussi réguliers que possible et soyez attentif(ve) à votre besoin réel de récupération.",

  burnout:
    "Si cette fatigue est importante, inhabituelle ou durable, il est important d'en parler avec un professionnel de santé.",

  habitudes:
    "Une routine du soir régulière peut aider votre organisme à identifier progressivement le moment consacré au repos.",

  ecrans:
    "Lorsque cela est possible, réduisez progressivement l'utilisation des écrans avant le coucher et privilégiez une activité calme.",

  emotion:
    "Prenez quelques minutes pour relâcher les tensions de la journée avant d'aller dormir : respiration, relaxation ou moment calme."
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

const emailInput = document.getElementById("userEmail");
const consent = document.getElementById("rgpd");
const sendEmail = document.getElementById("emailBtn");

const CIRCLE_LENGTH = 565;
function startQuiz() {
  document.querySelector(".hero").style.display = "none";

  quizSection.classList.remove("hidden");

  currentQuestion = 0;
  userAnswers = [];

  window.scrollTo(0, 0);

  displayQuestion();

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
}


function displayQuestion() {
  const question = questions[currentQuestion];

  questionTitle.textContent = question.text;

  questionNumber.textContent =
    `Question ${currentQuestion + 1} / ${questions.length}`;

  const progress =
    (currentQuestion / questions.length) * 100;

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

  setTimeout(() => {
    questionTitle.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 10);
}
function nextQuestion() {

  // Vérifie qu'une réponse a bien été sélectionnée
  if (userAnswers[currentQuestion] === undefined) {

    alert("Veuillez sélectionner une réponse.");

    return;
  }

  // Passe à la question suivante
  if (currentQuestion < questions.length - 1) {

    currentQuestion++;

    displayQuestion();

  } else {

    // Dernière question : calcul du bilan
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

  // Remise à zéro des scores
  Object.keys(profileScores).forEach(profile => {
    profileScores[profile] = 0;
  });

  let total = 0;

  const maximum = questions.length * 3;

  // Analyse des réponses
  questions.forEach((question, index) => {

    const answerIndex = userAnswers[index];

    const value =
      question.answers[answerIndex].value;

    total += value;

    // Score du profil principal
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


  // Calcul du score global sommeil
  const sleepScore = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        100 - ((total / maximum) * 100)
      )
    )
  );


  showResults(sleepScore);
}
function showResults(sleepScore) {

  quizSection.classList.add("hidden");

  resultSection.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  // Score global
  if (scoreValue) {
    scoreValue.textContent = `${sleepScore}%`;
  }

  if (scoreCircle) {
    scoreCircle.style.strokeDasharray = CIRCLE_LENGTH;
    scoreCircle.style.strokeDashoffset =
      CIRCLE_LENGTH - (CIRCLE_LENGTH * sleepScore) / 100;
  }


  // Classement des profils
  const sortedProfiles =
    Object.entries(profileScores)
      .sort((a, b) => b[1] - a[1]);


  // Les 3 profils principaux
  const topProfiles =
    sortedProfiles.slice(0, 3);


  profileCards.innerHTML = "";


  topProfiles.forEach(([profile, score], index) => {

    const card = document.createElement("div");

    card.className = "profile-card";


    const maxProfileScore = 9;

    const percentage =
      Math.min(
        100,
        Math.round(
          (score / maxProfileScore) * 100
        )
      );


    let level = "Faible";

    if (percentage >= 65) {
      level = "Important";
    } else if (percentage >= 35) {
      level = "Modéré";
    }


    card.innerHTML = `
      <div class="profile-rank">
        ${index + 1}
      </div>

      <div class="profile-content">

        <h3>
          ${profileLabels[profile]}
        </h3>

        <div class="profile-level">
          Niveau : <strong>${level}</strong>
        </div>

        <div class="profile-bar">
          <div
            class="profile-bar-fill"
            style="width:${percentage}%">
          </div>
        </div>

        <p>
          ${profileDescriptions[profile]}
        </p>

      </div>
    `;


    profileCards.appendChild(card);
  });


  // Profil principal
  const mainProfile =
    topProfiles[0][0];


  if (analysisText) {

    analysisText.innerHTML = `
      <strong>
        Votre sommeil semble actuellement
        principalement influencé par :
        ${profileLabels[mainProfile]}.
      </strong>

      <p>
        ${profileDescriptions[mainProfile]}
      </p>
    `;
  }


  // Conseil personnalisé
  if (tipsText) {

    tipsText.innerHTML = `
      <strong>
        🌿 Une première piste pour vous
      </strong>

      <p>
        ${tips[mainProfile]}
      </p>

      <p>
        De petits changements réguliers peuvent
        parfois aider à créer progressivement
        de meilleures conditions pour le sommeil.
      </p>
    `;
  }


  // Message selon le score global
  const scoreMessage =
    document.getElementById("scoreMessage");


  if (scoreMessage) {

    if (sleepScore >= 75) {

      scoreMessage.textContent =
        "Votre sommeil semble globalement favorable. Quelques ajustements peuvent néanmoins vous aider à préserver votre équilibre.";

    } else if (sleepScore >= 50) {

      scoreMessage.textContent =
        "Votre sommeil présente quelques points de vigilance. Ce bilan peut vous aider à identifier les habitudes ou facteurs à prendre en compte.";

    } else {

      scoreMessage.textContent =
        "Votre sommeil semble actuellement rencontrer plusieurs difficultés. Ce bilan vous donne des pistes pour mieux comprendre ce qui peut vous perturber.";
    }
  }
}
// =====================================================
// BOUTONS DE NAVIGATION
// =====================================================

if (startBtn) {
  startBtn.addEventListener("click", startQuiz);
}

if (nextBtn) {
  nextBtn.addEventListener("click", nextQuestion);
}

if (previousBtn) {
  previousBtn.addEventListener("click", previousQuestion);
}


// =====================================================
// FORMULAIRE EMAIL
// =====================================================

if (sendEmail) {

  sendEmail.addEventListener("click", async () => {

    const email =
      emailInput ? emailInput.value.trim() : "";

    if (!email) {
      alert("Veuillez renseigner votre adresse e-mail.");
      return;
    }

    if (!consent || !consent.checked) {
      alert(
        "Veuillez accepter l'utilisation de vos données pour recevoir votre bilan."
      );
      return;
    }


    sendEmail.disabled = true;

    sendEmail.textContent = "Envoi en cours…";


    try {

      /*
       * Les résultats sont préparés pour l'envoi.
       * Le système d'envoi utilisé par ton ancien bilan
       * pourra être conservé lors de notre vérification.
       */

      const resultData = {
        email: email,
        score: scoreValue
          ? scoreValue.textContent
          : "",
        profiles: Object.entries(profileScores)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(([profile, score]) => ({
            profile: profileLabels[profile],
            score: score
          }))
      };


      console.log(
        "Données du bilan :",
        resultData
      );


      alert(
        "Votre bilan a bien été préparé."
      );


    } catch (error) {

      console.error(
        "Erreur lors de l'envoi :",
        error
      );

      alert(
        "Une erreur est survenue. Vous pouvez consulter votre résultat directement."
      );

    } finally {

      sendEmail.disabled = false;

      sendEmail.textContent =
        "Recevoir mon bilan";

    }

  });

}


// =====================================================
// INITIALISATION
// =====================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    if (quizSection) {
      quizSection.classList.add("hidden");
    }

    if (resultSection) {
      resultSection.classList.add("hidden");
    }

  }
);
