let indexQuestionCourante = 0;
let reponsesUtilisateur = [];
let moduleSelectionne = "";

function chargerModules() {
    const container = document.getElementById('modulesContainer');
    if (!container) return;
    container.innerHTML = "";
    modules.forEach(mod => {
        const btn = document.createElement('button');
        btn.className = "module-btn";
        btn.onclick = () => lancerQuiz(mod.name);
        btn.innerHTML = `
            <div class="module-content"><span>${mod.icon}</span> ${mod.name}</div>
            <div class="price-badge">20K</div>
        `;
        container.appendChild(btn);
    });
}

function changerPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function lancerQuiz(nomModule) {
    moduleSelectionne = nomModule;
    indexQuestionCourante = 0;
    reponsesUtilisateur = [];
    document.getElementById('currentModuleTitle').innerText = nomModule;
    afficherQuestion();
    changerPage('quizPage');
}

function afficherQuestion() {
    const dataQ = questionsDB[indexQuestionCourante];
    document.getElementById('quizProgress').innerText = `Question ${indexQuestionCourante + 1} sur ${questionsDB.length}`;
    document.getElementById('questionText').innerText = dataQ.q;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = "";
    document.getElementById('nextBtn').disabled = true;

    dataQ.o.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerText = option;
        btn.onclick = () => selectionnerOption(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function selectionnerOption(indexOptions, boutonSelectionne) {
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    boutonSelectionne.classList.add('selected');
    reponsesUtilisateur[indexQuestionCourante] = indexOptions;
    document.getElementById('nextBtn').disabled = false;
}

function questionSuivante() {
    if (indexQuestionCourante < questionsDB.length - 1) {
        indexQuestionCourante++;
        afficherQuestion();
    } else {
        analyserResultats();
    }
}

function analyserResultats() {
    let note = 0;
    questionsDB.forEach((q, index) => {
        if (reponsesUtilisateur[index] === q.r) note++;
    });

    const scoreDiv = document.getElementById('scoreDisplay');
    const msgDiv = document.getElementById('resultMessage');
    scoreDiv.innerText = `${note}/${questionsDB.length}`;

    if (note >= 12) {
        scoreDiv.className = "score-circle";
        msgDiv.innerHTML = `<strong>Félicitations !</strong> Module <strong>${moduleSelectionne}</strong> validé.`;
    } else {
        scoreDiv.className = "score-circle fail";
        msgDiv.innerHTML = `<strong>Échec.</strong> Moins de 12 bonnes réponses sur <strong>${moduleSelectionne}</strong>.`;
    }
    changerPage('resultPage');
}

function quitterQuiz() { if(confirm("Quitter le test ?")) retourAccueil(); }
function retourAccueil() { changerPage('homePage'); }

document.addEventListener("DOMContentLoaded", chargerModules);
