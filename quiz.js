// =========================================================================
// MOTEUR LOGIQUE SÉCURISÉ - PARTIE 1 : INITIALISATION ET CONNEXION BDD
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

// INDEXEDDB : CONNEXION SÉCURISÉE SANS BLOCAGE
try {
    const request = indexedDB.open("HseDatabase", 1);
    request.onupgradeneeded = function(e) {
        db = e.target.result;
        if (!db.objectStoreNames.contains("scores")) {
            db.createObjectStore("scores", { keyPath: "id", autoIncrement: true });
        }
    };
    request.onsuccess = function(e) { db = e.target.result; };
    request.onerror = function() { console.log("Mode BDD invité activé."); };
} catch(err) {
    console.log("BDD locale indisponible.");
}

// FONCTION MAJEURE : ACCÉDER AUX MODULES
function connecterEtudiant() {
    try {
        const inputUser = document.getElementById('username');
        if (!inputUser) {
            alert("Erreur système : Le champ d'identification HTML est introuvable.");
            return;
        }
        
        etudiantActuel = inputUser.value.trim();
        if (!etudiantActuel) {
            alert("Veuillez saisir votre nom complet pour commencer.");
            return;
        }
        
        // Changement d'écran dynamique
        document.getElementById('ecran-connexion').style.display = 'none';
        document.getElementById('ecran-modules').style.display = 'block';
        document.getElementById('bienvenue-msg').innerText = "👨‍🎓 Apprenant : " + etudiantActuel;
        
        rafraichirTableauBord();
    } catch (error) {
        alert("Erreur technique lors de la connexion : " + error.message);
    }
}
// =========================================================================
// MOTEUR LOGIQUE SÉCURISÉ - PARTIE 2 : ENGINE, QUIZ ET EXPORT ATTESTATION
// =========================================================================

function rafraichirTableauBord() {
    try {
        const container = document.getElementById('liste-modules-container');
        if (!container) return;
        container.innerHTML = "";
        
        if (typeof BDD_FORMATION === 'undefined') {
            container.innerHTML = "<p style='color:red;font-weight:bold;'>⚠️ Erreur : Le fichier questions.js est manquant ou cassé sur GitHub. Veuillez le recréer.</p>";
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
            const totalQ = BDD_FORMATION[nomMod] ? BDD_FORMATION[nomMod].length : 20;
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
            const totalQ = BDD_FORMATION[s.module] ? BDD_FORMATION[s.module].length : 20;
            tbody.innerHTML += `<tr><td>${s.module}</td><td>${s.score}/${totalQ}</td><td>${s.pourcentage}%</td></tr>`;
        });
    }
}

function ouvrirCoursTechnique(nomModule) {
    moduleEnCours = nomModule;
    document.getElementById('ecran-modules').style.display = 'none';
    document.getElementById('cours-titre').innerText = nomModule;
    
    if (BDD_FORMATION[nomModule] && BDD_FORMATION[nomModule].cours) {
        document.getElementById('cours-contenu').innerText = BDD_FORMATION[nomModule].cours;
    } else {
        document.getElementById('cours-contenu').innerText = `Bienvenue dans le module technique : ${nomModule}.\n\nPrenez connaissance des règles d'hygiène, de sécurité et d'environnement liées à ce poste de travail de l'entreprise.`;
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
    
    const listeQuestions = BDD_FORMATION[moduleEnCours] || BDD_FORMATION["Travaux en Hauteur"];
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
    const totalQ = BDD_FORMATION[moduleEnCours].length;
    
    if (indexQuestionActuelle < totalQ) {
        afficherQuestionFiche();
    } else {
        sauvegarderFinModuleBDD();
    }
}

function sauvegarderFinModuleBDD() {
    document.getElementById('ecran-quiz').style.display = 'none';
    const totalQ = BDD_FORMATION[moduleEnCours].length;
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
                    Note globale enregistrée en BDD : <strong>${scoreInteractif} / ${BDD_FORMATION[moduleEnCours].length}</strong>
                </div>
                <div class="date">Fait le ${new Date().toLocaleDateString()} - Document officiel certifié conforme</div>
            </div>
            <script>window.onload = function() { window.print(); window.close(); }<\/script>
        </body>
        </html>
    `);
    fenetreImpression.document.close();
}
