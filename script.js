document.addEventListener('DOMContentLoaded', () => {
    console.log('Le script JS est correctement chargé !');
    alert('Bienvenue sur HSE Plateforme !');
});
const modules = [
    { id: "hauteur", name: "Travaux en Hauteur", icon: "🏗️" },
    { id: "electricite", name: "Habilitation Électrique", icon: "⚡" },
    { id: "incendie", name: "Lutte contre l'Incendie", icon: "🧯" },
    { id: "sauvetage", name: "Corde & Sauvetage", icon: "🧗" },
    { id: "mat", name: "Assemblage au Mât", icon: "🔧" },
    { id: "elingage", name: "Élingage", icon: "🪝" },
    { id: "conduite", name: "Conduite Défensive", icon: "🚗" },
    { id: "machines", name: "Opérateur de Machines", icon: "⚙️" }
];

const coursParModule = {
    "hauteur": "<h4>1. Règle des 2m</h4><p>Le harnais est obligatoire dès 2m de hauteur sans protection collective.</p><h4>2. Les Équipements</h4><p>La longe avec absorbeur de choc limite l'impact sur le corps à moins de 6 kN.</p>",
    "elingage": "<h4>1. La CMU</h4><p>La Charge Maximale d'Utilisation est gravée sur la plaque. Interdit de la dépasser.</p><h4>2. Les Angles</h4><p>Plus l'angle des brins est ouvert à l'horizontale, plus la tension augmente.</p>"
};

const questionsSources = {
    "hauteur": [
        { q: "À partir de quelle hauteur le harnais est-il obligatoire ?", o: ["1 mètre", "2 mètres", "5 mètres"], r: 1 },
        { q: "Que vérifie-t-on sur un absorbeur d'énergie ?", o: ["La couleur", "L'absence de déchirure", "La marque"], r: 1 },
        { q: "Quel élément relie le harnais à l'ancrage ?", o: ["La longe", "La sangle", "La boucle"], r: 0 }
    ],
    "elingage": [
        { q: "Que vérifie-t-on en priorité sur une élingue ?", o: ["La date", "La Charge Maximale (CMU)", "Le fabricant"], r: 1 },
        { q: "Quel angle engendre la plus forte tension ?", o: ["Angle horizontal", "Angle vertical", "Aucun impact"], r: 0 },
        { q: "Peut-on circuler sous une charge suspendue ?", o: ["Oui avec casque", "Si elle est stable", "Jamais (Interdit)"], r: 2 }
    ]
};

const questionsParModule = {};
modules.forEach(mod => {
    const src = questionsSources[mod.id] || [{ q: `Règle de sécurité pour ${mod.name} ?`, o: ["Éliminer le danger", "Courir", "Attendre"], r: 0 }];
    let liste = [];
    for (let i = 0; i < 20; i++) {
        let qBase = src[i % src.length];
        liste.push({ q: `[Q${i + 1}] ${qBase.q}`, o: qBase.o, r: qBase.r });
    }
    questionsParModule[mod.id] = liste;
});

let idxQ = 0, reponses = [], modSelect = null, listQ = [], etudiant = { nom: "", email: "" }, payes = {};

function changerPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function validerConnexion(event) {
    if (event) event.preventDefault();
    etudiant.nom = document.getElementById('studentName').value.trim();
    etudiant.email = document.getElementById('studentEmail').value.trim();
    document.getElementById('userWelcome').innerText = `👋 Bonjour, ${etudiant.nom}`;
    chargerModules();
    changerPage('homePage');
}

function chargerModules() {
    const container = document.getElementById('modulesContainer');
    container.innerHTML = "";
    modules.forEach(mod => {
        const btn = document.createElement('button');
        const ok = payes[mod.id] || false;
        btn.className = "btn-mod";
        btn.style.background = ok ? "#007bff" : "#64748b";
        btn.onclick = () => clicModule(mod);
        btn.innerHTML = `<span>${ok ? mod.icon : "🔒"} ${mod.name}</span><span>${ok ? "Acheté" : "20K"}</span>`;
        container.appendChild(btn);
    });
}

function clicModule(mod) {
    modSelect = mod;
    if (payes[mod.id]) {
        ouvrirCours(mod);
    } else {
        const code = prompt(`Débloquer le module "${mod.name}" (20 000 FCFA)\nFaites le dépôt au +225 07 XX XX XX XX puis entrez le code secret reçu : \n(Code test: HSE2026)`);
        if (code === "HSE2026") {
            payes[mod.id] = true;
            alert("Module débloqué !");
            chargerModules();
            ouvrirCours(mod);
        } else if (code !== null) {
            alert("Code invalide.");
        }
    }
}

function ouvrirCours(mod) {
    document.getElementById('courseTitle').innerText = mod.name;
    document.getElementById('courseContent').innerHTML = coursParModule[mod.id] || "<h4>Cours bientôt disponible</h4><p>Le support de formation est en cours d'écriture.</p>";
    changerPage('coursePage');
}

function lancerTest() {
    listQ = questionsParModule[modSelect.id] || [];
    idxQ = 0; reponses = [];
    afficherQuestion();
    changerPage('quizPage');
}

function afficherQuestion() {
    const data = listQ[idxQ];
    document.getElementById('quizProgress').innerText = `Question ${idxQ + 1} / ${listQ.length}`;
    document.getElementById('questionText').innerText = data.q;
    const container = document.getElementById('optionsContainer');
    container.innerHTML = "";
    data.o.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "btn-opt";
        btn.innerText = opt;
        btn.onclick = () => {
            reponses[idxQ] = idx;
            if (idxQ < listQ.length - 1) { idxQ++; afficherQuestion(); } else { bilan(); }
        };
        container.appendChild(btn);
    });
}

function bilan() {
    let note = 0;
    listQ.forEach((q, i) => { if (reponses[i] === q.r) note++; });
    const gagne = note >= 10;
    document.getElementById('scoreDisplay').innerHTML = `Note : <strong>${note}/${listQ.length}</strong><br><br>${gagne ? "🎉 Félicitations, vous avez validé !" : "❌ Échec, révisez le cours et réessayez."}`;
    changerPage('resultPage');
}
