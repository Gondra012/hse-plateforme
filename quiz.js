// =========================================================================
// PARTIE 1 : BASE DE DONNÉES COMPLÈTE HSE (MODULES ET QUESTIONS UNIQUES)
// =========================================================================
const BDD_FORMATION = {
    "Travaux en Hauteur": {
        cours: "Le travail en hauteur présente des risques majeurs de chutes. La protection collective (garde-corps, filets) est prioritaire sur la protection individuelle (harnais).\n\nLe harnais doit être inspecté et connecté à un point d'ancrage solide situé au-dessus de la tête.",
        questions: [
            { q: "Quelle est la priorité absolue en matière de protection contre les chutes ?", o: ["A) Le harnais individuel", "B) La protection collective (ex: garde-corps)", "C) Travailler très vite"], r: "B" },
            { q: "Une échelle peut-elle servir de poste de travail régulier ?", o: ["A) Oui, si elle est bien attachée", "B) Non, elle sert uniquement de moyen d'accès", "C) Oui, pour des courtes durées"], r: "B" },
            { q: "Que compose un système antichute individuel de base ?", o: ["A) Un casque et des gants", "B) Un point d'ancrage, une liaison (longe/absorbeur) et un harnais", "C) Une échelle"], r: "B" },
            { q: "Où doit se situer idéalement le point d'ancrage du harnais ?", o: ["A) Au niveau des pieds", "B) Au niveau de la taille", "C) Au-dessus de la tête"], r: "C" },
            { q: "Qu'est-ce que le 'tirant d'air' ?", o: ["A) La force du vent", "B) La hauteur libre minimale nécessaire sous les pieds pour éviter l'impact", "C) L'épaisseur du câble"], r: "B" },
            { q: "À quelle fréquence un harnais doit-il être vérifié par un expert ?", o: ["A) Tous les 5 ans", "B) Au moins une fois par an (12 mois)", "C) Uniquement après une chute"], r: "B" },
            { q: "Que devez-vous faire avant d'utiliser votre harnais antichute ?", o: ["A) Le laver à grande eau", "B) Réaliser une inspection visuelle des coutures et boucles", "C) Demander l'autorisation"], r: "B" },
            { q: "Un garde-corps réglementaire doit comporter :", o: ["A) Juste une barre en haut", "B) Une main courante, une sous-lisse et une plinthe de butée", "C) Une cordelette rouge"], r: "B" },
            { q: "Quelle est l'utilité de la plinthe au bas d'un garde-corps ?", o: ["A) Empêcher la chute d'outils ou d'objets vers le bas", "B) Poser ses pieds pour se reposer", "C) Décorer le chantier"], r: "A" },
            { q: "Si votre harnais a stoppé une vraie chute, que devez-vous en faire ?", o: ["A) Le réutiliser s'il n'est pas déchiré", "B) Le mettre immédiatement au rebut et le remplacer", "C) Le recoudre"], r: "B" },
            { q: "Qu'est-ce qu'un absorbeur d'énergie sur une longe ?", o: ["A) Un système pour monter plus vite", "B) Un dispositif qui se déchire pour réduire la force du choc", "C) Un poids de stabilisation"], r: "B" },
            { q: "Peut-on travailler en hauteur sur un échafaudage pendant un violent orage ?", o: ["A) Oui, avec un imperméable", "B) Non, le travail doit être arrêté immédiatement", "C) Uniquement si l'échafaudage est couvert"], r: "B" },
            { q: "Qui a le droit de monter ou de modifier un échafaudage ?", o: ["A) N'importe quel ouvrier présent", "B) Uniquement une personne formée et explicitement autorisée", "C) Le livreur"], r: "B" },
            { q: "Quel composant du harnais répartit les forces sur le corps lors d'une chute ?", o: ["A) Les sangles (cuissardes et bretelles)", "B) L'anneau dorsal uniquement", "C) Les étiquettes"], r: "A" },
            { q: "Lors de l'utilisation d'une plateforme individuelle roulante (PIRL), faut-il enclencher les stabilisateurs ?", o: ["A) Non", "B) Oui, systématiquement avant de monter dessus", "C) Uniquement si le sol est en pente"], r: "B" },
            { q: "Quelle est la cause principale de dysfonctionnement des mousquetons ?", o: ["A) La couleur de l'acier", "B) La présence de saletés empêchant le verrouillage automatique", "C) La lumière du soleil"], r: "B" },
            { q: "Quelle norme ou marquage obligatoire garantit qu'un EPI est conforme en Europe ?", o: ["A) Le marquage NF unique", "B) Le marquage 'CE'", "C) L'inscription 'Garantie 2 ans'"], r: "B" },
            { q: "Que risquez-vous en restant suspendu trop longtemps inerte dans un harnais après une chute ?", o: ["A) Rien, on est en sécurité", "B) Le syndrome de suspension, un danger mortel pour la circulation", "C) Une simple crampe"], r: "B" },
            { q: "Quelle précaution faut-il prendre pour les outils lors d'un travail sur une nacelle ?", o: ["A) Les laisser en vrac", "B) Les sécuriser avec des lanières porte-outils pour éviter leur chute", "C) Les jeter en bas"], r: "B" },
            { q: "Le plan de prévention pour les travaux en hauteur inclut obligatoirement :", o: ["A) Le menu de la cantine", "B) Une procédure de sauvetage et d'évacuation rapide en cas de chute", "C) La liste des véhicules"], r: "B" }
        ]
    },
    "Habilitation Électrique": {
        cours: "Le courant électrique présente deux risques majeurs : l'électrisation (passage du courant dans le corps) et l'électrocution (mortelle).\n\nAvant toute intervention, il faut réaliser une consignation : Séparer, Verrouiller, VAT, Mettre à la terre.",
        questions: [
            { q: "Quelle est la différence entre électrisation et électrocution ?", o: ["A) L'électrisation est mortelle, pas l'électrocution", "B) L'électrocution entraîne obligatoirement le décès de la victime", "C) C'est la même chose"], r: "B" },
            { q: "Qu'est-ce qu'un indice d'habilitation B1 ?", o: ["A) Un chargé de travaux", "B) Un exécutant électricien en basse tension", "C) Un ingénieur"], r: "B" },
            { q: "Quelle est la première étape d'une consignation électrique ?", o: ["A) Mettre des gants", "B) La séparation (couper l'alimentation électrique générale)", "C) Appeler les pompiers"], r: "B" },
            { q: "Que signifie le sigle VAT en sécurité électrique ?", o: ["A) Vérification de l'Absence de Tension", "B) Voltage Automatique Total", "C) Véhicule d'Assistance Technique"], r: "A" },
            { q: "Peut-on utiliser un multimètre classique pour réaliser une VAT réglementaire ?", o: ["A) Oui, si l'appareil est neuf", "B) Non, il faut utiliser un testeur dédié (détecteur de tension) conforme", "C) Oui, en faisant attention"], r: "B" },
            { q: "Quel symbole graphique sur un outil indique qu'il est isolé pour 1000 Volts ?", o: ["A) Un triangle avec un éclair", "B) Deux triangles superposés avec la mention 1000V", "C) Un cercle rouge"], r: "B" },
            { q: "Que devez-vous faire en premier si vous voyez un collègue collé à un câble électrique ?", o: ["A) Le tirer par le bras", "B) Couper le courant de manière sûre ou utiliser un objet isolant", "C) Jeter de l'eau"], r: "B" },
            { q: "Quelle est la distance minimale de sécurité par rapport à une ligne aérienne haute tension (<50kV) ?", o: ["A) 1 mètre", "B) 3 mètres", "C) 5 mètres"], r: "B" },
            { q: "Un indice d'habilitation commençant par la lettre 'B' concerne :", o: ["A) La Haute Tension (HT)", "B) La Basse Tension (BT) et Très Basse Tension (TBT)", "C) Les travaux en forêt"], r: "B" },
            { q: "Dans un indice d'habilitation, le chiffre '1' (ex: B1) signifie que la personne est :", o: ["A) Chargée de travaux", "B) Exécutant électricien", "C) Chargée de consignation"], r: "B" },
            { q: "Dans un indice d'habilitation, le chiffre '2' (ex: B2) signifie que la personne est :", o: ["A) Chargée de travaux (dirige le chantier)", "B) Simple exécutant", "C) Stagiaire"], r: "A" },
            { q: "Quelle lettre dans l'habilitation désigne une personne effectuant des manœuvres ?", o: ["A) La lettre M", "B) La lettre C", "C) La lettre R"], r: "A" },
            { q: "Quel EPI est indispensable pour ouvrir une armoire électrique sous tension ?", o: ["A) Des gants en cuir", "B) Des gants isolants adaptés et un écran facial anti-court-circuit", "C) Des lunettes de soleil"], r: "B" },
            { q: "Quelle est l'utilité du cadenas de consignation ?", o: ["A) Empêcher le vol", "B) Bloquer mécaniquement l'appareil de coupure pour éviter sa remise en route", "C) Décorer le disjoncteur"], r: "B" },
            { q: "Qu'est-ce qu'un court-circuit ?", o: ["A) Une coupure de courant volontaire", "B) Un contact direct accidentel entre deux conducteurs", "C) Un câble trop court"], r: "B" },
            { q: "Quelle est la tension de sécurité maximale en milieu sec (TS) ?", o: ["A) 12 Volts", "B) 50 Volts", "C) 230 Volts"], r: "B" },
            { q: "Une habilitation électrique est généralement valable pendant combien de temps ?", o: ["A) 6 mois", "B) 3 ans", "C) 10 ans"], r: "B" },
            { q: "Qui doit signer le titre d'habilitation électrique d'un salarié ?", o: ["A) Le formateur", "B) L'employeur (le chef d'entreprise)", "C) Le salarié uniquement"], r: "B" },
            { q: "Le port de bijoux métalliques (montres, bagues) est-il autorisé lors de travaux électriques ?", o: ["A) Oui", "B) Non, ils doivent être retirés car ils sont conducteurs", "C) Uniquement les bagues en or"], r: "B" },
            { q: "Que signifie la mise à la terre d'une installation électrique ?", o: ["A) Cacher les câbles", "B) Évacuer les courants de fuite pour protéger les personnes d'un contact indirect", "C) Éteindre l'installation"], r: "B" }
        ]
    }
};
// =========================================================================
// PARTIE 2 : CONFIGURATION DES MODULES, MOTEUR LOGIQUE ET TÉLÉCHARGEMENT PDF
// =========================================================================

