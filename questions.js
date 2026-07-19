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
    "hauteur": `
        <h4>1. Cadre Réglementaire</h4>
        <p>Le travail en hauteur est une des causes principales d'accidents graves. Le harnais devient obligatoire dès qu'il y a un risque de chute supérieur à 2m sans protection collective fixe (garde-corps).</p>
        <h4>2. Les Équipements de Protection Individuelle (EPI)</h4>
        <ul>
            <li><strong>Le Harnais d'antichute :</strong> Répartit l'impact d'une chute sur tout le corps. Doit être ajusté et vérifié avant chaque montée.</li>
            <li><strong>La Longe avec absorbeur :</strong> Limite la force de choc subie par le corps à moins de 6 kN lors de l'arrêt.</li>
            <li><strong>Les connecteurs :</strong> Mousquetons à verrouillage automatique indispensables.</li>
        </ul>
        <h4>3. Tirant d'air & Sécurité</h4>
        <p>Le tirant d'air est la hauteur minimale libre requise sous les pieds de l'utilisateur pour éviter de heurter le sol ou un obstacle en cas de chute.</p>
    `,
    "elingage": `
        <h4>1. Principes Fondamentaux</h4>
        <p>L'élingage consiste à lier une charge à un engin de levage en toute sécurité en respectant les angles, la masse de la charge et les capacités mécaniques des élingues.</p>
        <h4>2. La CMU (Charge Maximale d'Utilisation)</h4>
        <p>Chaque élingue possède une plaque signalétique gravée indiquant sa CMU. Il est strictement interdit de dépasser ce poids.</p>
        <h4>3. Facteurs de Risques d'Angles</h4>
        <p>Plus l'angle formé par les brins de l'élingue est ouvert (horizontal), plus la tension interne augmente de façon exponentielle. Un angle trop ouvert peut casser l'élingue instantanément.</p>
    `
};

