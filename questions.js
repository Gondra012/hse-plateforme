const modules = [
    { id: 1, name: "Travaux en Hauteur", icon: "🏗️" },
    { id: 2, name: "Habilitation Électrique", icon: "⚡" },
    { id: 3, name: "Lutte contre l'Incendie", icon: "🧯" },
    { id: 4, name: "Corde & Sauvetage", icon: "🧗" },
    { id: 5, name: "Assemblage au Mât", icon: "🔧" },
    { id: 6, name: "Élingage", icon: "🪝" },
    { id: 7, name: "Conduite Défensive", icon: "🚗" },
    { id: 8, name: "Opérateur de Machines", icon: "⚙️" }
];

const questionsDB = [
    { q: "À partir de quelle hauteur le port du harnais est-il obligatoire en l'absence de protection collective ?", o: ["1 mètre", "2 mètres", "5 mètres"], r: 1 },
    { q: "Que devez-vous vérifier en priorité sur un absorbeur d'énergie avant utilisation ?", o: ["Sa couleur", "Sa date de validité et l'absence de déchirure", "Sa marque de fabrication"], r: 1 },
    { q: "Quelle est la fonction principale d'un point d'ancrage en sauvetage ?", o: ["Reposer le matériel", "Supporter en toute sécurité le poids du sauveteur et de la victime", "Faciliter la communication"], r: 1 },
    { q: "Quelle est la première action à mener avant d'intervenir sur un circuit électrique ?", o: ["Mettre des gants en cuir", "Effectuer une consignation (mise hors tension)", "Appeler un collègue"], r: 1 },
    { q: "Quel extincteur devez-vous utiliser sur un feu d'origine électrique ?", o: ["Extincteur à Eau pulvérisée", "Extincteur au Dioxyde de Carbone (CO2)", "Extincteur à Mousse"], r: 1 },
    { q: "Que signifie le concept du triangle du feu ?", o: ["Les trois types d'extincteurs", "L'association du Combustible, du Comburant et de l'Énergie", "Les trois niveaux d'alerte"], r: 1 },
    { q: "Face à une fumée épaisse dans un couloir, comment devez-vous évacuer ?", o: ["En courant le plus vite possible", "En restant près du sol où l'air est moins toxique", "En marchant les mains sur les yeux"], r: 1 },
    { q: "Lors du montage d'un mât, quelle est la règle d'or concernant le boulonnage ?", o: ["Serrer uniquement à la main", "Respecter le couple de serrage préconisé par le constructeur", "Attendre la fin du chantier"], r: 1 },
    { q: "Quel EPI est indispensable lors de l'assemblage de structures métalliques en hauteur ?", o: ["Des lunettes de soleil", "Un casque avec jugulaire et gants anti-coupure", "Des bottes en caoutchouc"], r: 1 },
    { q: "Que devez-vous vérifier sur la plaque d'une élingue avant de soulever une charge ?", o: ["La date d'achat", "La Charge Maximale d'Utilisation (CMU)", "Le pays de fabrication"], r: 1 },
    { q: "Quel angle d'élingage engendre le plus de tension mécanique dans les brins ?", o: ["Un angle très fermé (vertical)", "Un angle très ouvert (proche de l'horizontale)", "L'angle n'influence pas la tension"], r: 1 },
    { q: "Est-il autorisé de se tenir ou de circuler sous une charge suspendue ?", o: ["Oui, avec un casque renforcé", "Jamais, c'est une zone d'exclusion stricte", "Seulement pendant quelques secondes"], r: 1 },
    { q: "Qu'est-ce que la conduite défensive sur la route ?", o: ["Conduire lentement à gauche", "Anticiper les dangers potentiels et les erreurs des autres", "Utiliser le klaxon constamment"], r: 1 },
    { q: "Comment évolue la distance de freinage globale sur une route mouillée ?", o: ["Elle reste identique", "Elle est multipliée par deux", "Elle diminue par glisse"], r: 1 },
    { q: "Quelle est la règle principale concernant la distance de sécurité avec le véhicule de devant ?", o: ["Laisser l'espace d'une voiture", "Respecter la règle des 2 secondes", "Se fier à ses réflexes"], r: 1 },
    { q: "Que devez-vous faire si un carter de protection est manquant sur une machine ?", o: ["L'utiliser en faisant attention", "Consigner la machine et signaler le défaut immédiatement", "Remplacer par un carton"], r: 1 },
    { q: "À quoi sert le bouton d'arrêt d'urgence de type 'coup de poing' ?", o: ["À éteindre la machine le soir", "À stopper instantanément les fonctions dangereuses", "À réinitialiser le système"], r: 1 },
    { q: "Quel comportement adopter avant de nettoyer ou régler une machine outil ?", o: ["Réduire la vitesse au minimum", "S'assurer de l'arrêt complet et du cadenassage énergétique", "Demander à un ami de surveiller"], r: 1 },
    { q: "Que signifie précisément l'acronyme sécurité 'EPI' ?", o: ["Équipement de Protection Individuelle", "Évaluation des Risques Interne", "Entreprise Protectrice"], r: 0 },
    { q: "Quelle est la toute première étape de la démarche de prévention des risques ?", o: ["Distribuer des gants", "Éviter ou éliminer le danger à la source", "Rédiger un rapport"], r: 1 }
];
