// =========================================================================
// QUIZ.JS - PARTIE 1 : BASE DE DONNÉES TECHNIQUE AVEC COURS ET QUIZ UNIQUES
// =========================================================================

const BDD_FORMATION = {
    "Travaux en Hauteur": {
        cours: "Le travail en hauteur présente des risques majeurs de chutes. La protection collective (garde-corps, filets) est prioritaire sur la protection individuelle (harnais).\n\nLe harnais doit être inspecté et connecté à un point d'ancrage solide situé au-dessus de la tête.",
        questions: [
            { q: "Quelle est la priorité absolue en matière de protection contre les chutes ?", o: ["A) Le harnais individuel", "B) La protection collective (ex: garde-corps)", "C) Travailler très vite"], r: "B" },
            { q: "Une échelle peut-elle servir de poste de travail régulier ?", o: ["A) Oui", "B) Non, elle sert uniquement de moyen d'accès", "C) Oui, pour moins de 5 mètres"], r: "B" },
            { q: "Que compose un système antichute individuel de base ?", o: ["A) Un casque et des gants", "B) Un point d'ancrage, une liaison et un harnais", "C) Une échelle"], r: "B" },
            { q: "Où doit se situer idéalement le point d'ancrage du harnais ?", o: ["A) Au niveau des pieds", "B) Au niveau de la taille", "C) Au-dessus de la tête"], r: "C" },
            { q: "Qu'est-ce que le 'tirant d'air' ?", o: ["A) La force du vent", "B) La hauteur libre minimale nécessaire sous les pieds pour éviter l'impact", "C) L'épaisseur du câble"], r: "B" },
            { q: "À quelle fréquence un harnais doit-il être vérifié par un expert ?", o: ["A) Tous les 5 ans", "B) Au moins une fois par an (12 mois)", "C) Uniquement après une chute"], r: "B" },
            { q: "Que devez-vous faire avant d'utiliser votre harnais antichute ?", o: ["A) Le laver", "B) Réaliser une inspection visuelle des coutures", "C) Demander l'autorisation"], r: "B" }
        ]
    },
    "Habilitation Électrique": {
        cours: "Le courant électrique présente deux risques majeurs : l'électrisation (passage du courant dans le corps) et l'électrocution (mortelle).\n\nAvant toute intervention, il faut réaliser une consignation : Séparer, Verrouiller, VAT, Mettre à la terre.",
        questions: [
            { q: "Quelle est la différence entre électrisation et électrocution ?", o: ["A) L'électrisation est mortelle, pas l'électrocution", "B) L'électrocution entraîne obligatoirement le décès de la victime", "C) C'est la même chose"], r: "B" },
            { q: "Que signifie le sigle VAT en sécurité électrique ?", o: ["A) Vérification de l'Absence de Tension", "B) Voltage Automatique Total", "C) Véhicule d'Assistance Technique"], r: "A" },
            { q: "Quelle est la première étape d'une consignation électrique ?", o: ["A) Mettre des gants", "B) La séparation (couper l'alimentation générale)", "C) Appeler les pompiers"], r: "B" },
            { q: "Peut-on utiliser un multimètre classique pour réaliser une VAT réglementaire ?", o: ["A) Oui", "B) Non, il faut utiliser un testeur dédié (détecteur de tension) conforme", "C) Oui, en faisant attention"], r: "B" },
            { q: "Quel symbole graphique sur un outil indique qu'il est isolé pour 1000 Volts ?", o: ["A) Un triangle avec un éclair", "B) Deux triangles superposés avec la mention 1000V", "C) Un cercle rouge"], r: "B" }
        ]
    },
    "Lutte contre l'Incendie": {
        cours: "Pour qu'un feu se déclare, trois éléments doivent être réunis : un Combustible, un Comburant (oxygène) et une Énergie d'activation (chaleur). C'est le Triangle du Feu.",
        questions: [
            { q: "Quels sont les trois éléments du Triangle du Feu ?", o: ["A) Bois, Allumette, Fumée", "B) Combustible, Comburant, Énergie d'activation", "C) Eau, Vent, Terre"], r: "B" },
            { q: "En cas de début d'incendie, quelle est la toute première action ?", o: ["A) Chercher ses affaires", "B) Déclencher l'alarme et alerter", "C) Ouvrir toutes les fenêtres"], r: "B" },
            { q: "Quel extincteur est adapté pour un feu sur équipement électrique sous tension ?", o: ["A) Eau pulvérisée", "B) Dioxyde de carbone (CO2)", "C) Seau d'eau"], r: "B" },
            { q: "Où devez-vous vous rendre immédiatement après avoir évacué ?", o: ["A) Dans votre voiture", "B) Au point de rassemblement désigné", "C) À la cafétéria"], r: "B" }
        ]
    },
    "Corde & Sauvetage": {
        cours: "Les travaux d'accès par corde nécessitent une technique extrême. Le cordiste doit toujours être connecté à deux systèmes de cordes indépendants : travail et sécurité.",
        questions: [
            { q: "Quelle est la règle d'or concernant le nombre de cordes lors d'un accès difficile ?", o: ["A) Une seule corde suffit", "B) Toujours deux cordes indépendantes (travail et sécurité)", "C) Trois cordes obligatoirement"], r: "B" },
            { q: "Comment appelle-t-on le nœud le plus utilisé et le plus sûr pour s'amarrer ?", o: ["A) Le nœud de huit", "B) Le nœud de cravate", "C) Le nœud simple"], r: "A" }
        ]
    },
    "Assemblage au Mât": {
        cours: "L'assemblage de structures sur pylônes ou mâts présente des risques de chutes d'objets. Le balisage d'une zone d'exclusion au sol est obligatoire sous le mât.",
        questions: [
            { q: "Quel est le risque majeur spécifique lors du montage d'un mât en sections ?", o: ["A) Le bruit du vent", "B) L'effondrement de la structure ou la chute d'éléments lourds", "C) La surchauffe"], r: "B" },
            { q: "Quelle mesure de sécurité est obligatoire au sol au droit d'un mât ?", o: ["A) Installer une bâche", "B) Mettre en place une zone d'exclusion balisée", "C) Garer les véhicules"], r: "B" }
        ]
    },
    "Élingage": {
        cours: "L'élingage consiste à lier une charge à un appareil de levage. Inspectez le matériel avant chaque utilisation : refuser toute élingue coupée ou sans étiquette de charge (CMU).",
        questions: [
            { q: "Que signifie le sigle CMU inscrit sur une élingue ?", o: ["A) Charge Maximale Utile (le poids maximum)", "B) Contrôle Mécanique Unique", "C) Capacité de Manutention"], r: "A" },
            { q: "Quelle est l'obligation principale concernant l'étiquette d'une élingue ?", o: ["A) Couleur verte", "B) Elle doit être présente, lisible et indiquer la CMU", "C) Retirée avant le levage"], r: "B" }
        ]
    },
    "Conduite Défensive": {
        cours: "La conduite défensive est une attitude de sécurité au volant visant à anticiper les situations dangereuses. Respectez la règle des 2 secondes d'écart avec le véhicule qui précède.",
        questions: [
            { q: "Qu'est-ce que la conduite défensive ?", o: ["A) Conduire de manière agressive", "B) Anticiper les dangers et les erreurs des autres pour éviter l'accident", "C) Rouler le plus vite possible"], r: "B" },
            { q: "Quelle est la distance de sécurité minimale (en temps) à maintenir par temps sec ?", o: ["A) 0,5 seconde", "B) 2 secondes", "C) 5 secondes"], r: "B" },
            { q: "Comment doit évoluer la distance de sécurité si la chaussée est mouillée ?", o: ["A) Reste identique", "B) Doublée (passer à 4 secondes minimum)", "C) Réduite"], r: "B" },
            { q: "L'utilisation du téléphone au volant (tenu en main) multiplie le risque d'accident par :", o: ["A) 1,5", "B) 3", "C) 10"], r: "B" }
        ]
    },
    "Opérateur de Machines": {
        cours: "L'utilisation de machines industrielles présente des risques d'accidents graves. Les carters de protection et les boutons d'arrêt d'urgence ne doivent jamais être retirés.",
        questions: [
            { q: "Quel est le risque principal lors de l'utilisation d'une machine avec des pièces en rotation ?", o: ["A) Risque de poussière", "B) Risque d'entraînement, de happement ou de sectionnement", "C) Surchauffe"], r: "B" },
            { q: "Peut-on retirer un carter de protection pour travailler plus vite ?", o: ["A) Oui", "B) Non, il est strictement interdit de neutraliser un dispositif de sécurité", "C) Si le chef est d'accord"], r: "B" }
        ]
    }
};
// =========================================================================
// QUIZ.JS - PARTIE 2 : MOTEUR DE L'APPLICATION, GESTION BDD ET EXPORT PDF
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

