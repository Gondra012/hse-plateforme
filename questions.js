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
        { q: "Qui a la responsabilité finale de vérifier l'état des élingues avant le levage ?", o: ["Le directeur de l'entreprise", "L'élingueur / l'opérateur effectuant la manœuvre", "Le livreur du matériel"], r: 1 },
        { q: "Qu'est-ce qu'un palonnier ?", o: ["Un appareil de mesure du vent", "Un accessoire de levage permettant de répartir la charge", "Une protection pour les angles vifs"], r: 1 },
        { q: "Face à une charge avec des bords tranchants, que faut-il faire ?", o: ["Utiliser des fourreaux ou protections d'angles", "Soulever très vite", "Doubler le nombre d'élingues sans protection"], r: 0 },
        { q: "Sur un chantier, le signal d'arrêt d'urgence lors d'un levage peut être donné par :", o: ["Uniquement le chef de manœuvre", "Uniquement le conducteur de la grue", "N'importe quelle personne témoin d'un danger"], r: 2 },
        { q: "L'inspection périodique obligatoire des accessoires de levage (élingues, manilles) doit avoir lieu au moins tous les :", o: ["3 mois", "6 mois", "12 mois"], r: 1 }
    ],
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
    "conduite": [
        { q: "Qu'est-ce que la conduite défensive sur la route ?", o: ["Conduire lentement à gauche", "Anticiper les dangers potentiels et les erreurs des autres", "Klaxonner"], r: 1 },
        { q: "Comment évolue la distance de freinage globale sur une route mouillée ?", o: ["Elle reste identique", "Elle est multipliée par deux", "Elle diminue"], r: 1 }
    ],
    "machines": [
        { q: "Que devez-vous faire si un carter de protection est manquant sur une machine ?", o: ["L'utiliser prudemment", "Consigner la machine et signaler le défaut immédiatement", "Mettre du carton"], r: 1 },
        { q: "À quoi sert le bouton d'arrêt d'urgence de type 'coup de poing' ?", o: ["À éteindre le soir", "À stopper instantanément les fonctions dangereuses", "À redémarrer"], r: 1 }
    ]
};
