let idxQ = 0, reponses = [], modSelect = null, listQ = [], etudiant = { nom: "", email: "" }, payes = {};

function changerPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function validerConnexion(e) {
    e.preventDefault();
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
