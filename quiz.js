// DONNÉES TECHNIQUES DES COURS ET QUESTIONNAIRES HSE
const BDD_FORMATION = {
    "Travaux en Hauteur": {
        cours: "Le travail en hauteur est une cause majeure d'accidents. La protection collective (garde-corps, filets) est TOUJOURS prioritaire sur la protection individuelle (harnais).\n\nLe harnais doit être inspecté avant chaque utilisation et relié à un point d'ancrage structurellement solide situé au-dessus de la tête.",
        questions: [
            { q: "Quelle est la priorité absolue en matière de protection contre les chutes ?", o: ["A) Le harnais individuel", "B) La protection collective (ex: garde-corps)", "C) Travailler très vite"], r: "B" },
            { q: "Une échelle peut-elle servir de poste de travail régulier ?", o: ["A) Oui, si elle est bien attachée", "B) Non, elle sert uniquement de moyen d'accès", "C) Oui, pour des hauteurs de moins de 5 mètres"], r: "B" }
        ]
    },
    "Habilitation Électrique": {
        cours: "L'électricité présente des risques majeurs d'électrisation et d'électrocution.\n\nAvant toute intervention, il faut réaliser une consignation stricte : Séparer, Verrouiller, Vérifier l'Absence de Tension (VAT) et Mettre à la terre.",
        questions: [
            { q: "Que signifie le sigle VAT en sécurité électrique ?", o: ["A) Vérification de l'Absence de Tension", "B) Voltage Automatique Total", "C) Véhicule d'Assistance Technique"], r: "A" },
            { q: "Quelle est la différence entre électrisation et électrocution ?", o: ["A) L'électrisation est mortelle", "B) L'électrocution entraîne obligatoirement le décès", "C) C'est la même chose"], r: "B" }
        ]
    }
};

const TOUS_LES_MODULES = [
    "Travaux en Hauteur", "Habilitation Électrique", "Lutte contre l'Incendie", 
    "Corde & Sauvetage", "Assemblage au Mât", "Élingage", "Conduite Défensive", "Opérateur de Machines"
];

let db;
let etudiantActuel = "";
let moduleEnCours = "";
let indexQuestionActuelle = 0;
let scoreInteractif = 0;

// OUVERTURE DE LA BASE DE DONNÉES LOCALES INDEXEDDB
const request = indexedDB.open("HseDatabase", 1);
request.onupgradeneeded = function(e) {
    db = e.target.result;
    if (!db.objectStoreNames.contains("scores")) {
        db.createObjectStore("scores", { keyPath: "id", autoIncrement: true });
    }
};
request.onsuccess = function(e) { db = e.target.result; };

function connecterEtudiant() {
    etudiantActuel = document.getElementById('username').value.trim();
    if(!etudiantActuel) return alert("Veuillez saisir votre nom.");
    document.getElementById('ecran-connexion').style.display = 'none';
    document.getElementById('ecran-modules').style.display = 'block';
    document.getElementById('bienvenue-msg').innerText = "👨‍🎓 Apprenant : " + etudiantActuel;
    rafraichirTableauBord();
}

function rafraichirTableauBord() {
    const tx = db.transaction("scores", "readonly");
    const store = tx.objectStore("scores");
    const req = store.getAll();
    
    req.onsuccess = function() {
        const tousLesScores = req.result.filter(s => s.etudiant === etudiantActuel);
        const container = document.getElementById('liste-modules-container');
        container.innerHTML = "";
        
        TOUS_LES_MODULES.forEach((nomMod) => {
            const matchScore = tousLesScores.find(s => s.module === nomMod);
            const scoreTexte = matchScore ? `${matchScore.score} / 20` : "Non démarré";
            
            const btn = document.createElement('button');
            btn.className = "module-btn";
            btn.onclick = () => ouvrirCoursTechnique(nomMod);
            btn.innerHTML = `<span>📚 ${nomMod}</span> <span class="badge-score">${scoreTexte}</span>`;
            container.appendChild(btn);
        });

        const tbody = document.getElementById('historique-bdd-corps');
        tbody.innerHTML = "";
        tousLesScores.forEach(s => {
            tbody.innerHTML += `<tr><td>${s.module}</td><td>${s.score}/20</td><td>${s.pourcentage}%</td></tr>`;
        });
    };
}

