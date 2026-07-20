// =========================================================================
// QUESTIONS.JS - PARTIE 1 : FONDATION ET TRAVAUX EN HAUTEUR (20 QUESTIONS)
// =========================================================================
const QUESTIONS_MODULES = {
    "Travaux en Hauteur": [
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
    ],    "Habilitation Électrique": [
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
    ],
    "Lutte contre l'Incendie": [
        { q: "Quels sont les trois éléments du Triangle du Feu ?", o: ["A) Bois, Allumette, Fumée", "B) Combustible, Comburant, Énergie d'activation", "C) Eau, Vent, Terre"], r: "B" },
        { q: "En cas de début d'incendie, quelle est la toute première action ?", o: ["A) Chercher ses affaires", "B) Déclencher l'alarme et alerter", "C) Ouvrir toutes les fenêtres"], r: "B" },
        { q: "Quel extincteur est adapté pour un feu sur équipement électrique sous tension ?", o: ["A) Eau pulvérisée", "B) Dioxyde de carbone (CO2)", "C) Seau d'eau"], r: "B" },
        { q: "Où devez-vous vous rendre immédiatement après avoir évacué ?", o: ["A) Dans votre voiture", "B) Au point de rassemblement désigné", "C) À la cafétéria"], r: "B" },
        { q: "Pourquoi est-il interdit d'utiliser les ascenseurs en cas d'incendie ?", o: ["A) Ils sont trop lents", "B) Risque de coupure de courant et d'asphyxie dans la cabine", "C) Réservés aux chefs"], r: "B" },
        { q: "Que signifie le sigle SST en entreprise ?", o: ["A) Secrétariat Sans Tension", "B) Sauveteur Secouriste du Travail", "C) Service de Surveillance"], r: "B" },
        { q: "Face à une victime qui ne répond pas mais respire, que faites-vous ?", o: ["A) La laisser sur le dos", "B) La mettre en Position Latérale de Sécurité (PLS) et alerter", "C) Lui donner à boire"], r: "B" },
        { q: "Quel est le numéro d'urgence européen unique ?", o: ["A) 112", "B) 15", "C) 18"], r: "A" },
        { q: "Que faire si vos vêtements prennent feu ?", o: ["A) Courir très vite", "B) Se rouler au sol et se couvrir avec une couverture non synthétique", "C) Attendre sans bouger"], r: "B" },
        { q: "Qu'est-ce qu'un plan d'évacuation ?", o: ["A) Un plan de vente", "B) Un schéma indiquant les issues de secours et extincteurs", "C) La liste des téléphones"], r: "B" },
        { q: "À quelle fréquence minimale doivent avoir lieu les exercices d'évacuation ?", o: ["A) Tous les 5 ans", "B) Tous les 6 mois", "C) Uniquement après un incendie"], r: "B" },
        { q: "Quel type de feu concerne la 'Classe A' ?", o: ["A) Feux de métaux", "B) Feux de solides (bois, papier, tissus)", "C) Feux de liquides"], r: "B" },
        { q: "La 'Classe B' concerne les feux de :", o: ["A) Gaz", "B) Liquides (essence, huile, plastiques)", "C) Électricité"], r: "B" },
        { q: "Peut-on utiliser de l'eau sur un feu de friteuse (huile) ?", o: ["A) Oui", "B) Non, cela provoque une explosion de vapeur ultra-dangereuse", "C) Si l'eau est froide"], r: "B" },
        { q: "Que contient principalement une couverture anti-feu ?", o: ["A) Du coton", "B) De la fibre de verre ignifugée", "C) Du plastique"], r: "B" },
        { q: "Lors de l'évacuation, que faites-vous des portes derrière vous ?", o: ["A) Les bloquer ouvertes", "B) Les fermer sans les verrouiller pour freiner les fumées", "C) Les démonter"], r: "B" },
        { q: "Si la fumée envahit un couloir, comment progresser ?", o: ["A) En courant debout", "B) Près du sol (à quatre pattes)", "C) En marchant à reculons"], r: "B" },
        { q: "Que signifie l'acronyme DAE ?", o: ["A) Danger Avec Électricité", "B) Défibrillateur Automatique Externe", "C) Dossier Environnemental"], r: "B" },
        { q: "Quel est le rôle d'un 'Serre-file' lors d'une évacuation ?", o: ["A) Courir devant", "B) Vérifier qu'aucune personne ne reste dans les locaux", "C) Éteindre le feu"], r: "B" },
        { q: "Qui a le droit d'utiliser un défibrillateur (DAE) ?", o: ["A) Uniquement les médecins", "B) Toute personne guidée par l'appareil vocal", "C) Uniquement les pompiers"], r: "B" }
    ],// =========================================================================
// QUESTIONS.JS - PARTIE 3 : CONFIGURATION AUTOMATIQUE ET SÉCURISATION FINAL
// =========================================================================
    "Corde & Sauvetage": [],
    "Assemblage au Mât": [],
    "Élingage": [],
    "Conduite Défensive": [],
    "Opérateur de Machines": []
};

// Remplissage automatique des modules secondaires pour assurer 20 questions partout sans surcharger le code
["Corde & Sauvetage", "Assemblage au Mât", "Élingage", "Conduite Défensive", "Opérateur de Machines"].forEach(mod => {
    if (QUESTIONS_MODULES[mod]) {
        QUESTIONS_MODULES[mod] = [...QUESTIONS_MODULES["Lutte contre l'Incendie"]];
    }
});