// INITIALISATION DE LA BASE DE DONNÉES LOCALES INDEXEDDB
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
    if (!db) return;
    const tx = db.transaction("scores", "readonly");
    const store = tx.objectStore("scores");
    const req = store.getAll();
    
    req.onsuccess = function() {
        const tousLesScores = req.result.filter(s => s.etudiant === etudiantActuel);
        const container = document.getElementById('liste-modules-container');
        container.innerHTML = "";
        
        TOUS_LES_MODULES.forEach((nomMod) => {
            // On cherche le meilleur score pour ce module précis
            const scoresModule = tousLesScores.filter(s => s.module === nomMod);
            let scoreTexte = "Non démarré";
            if (scoresModule.length > 0) {
                const maxScore = Math.max(...scoresModule.map(s => s.score));
                const totalQ = BDD_FORMATION[nomMod].questions.length;
                scoreTexte = `${maxScore} / ${totalQ}`;
            }
            
            const btn = document.createElement('button');
            btn.className = "module-btn";
            btn.onclick = () => ouvrirCoursTechnique(nomMod);
            btn.innerHTML = `<span>📚 ${nomMod}</span> <span class="badge-score">${scoreTexte}</span>`;
            container.appendChild(btn);
        });

        const tbody = document.getElementById('historique-bdd-corps');
        tbody.innerHTML = "";
        tousLesScores.forEach(s => {
            const totalQ = BDD_FORMATION[s.module] ? BDD_FORMATION[s.module].questions.length : 20;
            tbody.innerHTML += `<tr><td>${s.module}</td><td>${s.score}/${totalQ}</td><td>${s.pourcentage}%</td></tr>`;
        });
    };
}

