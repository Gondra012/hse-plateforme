// =========================================================================
// QUIZ.JS SÉCURISÉ AVEC VISUELS - PARTIE 1 : INITIALISATION ET INTERFACE
// =========================================================================

const TOUS_LES_MODULES = [
    "Travaux en Hauteur", "Habilitation Électrique", "Lutte contre l'Incendie", 
    "Corde & Sauvetage", "Assemblage au Mât", "Élingage", "Conduite Défensive", "Opérateur de Machines"
];

let db;
let etudiantActuel = "";
let moduleEnCours = "";
let indexQuestionActuelle = 0;
let scoreInteractif = 0;

// BASE DE DONNÉES LOCALES INDEXEDDB
try {
    const request = indexedDB.open("HseDatabase", 1);
    request.onupgradeneeded = function(e) {
        db = e.target.result;
        if (!db.objectStoreNames.contains("scores")) {
            db.createObjectStore("scores", { keyPath: "id", autoIncrement: true });
        }
    };
    request.onsuccess = function(e) { db = e.target.result; };
} catch(err) {
    console.log("IndexedDB indisponible.");
}

function connecterEtudiant() {
    etudiantActuel = document.getElementById('username').value.trim();
    if(!etudiantActuel) return alert("Veuillez saisir votre nom.");
    document.getElementById('ecran-connexion').style.display = 'none';
    document.getElementById('ecran-modules').style.display = 'block';
    document.getElementById('bienvenue-msg').innerText = "👨‍🎓 Apprenant : " + etudiantActuel;
    rafraichirTableauBord();
}

function rafraichirTableauBord() {
    try {
        const container = document.getElementById('liste-modules-container');
        if (!container) return;
        container.innerHTML = "";
        
        if (typeof window.QUESTIONS_MODULES === 'undefined') {
            container.innerHTML = "<p style='color:red;font-weight:bold;'>⚠️ Erreur : Les fichiers de questions ne se chargent pas. Vérifiez index.html.</p>";
            return;
        }

        if (db) {
            const tx = db.transaction("scores", "readonly");
            const store = tx.objectStore("scores");
            const req = store.getAll();
            
            req.onsuccess = function() {
                const tousLesScores = req.result.filter(s => s.etudiant === etudiantActuel);
                construireBoutonsModules(tousLesScores);
            };
            req.onerror = function() { construireBoutonsModules([]); };
        } else {
            construireBoutonsModules([]);
        }
    } catch(e) {
        construireBoutonsModules([]);
    }
}

function construireBoutonsModules(tousLesScores) {
    const container = document.getElementById('liste-modules-container');
    container.innerHTML = "";
    
    TOUS_LES_MODULES.forEach((nomMod) => {
        const scoresModule = tousLesScores.filter(s => s.module === nomMod);
        let scoreTexte = "Non démarré";
        
        if (scoresModule.length > 0) {
            const maxScore = Math.max(...scoresModule.map(s => s.score));
            const totalQ = window.QUESTIONS_MODULES[nomMod] ? window.QUESTIONS_MODULES[nomMod].length : 20;
            scoreTexte = `${maxScore} / ${totalQ}`;
        }
        
        const btn = document.createElement('button');
        btn.className = "module-btn";
        btn.onclick = () => ouvrirCoursTechnique(nomMod);
        btn.innerHTML = `<span>📚 ${nomMod}</span> <span class="badge-score">${scoreTexte}</span>`;
        container.appendChild(btn);
    });

    const tbody = document.getElementById('historique-bdd-corps');
    if (tbody) {
        tbody.innerHTML = "";
        tousLesScores.forEach(s => {
            const totalQ = window.QUESTIONS_MODULES[s.module] ? window.QUESTIONS_MODULES[s.module].length : 20;
            tbody.innerHTML += `<tr><td>${s.module}</td><td>${s.score}/${totalQ}</td><td>${s.pourcentage}%</td></tr>`;
        });
    }
}
// =========================================================================
// QUIZ.JS SÉCURISÉ AVEC VISUELS - PARTIE 2 : LOGIQUE DES COURS, VISUELS ET QUIZ
// =========================================================================

