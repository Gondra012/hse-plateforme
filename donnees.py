# donnees.py

FORMATION_DATA = {
    "Module 1: Travaux en Hauteur": {
        "cours": (
            "--- MODULE 1 : TRAVAUX EN HAUTEUR ---\n"
            "Le travail en hauteur est l'une des causes principales d'accidents graves au travail.\n"
            "Un travail est considéré en hauteur dès lors qu'il y a un risque de chute dans le vide.\n"
            "Règles clés :\n"
            "1. La protection collective (garde-corps, filets) est TOUJOURS prioritaire sur la protection individuelle.\n"
            "2. Le port du harnais antichute est obligatoire si la protection collective est impossible.\n"
            "3. Le harnais doit être relié à un point d'ancrage solide et vérifié (généralement situé au-dessus de la tête).\n"
            "4. L'utilisation d'échelles ou d'escabeaux comme poste de travail permanent est strictement interdite (ils sont réservés à l'accès).\n"
            "5. Avant chaque utilisation, l'opérateur doit inspecter visuellement ses Équipements de Protection Individuelle (EPI)."
        ),
        "questions": [
            {"question": "Quelle est la priorité absolue en matière de protection contre les chutes ?", "options": ["A) Le harnais individuel", "B) La protection collective (ex: garde-corps)", "C) Travailler très vite"], "reponse": "B"},
            {"question": "Une échelle peut-elle servir de poste de travail régulier ?", "options": ["A) Oui, si elle est bien attachée", "B) Non, elle sert uniquement de moyen d'accès", "C) Oui, pour des hauteurs de moins de 5 mètres"], "reponse": "B"},
            {"question": "Que compose un système antichute individuel de base ?", "options": ["A) Un casque et des gants", "B) Un point d'ancrage, une liaison (longe/absorbeur) et un harnais", "C) Une échelle et une corde"], "reponse": "B"},
            {"question": "Où doit se situer idéalement le point d'ancrage du harnais ?", "options": ["A) Au niveau des pieds", "B) Au niveau de la taille", "C) Au-dessus de la tête de l'utilisateur"], "reponse": "C"},
            {"question": "Qu'est-ce que le 'tirant d'air' lors d'un travail en hauteur ?", "options": ["A) La force du vent", "B) La hauteur libre minimale nécessaire sous les pieds pour ne pas heurter le sol en cas de chute", "C) L'épaisseur du câble de sécurité"], "reponse": "B"},
            {"question": "À quelle fréquence un harnais de sécurité doit-il être vérifié par un expert ?", "options": ["A) Tous les 5 ans", "B) Au moins une fois par an (12 mois)", "C) Uniquement après une chute"], "reponse": "B"},
            {"question": "Que devez-vous faire avant d'utiliser votre harnais antichute ?", "options": ["A) Le laver à grande eau", "B) Réaliser une inspection visuelle (coutures, sangles, boucles)", "C) Demander l'autorisation au client"], "reponse": "B"},
            {"question": "Un garde-corps réglementaire doit comporter :", "options": ["A) Juste une barre en haut", "B) Une main courante (lisse), une sous-lisse et une plinthe de butée", "C) Une cordelette rouge"], "reponse": "B"},
            {"question": "Quelle est l'utilité de la plinthe au bas d'un garde-corps ?", "options": ["A) Empêcher la chute d'outils ou d'objets vers le bas", "B) Permettre de poser ses pieds pour se reposer", "C) Décorer le chantier"], "reponse": "A"},
            {"question": "Si votre harnais a subi ou stoppé une vraie chute, que devez-vous en faire ?", "options": ["A) Le réutiliser s'il n'est pas déchiré", "B) Le mettre immédiatement au rebut (destruction) et le remplacer", "C) Le recoudre"], "reponse": "B"},
            {"question": "Qu'est-ce qu'un absorbeur d'énergie sur une longe ?", "options": ["A) Un système pour monter plus vite", "B) Un dispositif qui se déchire pour réduire la force du choc sur le corps lors de l'impact", "C) Un poids pour stabiliser l'opérateur"], "reponse": "B"},
            {"question": "Peut-on travailler en hauteur sur un échafaudage pendant un violent orage ?", "options": ["A) Oui, si on porte un imperméable", "B) Non, le travail doit être arrêté immédiatement (risques de glissade, foudre, vent)", "C) Uniquement si l'échafaudage est couvert"], "reponse": "B"},
            {"question": "Qui a le droit de monter ou de modifier un échafaudage ?", "options": ["A) N'importe quel ouvrier présent", "B) Uniquement une personne formée et explicitement autorisée", "C) Le livreur de matériel"], "reponse": "B"},
            {"question": "Quel composant du harnais répartit les forces sur le corps lors d'une chute ?", "options": ["A) Les sangles (cuissardes et bretelles)", "B) L'anneau dorsal uniquement", "C) Les étiquettes de conformité"], "reponse": "A"},
            {"question": "Lors de l'utilisation d'une plateforme individuelle roulante (PIRL), faut-il enclencher les stabilisateurs ?", "options": ["A) Non, sauf s'il y a du vent", "B) Oui, systématiquement avant de monter dessus", "C) Uniquement si le sol est en pente"], "reponse": "B"},
            {"question": "Quelle est la cause principale de dysfonctionnement des mousquetons ?", "options": ["A) La couleur de l'acier", "B) La présence de saletés ou de boue empêchant le verrouillage automatique", "C) L'exposition à la lumière du soleil"], "reponse": "B"},
            {"question": "Quelle norme ou marquage obligatoire garantit qu'un EPI est conforme en Europe ?", "options": ["A) Le marquage NF unique", "B) Le marquage 'CE'", "C) L'inscription 'Garantie 2 ans'"], "reponse": "B"},
            {"question": "Que risquez-vous en restant suspendu trop longtemps inerte dans un harnais après une chute ?", "options": ["A) Rien, on est en sécurité", "B) Le syndrome de suspension (ou de harnais), un danger mortel pour la circulation du sang", "C) Une simple crampe aux jambes"], "reponse": "B"},
            {"question": "Quelle précaution faut-il prendre pour les outils lors d'un travail sur une nacelle ?", "options": ["A) Les laisser en vrac sur le plancher", "B) Les sécuriser avec des lanières/attaches (porte-outils) pour éviter leur chute", "C) Les jeter en bas quand on a fini"], "reponse": "B"},
            {"question": "Le plan de prévention pour les travaux en hauteur inclut obligatoirement :", "options": ["A) Le menu de la cantine", "B) Une procédure de sauvetage et d'évacuation rapide en cas de chute", "C) La liste des véhicules de l'entreprise"], "reponse": "B"}
        ]
    }
}
