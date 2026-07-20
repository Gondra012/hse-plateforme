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
# Ajout du Module 2 au dictionnaire existant
FORMATION_DATA.update({
    "Module 2: Habilitation Électrique": {
        "cours": (
            "--- MODULE 2 : HABILITATION ÉLECTRIQUE ---\n"
            "Le courant électrique est invisible et présente deux risques majeurs : l'électrisation\n"
            "(passage du courant dans le corps) et l'électrocution (électrisation mortelle).\n"
            "Règles clés :\n"
            "1. L'habilitation électrique est la reconnaissance par l'employeur de la capacité d'un travailleur\n"
            "   à accomplir des tâches en sécurité vis-à-vis du risque électrique.\n"
            "2. Avant toute intervention sur un circuit, il faut réaliser une consignation (Séparer, Verrouiller,\n"
            "   Vérifier l'Absence de Tension ou VAT, et Mettre à la terre).\n"
            "3. Ne jamais utiliser un outil non isolé (sans le symbole 1000V) à proximité d'une source électrique.\n"
            "4. En cas d'accident électrique, ne touchez jamais la victime avant d'avoir coupé le courant."
        ),
        "questions": [
            {"question": "Quelle est la différence entre électrisation et électrocution ?", "options": ["A) L'électrisation est mortelle, pas l'électrocution", "B) L'électrocution entraîne obligatoirement le décès de la victime", "C) C'est exactement la même chose"], "reponse": "B"},
            {"question": "Qu'est-ce que l'habilitation électrique ?", "options": ["A) Un diplôme d'ingénieur d'État", "B) Une autorisation écrite de l'employeur après une formation et une évaluation", "C) Un permis de conduire les chariots"], "reponse": "B"},
            {"question": "Quelle est la première étape d'une consignation électrique ?", "options": ["A) Mettre des gants", "B) La séparation (couper l'alimentation électrique générale)", "C) Appeler les pompiers"], "reponse": "B"},
            {"question": "Que signifie le sigle VAT en sécurité électrique ?", "options": ["A) Vérification de l'Absence de Tension", "B) Voltage Automatique Total", "C) Véhicule d'Assistance Technique"], "reponse": "A"},
            {"question": "Peut-on utiliser un multimètre classique pour réaliser une VAT réglementaire ?", "options": ["A) Oui, si l'appareil est neuf", "B) Non, il faut utiliser un testeur dédié (détecteur de tension) conforme à la norme", "C) Oui, en faisant attention"], "reponse": "B"},
            {"question": "Quel symbole graphique sur un outil indique qu'il est isolé pour 1000 Volts ?", "options": ["A) Un triangle avec un éclair", "B) Deux triangles superposés avec la mention 1000V", "C) Un cercle rouge"], "reponse": "B"},
            {"question": "Que devez-vous faire en premier si vous voyez un collègue collé à un câble électrique ?", "options": ["A) Le tirer par le bras immédiatement", "B) Couper immédiatement le courant de manière sûre ou utiliser un objet isolant", "C) Courir chercher de l'eau"], "reponse": "B"},
            {"question": "Quelle est la distance minimale de sécurité à respecter par rapport à une ligne aérienne haute tension (<50kV) ?", "options": ["A) 1 mètre", "B) 3 mètres", "C) 5 mètres"], "reponse": "B"},
            {"question": "Un indice d'habilitation commençant par la lettre 'B' concerne :", "options": ["A) La Haute Tension (HT)", "B) La Basse Tension (BT) et Très Basse Tension (TBT)", "C) Les travaux en forêt"], "reponse": "B"},
            {"question": "Dans un indice d'habilitation, le chiffre '1' (ex: B1) signifie que la personne est :", "options": ["A) Chargée de travaux", "B) Exécutant électricien", "C) Chargée de consignation"], "reponse": "B"},
            {"question": "Dans un indice d'habilitation, le chiffre '2' (ex: B2) signifie que la personne est :", "options": ["A) Chargée de travaux (dirige le chantier)", "B) Simple exécutant", "C) Stagiaire"], "reponse": "A"},
            {"question": "Quelle lettre dans l'habilitation désigne une personne effectuant des manœuvres ?", "options": ["A) La lettre M", "B) La lettre C", "C) La lettre R"], "reponse": "A"},
            {"question": "Quel EPI est indispensable pour ouvrir une armoire électrique sous tension ?", "options": ["A) Des gants de chantier en cuir", "B) Des gants isolants adaptés à la tension et un écran facial anti-court-circuit", "C) Des lunettes de soleil"], "reponse": "B"},
            {"question": "Quelle est l'utilité du cadenas de consignation ?", "options": ["A) Empêcher le vol de l'armoire électrique", "B) Bloquer mécaniquement l'appareil de coupure pour éviter sa remise en route accidentelle", "C) Décorer le disjoncteur"], "reponse": "B"},
            {"question": "Qu'est-ce qu'un court-circuit ?", "options": ["A) Une coupure de courant volontaire", "B) Un contact direct accidentel entre deux conducteurs de potentiels différents", "C) Un câble trop court"], "reponse": "B"},
            {"question": "Quelle est la tension de sécurité maximale en milieu sec (Très Basse Tension de Sécurité) ?", "options": ["A) 12 Volts", "B) 50 Volts", "C) 230 Volts"], "reponse": "B"},
            {"question": "Une habilitation électrique est généralement valable pendant combien de temps avant recyclage conseillé ?", "options": ["A) 6 mois", "B) 3 ans", "C) 10 ans"], "reponse": "B"},
            {"question": "Qui doit signer le titre d'habilitation électrique d'un salarié ?", "options": ["A) Le formateur HSE", "B) L'employeur (le chef d'entreprise)", "C) Le salarié uniquement"], "reponse": "B"},
            {"question": "Le port de bijoux ou d'objets métalliques (montres, bagues) est-il autorisé lors de travaux électriques ?", "options": ["A) Oui, si les bijoux sont petits", "B) Non, ils doivent être retirés car ils sont conducteurs et augmentent le risque de court-circuit", "C) Uniquement les bagues en or"], "reponse": "B"},
            {"question": "Que signifie la mise à la terre d'une installation électrique ?", "options": ["A) Cacher les câbles sous la terre", "B) Évacuer les courants de fuite vers la terre pour protéger les personnes d'un contact indirect", "C) Éteindre l'installation"], "reponse": "B"}
        ]
    }
})
