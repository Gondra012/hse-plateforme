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

const questionsParModule = {
    "hauteur": [
        { q: "À partir de quelle hauteur le port du harnais est-il obligatoire en l'absence de protection collective ?", o: ["1 mètre", "2 mètres", "5 mètres"], r: 1 },
        { q: "Que devez-vous vérifier en priorité sur un absorbeur d'énergie avant utilisation ?", o: ["Sa couleur", "Sa date de validité et l'absence de déchirure", "Sa marque"], r: 1 },
        { q: "Quel est l'élément de liaison reliant le harnais au point d'ancrage ?", o: ["La longe", "La sangle pectorale", "Le mousqueton de confort"], r: 0 }
    ],
    "electricite": [
        { q: "Quelle est la première action à mener avant d'intervenir sur un circuit électrique ?", o: ["Mettre des gants en cuir", "Effectuer une consignation (mise hors tension)", "Appeler un collègue"], r: 1 },
        { q: "Quel outil utilise-t-on pour vérifier l'absence réelle de tension électrique ?", o: ["Un tournevis testeur de base", "Un VAT (Vérificateur d'Absence de Tension)", "Un ampèremètre"], r: 1 }
    ],
    "incendie": [
        { q: "Quel extincteur devez-vous utiliser en priorité sur un feu d'origine électrique ?", o: ["Extincteur à Eau pulvérisée", "Extincteur au Dioxyde de Carbone (CO2)", "Extincteur à Mousse"], r: 1 },
        { q: "Que signifie précisément le concept du 'triangle du feu' ?", o: ["Les 3 types d'extincteurs", "L'association du Combustible, du Comburant et de l'Énergie", "Les alarmes"], r: 1 }
    ],
    "sauvetage": [
        { q: "Quelle est la fonction principale d'un point d'ancrage en sauvetage ?", o: ["Reposer le matériel lourd", "Supporter en toute sécurité le poids du sauveteur et de la victime", "Décorer"], r: 1 }
    ],
    "mat": [
        { q: "Lors du montage d'un mât, quelle est la règle d'or concernant le boulonnage ?", o: ["Serrer uniquement à la main", "Respecter le couple de serrage préconisé par le constructeur", "Attendre la fin"], r: 1 }
    ],
    "elingage": [
        { q: "Que devez-vous vérifier sur la plaque d'une élingue avant de soulever une charge ?", o: ["La date d'achat", "La Charge Maximale d'Utilisation (CMU)", "Le pays"], r: 1 },
        { q: "Quel angle d'élingage engendre le plus de tension mécanique dangereuse dans les brins ?", o: ["Un angle très fermé (vertical)", "Un angle très ouvert (proche de l'horizontale)", "Aucun"], r: 1 },
        { q: "Est-il autorisé de se tenir ou de circuler sous une charge suspendue ?", o: ["Oui, avec un casque", "Jamais, c'est une zone d'exclusion stricte", "Pendant 5 secondes"], r: 1 }
    ],
    "conduite": [
        { q: "Qu'est-ce que la conduite défensive sur la route ?", o: ["Conduire lentement à gauche", "Anticiper les dangers potentiels et les erreurs des autres", "Klaxonner"], r: 1 },
        { q: "Comment évolue la distance de freinage globale sur une route mouillée ?", o: ["Elle reste identique", "Elle est multipliée par deux", "Elle diminue"], r: 1 }
    ],
    "machines": [
        { q: "Que devez-vous faire si un carter de protection est manquant sur une machine ?", o: ["L'utiliser prudemment", "Consigner la machine et signaler le défaut immédiatement", "Mettre du carton"], r: 1 },
        { q: "À quoi sert le bouton d'arrêt d'urgence de type 'coup de poing' ?", o: ["À éteindre le soir", "À stopper instantanément les fonctions dangereuses", "À redémarrer"], r: 1 }
    ]
};