function ouvrirCoursTechnique(nomModule) {
    moduleEnCours = nomModule;
    document.getElementById('ecran-modules').style.display = 'none';
    document.getElementById('cours-titre').innerText = nomModule;
    
    // 1. Gestion du texte long du cours
    const cleCours = nomModule + "_Cours";
    if (window.QUESTIONS_MODULES && window.QUESTIONS_MODULES[cleCours]) {
        document.getElementById('cours-contenu').innerText = window.QUESTIONS_MODULES[cleCours];
    } else {
        document.getElementById('cours-contenu').innerText = `--- LIVRET DE FORMATION : ${nomModule.toUpperCase()} ---\n\nBienvenue dans ce module de formation professionnelle HSE.\n\nPrenez le temps de bien assimiler ces consignes générales avant de lancer votre évaluation.`;
    }
    
    // 2. Gestion de l'image dynamique
    const cleImage = nomModule + "_Image";
    const imgElement = document.getElementById('cours-image');
    const imgContainer = document.getElementById('cours-image-container');
    if (window.QUESTIONS_MODULES && window.QUESTIONS_MODULES[cleImage]) {
        imgElement.src = window.QUESTIONS_MODULES[cleImage];
        imgContainer.style.display = "block";
    } else {
        imgContainer.style.display = "none";
    }

    // 3. Gestion de la vidéo dynamique (Lien d'intégration YouTube)
    const cleVideo = nomModule + "_Video";
    const videoElement = document.getElementById('cours-video');
    const videoContainer = document.getElementById('cours-video-container');
    if (window.QUESTIONS_MODULES && window.QUESTIONS_MODULES[cleVideo]) {
        videoElement.src = window.QUESTIONS_MODULES[cleVideo];
        videoContainer.style.display = "block";
    } else {
        videoElement.src = "";
        videoContainer.style.display = "none";
    }
    
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
    
    const listeQuestions = window.QUESTIONS_MODULES[moduleEnCours] || window.QUESTIONS_MODULES["Travaux en Hauteur"];
    const qActuelle = listeQuestions[indexQuestionActuelle];
    
    document.getElementById('quiz-progression').innerText = `Question ${indexQuestionActuelle + 1} / ${listeQuestions.length}`;
    document.getElementById('quiz-question-texte').innerText = qActuelle.q;
    
    const containerOptions = document.getElementById('quiz-options-container');
    containerOptions.innerHTML = "";
    
    qActuelle.o.forEach(opt => {
        const btnOpt = document.createElement('button');
        btnOpt.className = "option-btn";
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
    const totalQ = window.QUESTIONS_MODULES[moduleEnCours] ? window.QUESTIONS_MODULES[moduleEnCours].length : 20;
    
    if (indexQuestionActuelle < totalQ) {
        afficherQuestionFiche();
    } else {
        sauvegarderFinModuleBDD();
    }
}

function sauvegarderFinModuleBDD() {
    document.getElementById('ecran-quiz').style.display = 'none';
    const totalQ = window.QUESTIONS_MODULES[moduleEnCours] ? window.QUESTIONS_MODULES[moduleEnCours].length : 20;
    const pct = Math.round((scoreInteractif / totalQ) * 100);
    
    if (db) {
        const tx = db.transaction("scores", "readwrite");
        const store = tx.objectStore("scores");
        store.add({
            etudiant: etudiantActuel,
            module: moduleEnCours,
            score: scoreInteractif,
            pourcentage: pct,
            date: new Date().toLocaleDateString()
        });
    }

    document.getElementById('resultat-module-titre').innerText = moduleEnCours;
    document.getElementById('note-finale').innerText = scoreInteractif;
    document.getElementById('pourcentage-final').innerText = pct + "%";
    
    const mention = document.getElementById('mention-certification');
    const btnPdf = document.getElementById('btn-telecharger-pdf');
    
    if(pct >= 75) {
        mention.innerText = "🎉 REÇU : Certification HSE Validée !";
        mention.style.color = "#10b981";
        btnPdf.style.display = "block"; 
    } else {
        mention.innerText = "❌ ÉCHEC : Score insuffisant (75% requis)";
        mention.style.color = "#ef4444";
        btnPdf.style.display = "none"; 
    }
    document.getElementById('ecran-resultat').style.display = 'block';
}

function genererAttestationPDF() {
    const fenetreImpression = window.open('', '_blank');
    fenetreImpression.document.write(`
        <html>
        <head>
            <title>Attestation HSE - ${etudiantActuel}</title>
            <style>
                body { font-family: 'Helvetica', sans-serif; display: flex; justify-content: center; align-items: center; height: 90vh; margin: 0; background-color: #fff; }
                .cadre { border: 10px double #10b981; padding: 50px; text-align: center; width: 800px; max-width: 90%; }
                h1 { color: #1e293b; font-size: 32px; margin-bottom: 10px; text-transform: uppercase; }
                .sous-titre { color: #64748b; font-size: 18px; margin-bottom: 30px; }
                .nom { color: #10b981; font-size: 28px; font-weight: bold; margin-bottom: 30px; }
                .texte { color: #334155; font-size: 16px; line-height: 1.6; margin-bottom: 40px; }
                .date { color: #94a3b8; font-size: 12px; margin-top: 50px; border-top: 1px solid #e2e8f0; padding-top: 15px; }
            </style>
        </head>
        <body>
            <div class="cadre">
                <h1>Attestation de Réussite HSE</h1>
                <div class="sous-titre">Le centre de formation en ligne certifie que l'apprenant :</div>
                <div class="nom">${etudiantActuel.toUpperCase()}</div>
                <div class="texte">
                    A validé avec succès l'ensemble des compétences théoriques et pratiques liées au module de formation professionnelle : <br>
                    <strong>"${moduleEnCours}"</strong><br><br>
                    Note globale enregistrée en BDD : <strong>${scoreInteractif} / ${window.QUESTIONS_MODULES[moduleEnCours].length}</strong>
                </div>
                <div class="date">Fait le ${new Date().toLocaleDateString()} - Document officiel certifié conforme</div>
            </div>
            <script>window.onload = function() { window.print(); window.close(); }<\/script>
        </body>
        </html>
    `);
    fenetreImpression.document.close();
}