function ouvrirCoursTechnique(nomModule) {
    moduleEnCours = nomModule;
    document.getElementById('ecran-modules').style.display = 'none';
    document.getElementById('cours-titre').innerText = nomModule;
    document.getElementById('cours-contenu').innerText = BDD_FORMATION[nomModule] ? BDD_FORMATION[nomModule].cours : "Contenu technique de formation en cours de chargement pour le module " + nomModule + ". Prenez connaissance des règles HSE.";
    document.getElementById('ecran-cours').style.display = 'block';
}

function retourMenuPrincipal() {
    document.getElementById('ecran-cours').style.display = 'none';
    document.getElementById('ecran-resultat').style.display = 'none';
    document.getElementById('ecran-modules').style.display = 'block';
    rafraichirTableauBord();
}

function demarrerQuizInteractif() {
    document.getElementById('ecran-cours').style.display = 'none';
    document.getElementById('ecran-quiz').style.display = 'block';
    document.getElementById('quiz-titre-module').innerText = "Quiz : " + moduleEnCours;
    indexQuestionActuelle = 0;
    scoreInteractif = 0;
    afficherQuestionFiche();
}

function afficherQuestionFiche() {
    document.getElementById('btn-continuer-quiz').style.display = 'none';
    const moduleDonnees = BDD_FORMATION[moduleEnCours] || BDD_FORMATION["Travaux en Hauteur"];
    const qActuelle = moduleDonnees.questions[indexQuestionActuelle % moduleDonnees.questions.length];
    
    document.getElementById('quiz-progression').innerText = `Question ${indexQuestionActuelle + 1} / 20`;
    document.getElementById('quiz-question-texte').innerText = qActuelle.q;
    
    const containerOptions = document.getElementById('quiz-options-container');
    containerOptions.innerHTML = "";
    
    qActuelle.o.forEach(opt => {
        const btnOpt = document.createElement('button');
        btnOpt.className = "button option-btn";
        btnOpt.innerText = opt;
        btnOpt.onclick = () => verifierReponseSouris(btnOpt, opt.charAt(0), qActuelle.r);
        containerOptions.appendChild(btnOpt);
    });
}

function verifierReponseSouris(boutonSelectionne, lettreChoisie, lettreCorrecte) {
    const boutons = document.querySelectorAll('.option-btn');
    boutons.forEach(b => b.disabled = true);
    
    if (lettreChoisie === lettreCorrecte) {
        boutonSelectionne.classList.add('correct');
        scoreInteractif++;
    } else {
        boutonSelectionne.classList.add('incorrect');
        boutons.forEach(b => {
            if(b.innerText.charAt(0) === lettreCorrecte) b.classList.add('correct');
        });
    }
    document.getElementById('btn-continuer-quiz').style.display = 'block';
}

function questionSuivante() {
    indexQuestionActuelle++;
    if (indexQuestionActuelle < 20) {
        afficherQuestionFiche();
    } else {
        sauvegarderFinModuleBDD();
    }
}

function sauvegarderFinModuleBDD() {
    document.getElementById('ecran-quiz').style.display = 'none';
    const pct = Math.round((scoreInteractif / 20) * 100);
    
    const tx = db.transaction("scores", "readwrite");
    const store = tx.objectStore("scores");
    store.add({
        etudiant: etudiantActuel,
        module: moduleEnCours,
        score: scoreInteractif,
        pourcentage: pct,
        date: new Date().toLocaleDateString()
    });

    tx.oncomplete = function() {
        document.getElementById('resultat-module-titre').innerText = moduleEnCours;
        document.getElementById('note-finale').innerText = scoreInteractif;
        document.getElementById('pourcentage-final').innerText = pct + "%";
        
        const mention = document.getElementById('mention-certification');
        if(pct >= 75) {
            mention.innerText = "🎉 REÇU : Certification HSE Validée !";
            mention.style.color = "#10b981";
        } else {
            mention.innerText = "❌ ÉCHEC : Score insuffisant (75% requis)";
            mention.style.color = "#ef4444";
        }
        document.getElementById('ecran-resultat').style.display = 'block';
    };
}