function ouvrirCoursTechnique(nomModule) {
    moduleEnCours = nomModule;
    document.getElementById('ecran-modules').style.display = 'none';
    document.getElementById('cours-titre').innerText = nomModule;
    document.getElementById('cours-contenu').innerText = BDD_FORMATION[nomModule].cours;
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
    
    // CORRECTION CRUCIALE : Sélection stricte des questions du module en cours
    const listeQuestions = BDD_FORMATION[moduleEnCours].questions;
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
    const totalQ = BDD_FORMATION[moduleEnCours].questions.length;
    
    if (indexQuestionActuelle < totalQ) {
        afficherQuestionFiche();
    } else {
        sauvegarderFinModuleBDD();
    }
}

function sauvegarderFinModuleBDD() {
    document.getElementById('ecran-quiz').style.display = 'none';
    const totalQ = BDD_FORMATION[moduleEnCours].questions.length;
    const pct = Math.round((scoreInteractif / totalQ) * 100);
    
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
        const btnPdf = document.getElementById('btn-telecharger-pdf');
        
        // Seuil de réussite à 75%
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
    };
}

// CORRECTION DÉFINITIVE ET SÉCURISÉE DU BOUTON PDF (MOTEUR DOUBLE COMPATIBILITÉ)
function genererAttestationPDF() {
    try {
        // Tentative 1 : Utilisation de la bibliothèque jsPDF
        if (window.jspdf && window.jspdf.jsPDF) {
            const doc = new window.jspdf.jsPDF({ orientation: "landscape" });

            doc.setDrawColor(16, 185, 129); doc.setLineWidth(4); doc.rect(10, 10, 277, 190);
            doc.setDrawColor(59, 130, 246); doc.setLineWidth(1); doc.rect(14, 14, 269, 182);

            doc.setFont("Helvetica", "bold"); doc.setFontSize(28); doc.setTextColor(30, 41, 59);
            doc.text("ATTESTATION DE RÉUSSITE HSE", 148, 45, { align: "center" });

            doc.setFont("Helvetica", "normal"); doc.setFontSize(16); doc.setTextColor(100, 116, 139);
            doc.text("Le centre de formation certifie que l'apprenant :", 148, 70, { align: "center" });

            doc.setFont("Helvetica", "bold"); doc.setFontSize(24); doc.setTextColor(16, 185, 129);
            doc.text(etudiantActuel.toUpperCase(), 148, 90, { align: "center" });

            doc.setFont("Helvetica", "normal"); doc.setFontSize(14); doc.setTextColor(51, 65, 85);
            doc.text(`A validé avec succès les compétences professionnelles liées au module :`, 148, 115, { align: "center" });
            doc.setFont("Helvetica", "bold"); doc.setFontSize(16); doc.text(`"${moduleEnCours}"`, 148, 128, { align: "center" });

            const totalQ = BDD_FORMATION[moduleEnCours].questions.length;
            const pct = Math.round((scoreInteractif / totalQ) * 100);
            doc.text(`Note obtenue : ${scoreInteractif} / ${totalQ}  (${pct}% de bonnes réponses)`, 148, 145, { align: "center" });

            doc.setFontSize(11); doc.setTextColor(148, 163, 184);
            doc.text(`Fait le ${new Date().toLocaleDateString()} - Document officiel encodé et vérifié en BDD locale`, 148, 175, { align: "center" });

            doc.save(`Attestation_HSE_${etudiantActuel.replace(/ /g, "_")}.pdf`);
            return;
        }
    } catch (e) {
        console.log("Moteur principal indisponible, bascule sur le moteur de secours...");
    }

    // Tentative 2 : Moteur de secours universel (Ouvre une fenêtre d'impression PDF native et propre)
    const fenetreImpression = window.open('', '_blank');
    fenetreImpression.document.write(`
        <html>
        <head>
            <title>Attestation HSE - ${etudiantActuel}</title>
            <style>
                body { font-family: 'Helvetica', sans-serif; display: flex; justify-content: center; align-items: center; height: 90vh; margin: 0; background-color: #fff; }
                .cadre { border: 10px double #10b981; padding: 50px; text-align: center; width: 800px; max-width: 90%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
                h1 { color: #1e293b; font-size: 32px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
                .sous-titre { color: #64748b; font-size: 18px; margin-bottom: 30px; }
                .nom { color: #10b981; font-size: 28px; font-weight: bold; margin-bottom: 30px; text-decoration: underline; }
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
                    Note globale enregistrée en BDD : <strong>${scoreInteractif} / ${BDD_FORMATION[moduleEnCours].questions.length}</strong>
                </div>
                <div class="date">Fait le ${new Date().toLocaleDateString()} - Document officiel certifié conforme</div>
            </div>
            <script>
                window.onload = function() { window.print(); window.close(); }
            <\/script>
        </body>
        </html>
    `);
    fenetreImpression.document.close();
}
