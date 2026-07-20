if (!window.QUESTIONS_MODULES) window.QUESTIONS_MODULES = {};

// 1. LIVRET DE COURS COMPLET DU MODULE 1
window.QUESTIONS_MODULES["Travaux en Hauteur_Cours"] = 
    "--- LIVRET DE FORMATION : TRAVAUX EN HAUTEUR ---\n\n" +
    "1. DÉFINITION ET RISQUES :\n" +
    "Le travail en hauteur commence dès qu'il existe un risque de chute dans le vide. C'est l'une des causes principales d'accidents graves et mortels dans le secteur industriel.\n\n" +
    "2. LES MESURES DE PROTECTION COLLECTIVE (EPC) :\n" +
    "C'est la priorité absolue. On doit toujours chercher à installer des garde-corps réglementaires (comprenant une main courante à 1m, une sous-lisse à mi-hauteur, et une plinthe de butée au sol pour empêcher la chute d'outils), des filets de recueil ou des plateformes de travail sécurisées.\n\n" +
    "3. LES ÉQUIPEMENTS DE PROTECTION INDIVIDUELLE (EPI) :\n" +
    "Si la protection collective est impossible, le port du harnais antichute devient obligatoire. Un système antichute complet comprend obligatoirement :\n" +
    "- Un point d'ancrage structurellement solide situé au-dessus de la tête.\n" +
    "- Un système de liaison (longe avec absorbeur d'énergie qui se déchire pour réduire le choc sur le corps).\n" +
    "- Un harnais d'antichute complet inspecté visuellement par l'opérateur avant chaque montée.\n\n" +
    "4. SÉCURITÉ ET SITUATIONS D'URGENCE :\n" +
    "L'utilisation d'échelles ou escabeaux comme poste de travail permanent est strictement interdite (réservés uniquement à l'accès). En cas de chute, si un opérateur reste suspendu inerte dans son harnais, il risque le 'syndrome de suspension' (un arrêt circulatoire mortel). Il est vital de le secourir en moins de 15 minutes. Les travaux doivent être arrêtés en cas d'intempéries.";

// 2. LIENS LIÉS AUX VISUELS ET VIDÉOS PÉDAGOGIQUES
window.QUESTIONS_MODULES["Travaux en Hauteur_Image"] = "https://unsplash.com"; 
window.QUESTIONS_MODULES["Travaux en Hauteur_Video"] = "https://youtube.com"; 

// 3. BASE DE DONNÉES DU QUESTIONNAIRE (20 QUESTIONS UNIQUES)
window.QUESTIONS_MODULES["Travaux en Hauteur"] = [
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
];
