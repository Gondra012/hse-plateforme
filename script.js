let indexQuestionCourante = 0;
let reponsesUtilisateur = [];
let moduleSelectionne = null;
let questionsDuQuiz = [];
let etudiantConnecte = { nom: "", email: "" };

// Gérer la soumission du formulaire d'identification
function validerConnexion(event) {
    event.preventDefault();
    const nom = document.getElementById('studentName').value.trim();
    const email = document.getElementById('studentEmail').value.trim();
    
    if (nom && email) {
        etudiantConnecte.nom = nom;
        etudiantConnecte.email = email;
        document.getElementById('userWelcome').innerText = `👋 Bonjour, ${nom}`;
        chargerModules();
        changerPage('homePage');
    }
}

function chargerModules() {
    const container = document.getElementById('modulesContainer');
    if (!container) return;
    container.innerHTML = "";
    modules.forEach(mod => {
        const btn = document.createElement('button');
        btn.className = "module-btn";
        btn.onclick = () => lancerQuiz(mod);
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

function lancerQuiz(mod) {
    moduleSelectionne = mod;
    // On charge STRICTEMENT les questions du module cliqué
    questionsDuQuiz = questionsParModule[mod.id] || [];
    
    if (questionsDuQuiz.length === 0) {
        alert("Ce module n'a pas encore de questions configurées.");
        return;
    }
    
    indexQuestionCourante = 0;
    reponsesUtilisateur = [];
    document.getElementById('currentModuleTitle').innerText = mod.name;
    afficherQuestion();
    changerPage('quizPage');
}

function afficherQuestion() {
    const dataQ = questionsDuQuiz[indexQuestionCourante];
    document.getElementById('quizProgress').innerText = `Question ${indexQuestionCourante + 1} sur ${questionsDuQuiz.length}`;
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
    if (indexQuestionCourante < questionsDuQuiz.length - 1) {
        indexQuestionCourante++;
        afficherQuestion();
    } else {
        analyserResultats();
    }
}

function analyserResultats() {
    let note = 0;
    questionsDuQuiz.forEach((q, index) => {
        if (reponsesUtilisateur[index] === q.r) note++;
    });

    const scoreDiv = document.getElementById('scoreDisplay');
    const msgDiv = document.getElementById('resultMessage');
    scoreDiv.innerText = `${note}/${questionsDuQuiz.length}`;

    if (note >= (questionsDuQuiz.length / 2)) {
        scoreDiv.className = "score-circle";
        msgDiv.innerHTML = `<strong>Félicitations ${etudiantConnecte.nom} !</strong> Vous avez validé le module <strong>${moduleSelectionne.name}</strong>.`;
    } else {
        scoreDiv.className = "score-circle fail";
        msgDiv.innerHTML = `<strong>Échec.</strong> Vous n'avez pas atteint la moyenne pour le module <strong>${moduleSelectionne.name}</strong>.`;
    }
    changerPage('resultPage');
}

function quitterQuiz() { if(confirm("Quitter le test ?")) retourAccueil(); }
function retourAccueil() { changerPage('homePage'); }