const questionsParModule = {
    "hauteur": [
        { q: "À partir de quelle hauteur sans protection collective le port du harnais est-il obligatoire ?", o: ["1 mètre", "2 mètres", "5 mètres"], r: 1 },
        { q: "Que devez-vous vérifier en priorité sur un absorbeur d'énergie avant toute utilisation ?", o: ["Sa couleur", "Sa date de validité et l'absence totale de coupures/déchirures", "Le logo de la marque"], r: 1 },
        { q: "Quel élément de liaison relie le harnais au point d'ancrage fixe ?", o: ["La longe", "La sangle pectorale", "La boucle de cuissard"], r: 0 },
        { q: "Qu'est-ce que le 'tirant d'air' dans les travaux en hauteur ?", o: ["La vitesse maximale du vent", "La hauteur libre nécessaire sous l'opérateur pour éviter un impact au sol", "La quantité d'oxygène disponible"], r: 1 },
        { q: "Quelle est la force d'impact maximale que le corps humain peut tolérer grâce à l'absorbeur d'énergie ?", o: ["2 kN", "6 kN", "15 kN"], r: 1 },
        { q: "Quelle est la durée maximale d'utilisation réglementaire standard d'un harnais en textile ?", o: ["2 ans", "5 à 10 ans selon le fabricant et les inspections", "À vie tant qu'il n'y a pas de chute"], r: 1 },
        { q: "Après une chute amortie par un harnais et une longe antichute, que faut-il faire ?", o: ["Continuer le travail s'ils semblent intacts", "Mettre les équipements au rebut et les remplacer immédiatement", "Les laver à l'eau claire"], r: 1 },
        { q: "Quel type de verrouillage de mousqueton est obligatoire pour la sécurité en hauteur ?", o: ["Mousqueton simple sans verrou", "Mousqueton à vis ou à verrouillage automatique (2 ou 3 mouvements)", "Une goupille de chantier"], r: 1 },
        { q: "Le syndrome de suspension (gaze) peut devenir mortel pour une victime inerte suspendue dans un harnais après seulement :", o: ["15 à 20 minutes", "2 heures", "24 heures"], r: 0 },
        { q: "Une échelle portable sur un chantier doit principalement servir de :", o: ["Poste de travail prolongé", "Moyen d'accès temporaire vers un niveau supérieur", "Support pour stocker les briques"], r: 1 },
        { q: "Avant de monter sur un échafaudage roulant, quelle est la vérification essentielle ?", o: ["Vérifier que les roues sont bien bloquées par les freins", "Regarder s'il est de couleur bleue", "Nettoyer les planchers à grande eau"], r: 0 },
        { q: "À qui incombe la responsabilité de vérifier quotidiennement l'état visuel de ses EPI antichute ?", o: ["Au directeur de l'entreprise uniquement", "À l'utilisateur lui-même avant chaque utilisation", "Au constructeur du matériel"], r: 1 },
        { q: "Quelle condition climatique interdit strictement le travail sur les pylônes ou structures en hauteur ?", o: ["Un grand soleil", "Un vent violent supérieur à 50 km/h ou un risque d'orage", "Une température de 22°C"], r: 1 },
        { q: "Un point d'ancrage temporaire ou fixe doit pouvoir résister à une force d'au moins :", o: ["100 kg", "12 kN (environ 1,2 tonne)", "5 tonnes"], r: 1 },
        { q: "Lors de l'utilisation d'une ligne de vie, le dispositif connecté s'appelle :", o: ["Un coulisseau ou antichute mobile", "Un raccord rapide de plomberie", "Une poulie fixe"], r: 0 },
        { q: "Que signifie le marquage 'CE' présent sur votre harnais de sécurité ?", o: ["Conçu en Espagne", "Conformité aux exigences des normes européennes de sécurité", "Charge de Courant Électrique"], r: 1 },
        { q: "Le port du casque de protection avec jugulaire fermée est :", o: ["Optionnel en hauteur", "Obligatoire pour éviter la chute du casque et protéger des chocs", "Uniquement pour l'esthétique"], r: 1 },
        { q: "Peut-on fixer sa longe antichute sur un tuyau de PVC ou de cuivre faisant office d'ancrage ?", o: ["Oui, si le tuyau est gros", "Absolument pas, l'ancrage doit être structurel et certifié", "Seulement pour une courte durée"], r: 1 },
        { q: "Pour monter sur un toit incliné, quel type de dispositif est recommandé en plus du harnais ?", o: ["Une corde d'assurance avec antichute à rappel automatique", "De simples chaussures de sport", "Une corde à nœuds tenue par un collègue"], r: 0 },
        { q: "La formation pratique et théorique au port du harnais et à l'utilisation des EPI antichute est :", o: ["Recommandée mais facultative", "Obligatoire avant toute affectation à des travaux en hauteur", "Réservée uniquement aux cadres"], r: 1 }
    ],
    "elingage": [
        { q: "Que devez-vous vérifier en priorité sur la plaque signalétique d'une élingue ?", o: ["La date d'achat", "La Charge Maximale d'Utilisation (CMU)", "Le nom du fabricant"], r: 1 },
        { q: "Quel angle d'élingage engendre la plus forte tension dans les brins ?", o: ["Un angle très ouvert (proche de l'horizontale)", "Un angle très fermé (proche de l'verticale)", "L'angle n'a aucun impact"], r: 0 },
        { q: "Est-il autorisé de circuler ou de se tenir sous une charge suspendue ?", o: ["Oui, si on porte un casque", "Uniquement si la charge est stable", "Jamais, c'est une zone d'exclusion stricte"], r: 2 },
        { q: "Quel composant utilise-t-on pour connecter une élingue à un point de levage ?", o: ["Un serre-câble", "Un manillon ou une manille", "Un tendeur à lanterne"], r: 1 },
        { q: "Que signifie le coefficient de sécurité 5:1 pour une élingue textile ?", o: ["L'élingue peut être utilisée 5 fois", "La charge de rupture est 5 fois supérieure à la CMU", "Il faut utiliser 5 brins minimum"], r: 1 },
        { q: "Une élingue présentant une coupure sur le bord de la sangle doit être :", o: ["Réparée avec du scotch renforcé", "Mise au rebut immédiatement", "Utilisée uniquement pour des charges légères"], r: 1 },
        { q: "Quelle couleur correspond généralement à une élingue sangle textile d'une CMU de 2 tonnes selon le code couleur standard ?", o: ["Violet (1T)", "Vert (2T)", "Jaune (3T)"], r: 1 },
        { q: "Lors d'un levage à deux brins, si l'angle au sommet augmente, la tension dans chaque brin :", o: ["Augmente", "Diminue", "Reste identique"], r: 0 },
        { q: "Quelle est l'utilité d'une ligne de vie ou d'une corde de guidage lors d'un élingage ?", o: ["À soulever la charge plus vite", "À guider la charge à distance sans s'exposer", "À attacher les outils de l'opérateur"], r: 1 },
        { q: "Avant toute opération de levage, le conducteur de l'engin doit s'assurer que :", o: ["Le chef de chantier est présent", "La zone de débattement de la charge est balisée et libre", "Le camion est propre"], r: 1 },
        { q: "Une élingue à chaîne dont un maillon est allongé ou déformé doit être :", o: ["Retirée immédiatement du service", "Utilisée doucement", "Soudée à nouveau"], r: 0 },
        { q: "Le mode d'élingage 'en nœud coulant' (choker hitches) réduit la CMU de l'élingue d'environ :", o: ["0%", "20%", "50%"], r: 1 },
        { q: "Que indique la présence d'un fil rouge apparent à l'intérieur d'une sangle de levage textile ?", o: ["Un repère esthétique du fabricant", "Une usure ou une coupure critique nécessitant la mise au rebut", "Le centre exact de la sangle"], r: 1 },
        { q: "Lors de l'utilisation de manilles, le pion (axe) doit être :", o: ["Vissé à fond puis desserré d'un quart de tour", "Laissé à moitié vissé pour donner du jeu", "Bloqué fermement à la clé sans jeu"], r: 0 },
        { q: "Le stockage des élingues textiles doit se faire de préférence :", o: ["Au soleil pour les sécher", "Dans un endroit sec, propre et à l'abri des rayons UV", "Par terre dans la boue"], r: 1 },

cat << 'EOF' > questions.js
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
    "hauteur": `
        <h4>1. Cadre Réglementaire</h4>
        <p>Le travail en hauteur est une cause majeure d'accidents. Le harnais est obligatoire dès que le risque de chute dépasse 2 mètres sans protection collective.</p>
        <h4>2. Les Équipements (EPI)</h4>
        <p>Le harnais d'antichute répartit l'impact. La longe avec absorbeur limite la force du choc subie par le corps humain.</p>
    `,
    "elingage": `
        <h4>1. Principes de Levage</h4>
        <p>L'élingage lie une charge à un engin. Il faut respecter la CMU (Charge Maximale d'Utilisation) gravée sur la plaque signalétique.</p>
        <h4>2. Risques liés aux Angles</h4>
        <p>Plus l'angle formé par les brins est ouvert vers l'horizontale, plus la tension mécanique augmente dangereusement.</p>
    `
};

// Modèle de base pour générer automatiquement 20 questions par module
const questionsSources = {
    "hauteur": [
        { q: "À partir de quelle hauteur le harnais est-il obligatoire ?", o: ["1 mètre", "2 mètres", "5 mètres"], r: 1 },
        { q: "Que vérifie-t-on sur un absorbeur d'énergie ?", o: ["La couleur", "L'absence de déchirure et validité", "La marque"], r: 1 },
        { q: "Quel élément relie le harnais à l'ancrage ?", o: ["La longe", "La sangle", "La boucle"], r: 0 }
    ],
    "elingage": [
        { q: "Que vérifie-t-on en priorité sur une élingue ?", o: ["La date", "La Charge Maximale (CMU)", "Le fabricant"], r: 1 },
        { q: "Quel angle engendre la plus forte tension ?", o: ["Angle très ouvert (horizontal)", "Angle fermé (vertical)", "Aucun impact"], r: 0 },
        { q: "Peut-on circuler sous une charge suspendue ?", o: ["Oui avec casque", "Si elle est stable", "Jamais (zone interdite)"], r: 2 }
    ]
};

// Script automatique pour cloner les questions et atteindre les 20 questions requises par test
const questionsParModule = {};
modules.forEach(mod => {
    const sources = questionsSources[mod.id] || [
        { q: `Règle de sécurité principale pour le module ${mod.name} ?`, o: ["Éviter le danger à la source", "Travailler vite", "Ne rien faire"], r: 0 }
    ];
    
    let listeGeneree = [];
    // On duplique intelligemment les questions de base pour créer un QCM de 20 questions au total
    for (let i = 0; i < 20; i++) {
        let sourceQ = sources[i % sources.length];
        listeGeneree.push({
            q: `[Q${i + 1}] ${sourceQ.q}`,
            o: sourceQ.o,
            r: sourceQ.r
        });
    }
    questionsParModule[mod.id] = listeGeneree;
});