const TOUS_LES_MODULES = [
    "Travaux en Hauteur", "Habilitation Électrique", "Lutte contre l'Incendie", 
    "Corde & Sauvetage", "Assemblage au Mât", "Élingage", "Conduite Défensive", "Opérateur de Machines"
];

// Remplissage automatique des modules restants pour qu'ils possèdent aussi 20 questions
TOUS_LES_MODULES.forEach(mod => {
    if(!BDD_FORMATION[mod]) {
        BDD_FORMATION[mod] = {
            cours: `Formation technique pour le module : ${mod}. Identifiez les dangers potentiels, évaluez les risques professionnels sur votre poste de travail et appliquez scrupuleusement les consignes de sécurité édictées par le responsable HSE de l'entreprise.`,
            questions: [...BDD_FORMATION["Travaux en Hauteur"].questions]
        };
    }
});

let db;
let etudiantActuel = "";
let moduleEnCours = "";
let indexQuestionActuelle = 0;
let scoreInteractif = 0;

// INDEXEDDB : CONNEXION ET CRÉATION DE LA TABLE DE NOTATION
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
    const moduleDonnees = BDD_FORMATION[moduleEnCours];
    const qActuelle = moduleDonnees.questions[indexQuestionActuelle];
    
    document.getElementById('quiz-progression').innerText = `Question ${indexQuestionActuelle + 1} / 20`;
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
    };
}

function genererAttestationPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "landscape" });

    // Cadre double
    doc.setDrawColor(16, 185, 129); doc.setLineWidth(4); doc.rect(10, 10, 277, 190);
    doc.setDrawColor(59, 130, 246); doc.setLineWidth(1); doc.rect(14, 14, 269, 182);

    // Entête du document
    doc.setFont("Helvetica", "bold"); doc.setFontSize(28); doc.setTextColor(30, 41, 59);
    doc.text("ATTESTATION DE RÉUSSITE HSE", 148, 45, { align: "center" });

    doc.setFont("Helvetica", "normal"); doc.setFontSize(16); doc.setTextColor(100, 116, 139);
    doc.text("Le centre de formation certifie que l'apprenant :", 148, 70, { align: "center" });

    // Identité du candidat
    doc.setFont("Helvetica", "bold"); doc.setFontSize(24); doc.setTextColor(16, 185, 129);
    doc.text(etudiantActuel.toUpperCase(), 148, 90, { align: "center" });

    // Texte de validation
    doc.setFont("Helvetica", "normal"); doc.setFontSize(14); doc.setTextColor(51, 65, 85);
    doc.text(`A validé avec succès les compétences professionnelles liées au module :`, 148, 115, { align: "center" });
    doc.setFont("Helvetica", "bold"); doc.setFontSize(16); doc.text(`"${moduleEnCours}"`, 148, 128, { align: "center" });

    // Note finale enregistrée
    doc.setFont("Helvetica", "normal"); doc.setFontSize(14);
    const pct = Math.round((scoreInteractif / 20) * 100);
    doc.text(`Note obtenue : ${scoreInteractif} / 20  (${pct}% de bonnes réponses)`, 148, 145, { align: "center" });

    // Authenticité
    doc.setFontSize(11); doc.setTextColor(148, 163, 184);
    doc.text(`Fait le ${new Date().toLocaleDateString()} - Document officiel encodé et vérifié en BDD locale`, 148, 175, { align: "center" });

    doc.save(`Attestation_HSE_${etudiantActuel.replace(/ /g, "_")}.pdf`);
}
