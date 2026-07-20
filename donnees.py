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
# Ajout du Module 3 au dictionnaire existant
FORMATION_DATA.update({
    "Module 3: Lutte contre l'Incendie": {
        "cours": (
            "--- MODULE 3 : LUTTE CONTRE L'INCENDIE ---\n"
            "Le feu est une réaction chimique d'oxydation rapide. Pour qu'un feu se déclare et se maintienne,\n"
            "trois éléments doivent impérativement être réunis : un Combustible (ce qui brûle, ex: bois, gaz),\n"
            "un Comburant (l'oxygène de l'air) et une Énergie d'activation (chaleur, étincelle, flamme).\n"
            "C'est ce qu'on appelle le Triangle du Feu. Supprimer un seul de ces éléments suffit à éteindre l'incendie.\n"
            "Règles clés :\n"
            "1. L'alerte doit être immédiate dès la découverte d'un début d'incendie.\n"
            "2. Il existe 5 grandes classes de feux (A, B, C, D, F) nécessitant des agents d'extinction différents.\n"
            "3. Un extincteur ne doit être utilisé que sur un début d'incendie, jamais si le feu est trop développé.\n"
            "4. Lors de l'évacuation, la fumée est le danger principal : elle est toxique, chaude et opaque."
        ),
        "questions": [
            {"question": "Quels sont les trois éléments indispensables pour former le 'Triangle du Feu' ?", "options": ["A) Fumée, Allumette, Bois", "B) Combustible, Comburant, Énergie d'activation", "C) Eau, Oxygène, Chaleur"], "reponse": "B"},
            {"question": "Quelle classe de feu concerne les feux de solides (bois, papier, carton, tissus) ?", "options": ["A) Classe A", "B) Classe B", "C) Classe C"], "reponse": "A"},
            {"question": "La Classe B regroupe les feux de liquides et solides liquéfiables (essence, huile, plastiques). Quel est son autre nom ?", "options": ["A) Feux gras", "B) Feux de métaux", "C) Feux de gaz"], "reponse": "A"},
            {"question": "Quel type de feu est classé dans la 'Classe C' ?", "options": ["A) Les feux de métaux", "B) Les feux de gaz (butane, propane, gaz naturel)", "C) Les feux de friteuse"], "reponse": "B"},
            {"question": "Quel agent d'extinction est le plus adapté pour éteindre un feu électrique ou une armoire sous tension ?", "options": ["A) L'eau pulvérisée avec additif", "B) Le dioxyde de carbone (CO2) qui étouffe le feu sans abîmer le matériel", "C) Un seau de sable humide"], "reponse": "B"},
            {"question": "Pourquoi est-il formellement interdit de jeter de l'eau sur un feu d'huile de cuisson (Classe F) ?", "options": ["A) Cela refroidit trop vite la poêle", "B) Cela provoque une vaporisation explosive projetant de l'huile enflammée partout", "C) L'eau nourrit chimiquement le feu"], "reponse": "B"},
            {"question": "Quelle est la première action à réaliser lorsque vous découvrez un début d'incendie ?", "options": ["A) Chercher vos objets de valeur", "B) Déclencher l'alarme sonore du bâtiment pour alerter tout le monde", "C) Essayer de filmer la scène"], "reponse": "B"},
            {"question": "Comment appelle-t-on le mode d'extinction qui consiste à priver le feu d'oxygène ?", "options": ["A) Le refroidissement", "B) L'étouffement", "C) Le déblayage"], "reponse": "B"},
            {"question": "Où devez-vous vous diriger immédiatement lorsque le signal d'alarme d'évacuation retentit ?", "options": ["A) Vers votre bureau pour éteindre l'ordinateur", "B) Vers la sortie de secours la plus proche pour rejoindre le Point de Rassemblement", "C) Aux toilettes pour vous laver les mains"], "reponse": "B"},
            {"question": "En cas d'évacuation, pourquoi ne faut-il jamais utiliser les ascenseurs ?", "options": ["A) Ils consomment trop d'énergie", "B) Risque de blocage en cabine par coupure de courant et d'asphyxie par les fumées", "C) Ils sont trop lents"], "reponse": "B"},
            {"question": "Si un couloir est envahi par une fumée dense, comment devez-vous progresser ?", "options": ["A) En courant le plus vite possible la tête haute", "B) Près du sol (à quatre pattes) car l'air y est plus frais et moins toxique", "C) En marchant à reculons les yeux fermés"], "reponse": "B"},
            {"question": "Que devez-vous faire des portes et fenêtres derrière vous lors de l'évacuation si la situation le permet ?", "options": ["A) Les ouvrir en grand pour aérer", "B) Les fermer sans les verrouiller pour freiner la propagation des flammes et des fumées", "C) Les démonter"], "reponse": "B"},
            {"question": "Quel est le numéro de téléphone universel pour joindre les secours en Europe ?", "options": ["A) 112", "B) 15", "C) 18"], "reponse": "A"},
            {"question": "Quelle est la durée moyenne d'utilisation efficace en continu d'un extincteur portable de 6 kg ?", "options": ["A) Environ 20 à 30 secondes seulement", "B) Plus de 5 minutes", "C) Une heure entière"], "reponse": "A"},
            {"question": "Où faut-il viser avec l'embout d'un extincteur pour éteindre efficacement un feu ?", "options": ["A) Le sommet des flammes", "B) La base des flammes (le foyer du combustible)", "C) Autour du feu pour faire un cercle"], "reponse": "B"},
            {"question": "Que signifie l'acronyme RIA dans les installations fixes de protection incendie ?", "options": ["A) Robinet d'Incendie Armé", "B) Réseau d'Intervention Automatique", "C) Réserve d'Incendie Accessible"], "reponse": "A"},
            {"question": "Quelle couleur caractérise l'ensemble des panneaux de signalisation relatifs au matériel incendie ?", "options": ["A) Le Vert", "B) Le Rouge", "C) Le Bleu"], "reponse": "B"},
            {"question": "Qui est désigné dans une équipe d'évacuation pour fermer la marche et s'assurer que personne ne reste derrière ?", "options": ["A) Le guide-file", "B) Le serre-file", "C) Le responsable de site"], "reponse": "B"},
            {"question": "Si vos vêtements ou ceux d'un collègue prennent feu, quel est le meilleur comportement ?", "options": ["A) Courir pour essayer d'éteindre le feu avec le vent", "B) Se rouler au sol ou étouffer les flammes avec une couverture non synthétique", "C) Ne rien faire et attendre que les pompiers arrivent"], "reponse": "B"},
            {"question": "À quelle fréquence minimale les extincteurs d'une entreprise doivent-ils être contrôlés réglementairement ?", "options": ["A) Tous les mois", "B) Une fois par an (vérification annuelle obligatoire)", "C) Tous les 5 ans"], "reponse": "B"}
        ]
    }
})
# Ajout du Module 4 au dictionnaire existant
FORMATION_DATA.update({
    "Module 4: Corde & Sauvetage": {
        "cours": (
            "--- MODULE 4 : CORDE & SAUVETAGE ---\n"
            "Les travaux d'accès par corde (cordistes) et les manœuvres de sauvetage nécessitent\n"
            "une technicité extrême et un matériel irréprochable. La règle absolue est la redondance :\n"
            "le cordiste doit toujours être connecté à deux systèmes de cordes indépendants : une corde de travail\n"
            "et une corde de sécurité (secours). Chaque corde doit posséder son propre point d'ancrage.\n"
            "Règles clés :\n"
            "1. Le matériel (cordes, harnais, descendeurs) doit être de type professionnel et certifié CE.\n"
            "2. Un plan de sauvetage écrit doit être établi avant le début de tout chantier en hauteur.\n"
            "3. Le syndrome de suspension (corps inerte suspendu) impose de décrocher une victime en moins de 15 minutes.\n"
            "4. Les nœuds de sécurité (ex: nœud de huit) doivent être maîtrisés et vérifiés par un tiers."
        ),
        "questions": [
            {"question": "Quelle est la règle d'or concernant le nombre de cordes lors d'un accès difficile ?", "options": ["A) Une seule corde suffit si elle est grosse", "B) Toujours deux cordes indépendantes (travail et sécurité)", "C) Trois cordes obligatoirement"], "reponse": "B"},
            {"question": "Comment appelle-t-on le nœud le plus utilisé et le plus sûr pour s'amarrer sur une corde ?", "options": ["A) Le nœud de huit", "B) Le nœud de cravate", "C) Le nœud simple"], "reponse": "A"},
            {"question": "Quel composant mécanique permet de descendre de manière contrôlée le long d'une corde ?", "options": ["A) Un bloqueur ventral", "B) Un descendeur auto-freinant", "C) Une poulie simple"], "reponse": "B"},
            {"question": "À quoi sert un appareil 'antichute mobile' (type ASAP) sur la corde de sécurité ?", "options": ["A) À monter plus vite", "B) À bloquer instantanément la descente en cas de rupture de la corde de travail", "C) À mesurer la hauteur"], "reponse": "B"},
            {"question": "Peut-on fixer la corde de travail et la corde de sécurité sur le même point d'ancrage ?", "options": ["A) Oui, si l'ancrage est très gros", "B) Non, chaque corde doit avoir un point d'ancrage structurellement indépendant", "C) Uniquement en intérieur"], "reponse": "B"},
            {"question": "Qu'est-ce qu'une 'déviation' sur une corde ?", "options": ["A) Un changement de couleur de la corde", "B) Un amarrage intermédiaire pour écarter la corde d'une arête tranchante ou d'un danger", "C) Une technique pour descendre à deux"], "reponse": "B"},
            {"question": "Quel est le risque majeur si une corde frotte directement sur une arête en béton coupante ?", "options": ["A) La corde va simplement se salir", "B) La rupture par cisaillement de la corde sous le poids du travailleur", "C) La corde va s'allonger"], "reponse": "B"},
            {"question": "Quel équipement utilise-t-on pour protéger une corde des frottements contre un mur ?", "options": ["A) Un protège-corde (gaine en PVC ou rouleau)", "B) Du ruban adhésif simple", "C) Un morceau de tissu en coton"], "reponse": "A"},
            {"question": "Qu'est-ce qu'un 'bloqueur' (type poignée Jumar ou bloqueur ventral) ?", "options": ["A) Un outil pour couper la corde", "B) Un appareil qui glisse vers le haut et se bloque vers le bas pour permettre la remontée", "C) Un système de freinage"], "reponse": "B"},
            {"question": "Pourquoi la rapidité est-elle vitale lors du sauvetage d'une personne suspendue inerte ?", "options": ["A) Pour finir la journée à l'heure", "B) Pour éviter le syndrome de suspension (arrêt circulatoire mortel)", "C) Pour ne pas abîmer le harnais"], "reponse": "B"},
            {"question": "Quelle est la durée de vie maximale recommandée pour un équipement textile (corde, harnais) ?", "options": ["A) 2 ans", "B) 5 à 10 ans selon les préconisations du fabricant", "C) Illimitée tant qu'il n'est pas cassé"], "reponse": "B"},
            {"question": "Que signifie l'inspection 'EPI' quotidienne par le cordiste ?", "options": ["A) Peser son matériel", "B) Vérifier visuellement et au toucher l'état des cordes, coutures et mousquetons avant de monter", "C) Remplir un rapport de 20 pages"], "reponse": "B"},
            {"question": "Un mousqueton utilisé pour les travaux sur corde doit obligatoirement être :", "options": ["A) En aluminium simple sans verrouillage", "B) À verrouillage automatique ou manuel (sécurité 2 ou 3 mouvements)", "C) Le plus petit possible"], "reponse": "B"},
            {"question": "Qu'est-ce qu'une 'longe de maintien' ?", "options": ["A) Une corde pour tirer du matériel", "B) Une longe réglable qui permet de se stabiliser face au poste de travail", "C) Une corde de secours"], "reponse": "B"},
            {"question": "Lors d'une évacuation de blessé par le haut, quel équipement permet de démultiplier l'effort de traction ?", "options": ["A) Un mouflage (système de poulies et bloqueurs)", "B) Un gros marteau", "C) Un descendeur"], "reponse": "A"},
            {"question": "Quel type de corde utilise-t-on principalement pour l'accès sur corde (faible allongement) ?", "options": ["A) Des cordes dynamiques (type escalade)", "B) Des cordes semi-statiques", "C) Des cordes en nylon de chantier de maçonnerie"], "reponse": "B"},
            {"question": "À quoi sert un 'nœud de fin de corde' (en bas de la descente) ?", "options": ["A) À faire joli", "B) À empêcher le cordiste de glisser et de sortir accidentellement du bout de sa corde", "C) À alourdir la corde"], "reponse": "B"},
            {"question": "Qui doit rédiger la procédure de secours spécifique d'un chantier sur cordes ?", "options": ["A) Les pompiers uniquement", "B) L'entreprise responsable des travaux avant le démarrage", "C) Le client"], "reponse": "B"},
            {"question": "Si une corde présente une hernie (déformation de la gaine ou de l'âme), que faut-il faire ?", "options": ["A) Mettre du scotch autour", "B) La couper ou la mettre immédiatement au rebut", "C) L'utiliser uniquement pour les petites hauteurs"], "reponse": "B"},
            {"question": "Le casque d'un cordiste doit posséder une caractéristique obligatoire par rapport à un casque de chantier classique :", "options": ["A) Une visière teintée", "B) Une jugulaire résistante (fermée sous le menton) pour éviter de perdre le casque en cas de chute", "C) Être de couleur rouge"], "reponse": "B"}
        ]
    }
})
# Ajout du Module 5 au dictionnaire existant
FORMATION_DATA.update({
    "Module 5: Assemblage au Mât": {
        "cours": (
            "--- MODULE 5 : ASSEMBLAGE AU MÂT ---\n"
            "L'assemblage de structures sur pylônes ou mâts présente des risques cumulés de chutes de grande hauteur,\n"
            "de manutention lourde en suspension et de chute d'objets. La coordination des équipes au sol\n"
            "et en hauteur est indispensable.\n"
            "Règles clés :\n"
            "1. Le balisage d'une zone d'exclusion au sol (zone d'impact) est obligatoire sous le mât.\n"
            "2. Tous les outils utilisés en hauteur doivent être impérativement imperdables (liés par une dragonne).\n"
            "3. L'utilisation d'une ligne de vie ou d'un système de double longe d'échafaudage est requise pour la montée.\n"
            "4. Le serrage et l'assemblage des éléments doivent respecter les procédures du constructeur pour éviter l'effondrement."
        ),
        "questions": [
            {"question": "Quel est le risque majeur spécifique lors du montage d'un mât en sections ?", "options": ["A) Le bruit du vent", "B) L'effondrement de la structure ou la chute d'éléments lourds en cours d'assemblage", "C) La surchauffe des outils"], "reponse": "B"},
            {"question": "Quelle mesure de sécurité est obligatoire au sol au droit d'un mât en cours de montage ?", "options": ["A) Installer une bâche anti-poussière", "B) Mettre en place une zone d'exclusion balisée pour interdire l'accès sous les charges", "C) Garer les véhicules de chantier"], "reponse": "B"},
            {"question": "Comment sécuriser une clé à choc ou un outil à main utilisé en haut du mât ?", "options": ["A) En le tenant très fort avec les deux mains", "B) En l'attachant à une dragonne ou une lanière reliée au harnais ou à la structure", "C) En le mettant dans sa poche ouverte"], "reponse": "B"},
            {"question": "Lors de l'ascension d'un mât sur une échelle fixe sans crinoline, quel système utilise-t-on ?", "options": ["A) Une simple corde de maçon", "B) Un antichute guidé sur rail ou câble rigide (ligne de vie verticale)", "C) Aucun système si on monte doucement"], "reponse": "B"},
            {"question": "Quelle est la règle d'or lors du déplacement sur la structure du mât avec une double longe ?", "options": ["A) Déconnecter les deux connecteurs pour aller plus vite", "B) Toujours garder au moins un des deux mousquetons ancré à la structure (connexion continue)", "C) Attacher les deux mousquetons sur son propre harnais"], "reponse": "B"},
            {"question": "Quelle est l'utilité d'un couple de serrage précis (clé dynamométrique) lors de l'assemblage d'un mât ?", "options": ["A) Faire gagner du temps", "B) Garantir la solidité mécanique de la structure face aux vibrations et au vent", "C) Rendre les boulons plus jolis"], "reponse": "B"},
            {"question": "En cas de détection d'une fissure sur une bride d'assemblage d'un mât, que faut-il faire ?", "options": ["A) Continuer le montage et mettre de la peinture", "B) Stopper immédiatement l'assemblage et remplacer la pièce défectueuse", "C) Serrer le boulon plus fort"], "reponse": "B"},
            {"question": "Quel équipement permet de lever les sections du mât depuis le sol de manière contrôlée ?", "options": ["A) Une cordelette simple tirée à la main", "B) Un treuil de levage ou une grue avec des élingues certifiées", "C) Une échelle"], "reponse": "B"},
            {"question": "Quel type de casque est recommandé pour les opérateurs travaillant sur un mât ?", "options": ["A) Un casque de chantier classique sans jugulaire", "B) Un casque type alpiniste avec jugulaire résistante pour ne pas le perdre la tête en arrière", "C) Une casquette renforcée"], "reponse": "B"},
            {"question": "Quelle condition météorologique impose l'arrêt immédiat des travaux sur un mât ?", "options": ["A) Un grand soleil", "B) Des vents violents ou un risque d'orage/foudre", "C) Une température de 20°C"], "reponse": "B"},
            {"question": "Que signifie l'expression 'travailler en tension' pour une structure haubanée ?", "options": ["A) Travailler sous l'effet du stress", "B) Régler la tension correcte des câbles de maintien (haubans) pour stabiliser le mât", "C) Utiliser des outils électriques"], "reponse": "B"},
            {"question": "Pourquoi le port de chaussures de sécurité avec un profil de semelle antidérapant est-il vital sur un mât ?", "options": ["A) Pour ne pas salir la structure", "B) Pour éviter les glissades sur les barreaux ou les surfaces métalliques humides", "C) Pour marcher plus vite au sol"], "reponse": "B"},
            {"question": "Lors du levage d'une section de mât, qui dirige la manœuvre ?", "options": ["A) Tout le monde en même temps en criant", "B) Un chef de manœuvre unique (chef d'équipe ou guide de grue) par signaux ou radio", "C) Le conducteur de la grue tout seul sans regarder"], "reponse": "B"},
            {"question": "À quoi sert une 'broche de centrage' lors de l'alignement de deux sections de mât ?", "options": ["A) À visser les écrous", "B) À aligner les trous des boulons en sécurité avant de mettre les fixations définitives", "C) À mesurer la hauteur"], "reponse": "B"},
            {"question": "Peut-on stocker des boulons en vrac sur une plateforme non sécurisée en haut du mât ?", "options": ["A) Oui, si on fait attention", "B) Non, ils doivent être placés dans des sacs à outils ou sacoches fermées et attachées", "C) Uniquement les petits boulons"], "reponse": "B"},
            {"question": "Qu'est-ce qu'un hauban sur un mât ?", "options": ["A) Un outil de serrage", "B) Un câble d'ancrage en acier destiné à stabiliser la structure verticale face au vent", "C) Une échelle de secours"], "reponse": "B"},
            {"question": "Quelle vérification doit être faite sur les boulons d'ancrage de la base du mât (fondation) ?", "options": ["A) Vérifier s'ils sont bien peints", "B) S'assurer de leur serrage au couple et de l'absence de corrosion ou de jeu", "C) Les recouvrir de terre"], "reponse": "B"},
            {"question": "Lors d'un travail sur un mât de télécommunication, quel risque invisible s'ajoute à la chute ?", "options": ["A) Le risque d'exposition aux rayonnements électromagnétiques (ondes des antennes)", "B) Le risque d'asphyxie", "C) Le risque d'inondation"], "reponse": "A"},
            {"question": "Quelle est la règle concernant le port du harnais lors de l'utilisation d'une nacelle élévatrice pour monter sur un mât ?", "options": ["A) Le harnais est inutile car la nacelle a des garde-corps", "B) Le harnais est obligatoire et doit être attaché au point d'ancrage prévu dans la nacelle", "C) On peut l'attacher directement sur le mât"], "reponse": "B"},
            {"question": "Qui doit vérifier la conformité du matériel de levage utilisé pour l'assemblage du mât ?", "options": ["A) Le client à la fin des travaux", "B) Une personne compétente ou un organisme agréé (vérification périodique à jour)", "C) Le fabricant uniquement à la vente"], "reponse": "B"}
        ]
    }
})
# Ajout du Module 6 au dictionnaire existant
FORMATION_DATA.update({
    "Module 6: Élingage": {
        "cours": (
            "--- MODULE 6 : ÉLINGAGE ---\n"
            "L'élingage consiste à lier une charge à un appareil de levage à l'aide d'élingues (textiles, câbles ou chaînes).\n"
            "Un mauvais élingage peut provoquer la chute de la charge, causant des accidents mortels ou des dégâts matériels majeurs.\n"
            "Règles clés :\n"
            "1. Connaître le poids de la charge avant de lever et s'assurer que la CMU (Charge Maximale Utile) du matériel est respectée.\n"
            "2. Inspecter le matériel avant chaque utilisation : refuser toute élingue coupée, effilochée, déformée ou sans étiquette.\n"
            "3. Prendre en compte l'angle d'élingage : plus l'angle entre les brins est grand, plus la tension sur chaque élingue augmente.\n"
            "4. Utiliser des guides de charge (cordes de guidage) pour orienter la charge à distance sans la toucher directement.\n"
            "5. Il est strictement interdit de circuler ou de stationner sous une charge suspendue."
        ),
        "questions": [
            {"question": "Que signifie le sigle CMU inscrit sur une élingue ?", "options": ["A) Charge Maximale Utile (le poids maximum autorisé)", "B) Contrôle Mécanique Unique", "C) Capacité de Manutention Urgente"], "reponse": "A"},
            {"question": "Quelle est l'obligation principale concernant l'étiquette d'une élingue ?", "options": ["A) Elle doit être de couleur verte", "B) Elle doit être présente, lisible et indiquer la CMU, sinon l'élingue est interdite", "C) Elle doit être retirée avant le levage"], "reponse": "B"},
            {"question": "Quel type d'élingue est le plus sensible aux coupures sur des arêtes vives ?", "options": ["A) L'élingue en chaîne d'acier", "B) L'élingue textile (sangle synthétique)", "C) L'élingue en câble métallique"], "reponse": "B"},
            {"question": "Que devez-vous installer sur les coins vifs d'une charge métallique avant d'utiliser une élingue textile ?", "options": ["A) De la peinture de signalisation", "B) Des protections d'angles ou fourreaux anti-coupure", "C) Rien du tout si la charge est propre"], "reponse": "B"},
            {"question": "Comment évolue l'effort sur les élingues lorsque l'angle entre les brins augmente ?", "options": ["A) L'effort diminue", "B) L'effort augmente fortement (effet de coin)", "C) L'effort reste exactement le même"], "reponse": "B"},
            {"question": "Quelle est la règle absolue concernant les charges suspendues pour le personnel au sol ?", "options": ["A) Porter deux casques", "B) Il est strictement interdit de circuler ou de travailler sous une charge suspendue", "C) Courir pour passer en dessous rapidement"], "reponse": "B"},
            {"question": "Qu'est-ce qu'une 'élingue étranglée' (ou en nœud coulant) ?", "options": ["A) Une élingue abîmée", "B) Une technique où l'élingue fait le tour de la charge et repasse dans son propre œil", "C) Une élingue trop courte"], "reponse": "B"},
            {"question": "Quel accessoire en forme de 'U' fermé par un axe permet de relier une élingue à un point de levage ?", "options": ["A) Un mousqueton simple", "B) Une manille", "C) Un serre-câble"], "reponse": "B"},
            {"question": "Si une élingue en chaîne présente un maillon tordu ou allongé, que faut-il faire ?", "options": ["A) Tapoter dessus avec un marteau pour le redresser", "B) La retirer immédiatement du service et l'envoyer au rebut", "C) L'utiliser uniquement pour des petites charges"], "reponse": "B"},
            {"question": "À quoi sert une 'longe de guidage' (ou corde de rétention) attachée à la charge ?", "options": ["A) À soulever la charge plus haut", "B) À orienter et stabiliser la charge à distance sans mettre ses mains dessous", "C) À attacher le crochet de la grue"], "reponse": "B"},
            {"question": "Le code couleur des élingues textiles rondes est-il réglementé ? Que signifie une élingue VERTE ?", "options": ["A) CMU de 1 Tonne", "B) CMU de 2 Tonnes", "C) CMU de 5 Tonnes"], "reponse": "B"},
            {"question": "Quelle couleur correspond à une élingue textile d'une CMU de 1 Tonne ?", "options": ["A) Violet", "B) Jaune", "C) Rouge"], "reponse": "A"},
            {"question": "Quelle couleur correspond à une élingue textile d'une CMU de 3 Tonnes ?", "options": ["A) Bleu", "B) Jaune", "C) Marron"], "reponse": "B"},
            {"question": "Qui a la responsabilité de vérifier l'état du matériel d'élingage avant chaque levage ?", "options": ["A) Le conducteur de la grue uniquement", "B) L'élingueur (l'opérateur qui accroche la charge)", "C) Le directeur du site à la fin du mois"], "reponse": "B"},
            {"question": "Qu'est-ce que le 'centre de gravité' d'une charge lors d'un levage ?", "options": ["A) Le point le plus lourd", "B) Le point d'équilibre où la charge restera stable et droite une fois levée", "C) Le point le plus haut"], "reponse": "B"},
            {"question": "Que se passe-t-il si le crochet de levage n'est pas aligné verticalement avec le centre de gravité de la charge ?", "options": ["A) La charge va monter plus vite", "B) La charge va basculer ou osciller violemment (effet de balancier) au décollage", "C) Rien du tout"], "reponse": "B"},
            {"question": "Peut-on utiliser des élingues différentes (ex: une chaîne et une sangle textile) sur un même levage équilibré ?", "options": ["A) Oui, si elles ont la même longueur", "B) Non, il faut éviter de panacher les matières car elles n'ont pas la même élasticité", "C) Uniquement si la charge est légère"], "reponse": "B"},
            {"question": "Quelle précaution prendre si le vent souffle en rafales lors d'un levage extérieur de grande surface ?", "options": ["A) Lever plus vite pour éviter le vent", "B) Interrompre la manœuvre car le vent peut déporter la charge de manière incontrôlable", "C) Mettre plus de cordes"], "reponse": "B"},
            {"question": "Où doit se placer l'élingueur pendant le levage effectif de la charge ?", "options": ["A) Juste à côté de la charge pour la retenir avec ses mains", "B) En dehors de la zone de danger (trajectoire de la charge) et bien en vue du grutier", "C) Sous la charge pour vérifier l'équilibre"], "reponse": "B"},
            {"question": "À quelle fréquence minimale les accessoires de levage (élingues, manilles) doivent-ils subir une vérification générale périodique par un organisme agréé ?", "options": ["A) Tous les 3 mois", "B) Tous les 12 mois (1 an)", "C) Tous les 5 ans"], "reponse": "B"}
        ]
    }
})
# Ajout du Module 7 au dictionnaire existant
FORMATION_DATA.update({
    "Module 7: Conduite Défensive": {
        "cours": (
            "--- MODULE 7 : CONDUITE DÉFENSIVE ---\n"
            "La conduite défensive est une attitude de sécurité au volant visant à anticiper les situations\n"
            "dangereuses malgré les conditions défavorables ou les erreurs des autres usagers.\n"
            "Règles clés :\n"
            "1. L'anticipation : observer loin devant pour détecter les comportements à risque des piétons et véhicules.\n"
            "2. Les distances de sécurité : respecter la règle des 2 secondes d'écart avec le véhicule qui précède.\n"
            "3. L'adaptation de la vitesse : adapter l'allure en fonction de la météo (pluie, brouillard) et de la visibilité.\n"
            "4. Le zéro distraction : l'usage du téléphone portable (même mains libres) réduit drastiquement la vigilance.\n"
            "5. L'état du véhicule : réaliser les vérifications quotidiennes de sécurité (freins, pneus, feux, niveaux)."
        ),
        "questions": [
            {"question": "Qu'est-ce que la conduite défensive ?", "options": ["A) Une technique pour conduire de manière agressive", "B) Une conduite basée sur l'anticipation des dangers et les erreurs des autres pour éviter l'accident", "C) Une méthode pour rouler le plus vite possible"], "reponse": "B"},
            {"question": "Quelle est la distance de sécurité minimale (en temps) à maintenir avec le véhicule devant soi par temps sec ?", "options": ["A) 0,5 seconde", "B) 2 secondes", "C) 5 secondes"], "reponse": "B"},
            {"question": "Comment doit évoluer la distance de sécurité si la chaussée est mouillée ou s'il pleut ?", "options": ["A) Elle doit rester identique", "B) Elle doit être doublée (passer à 4 secondes minimum)", "C) Elle peut être réduite"], "reponse": "B"},
            {"question": "Qu'est-ce que le 'temps de réaction' moyen d'un conducteur vigilant ?", "options": ["A) Environ 0,1 seconde", "B) Environ 1 seconde", "C) Environ 3 secondes"], "reponse": "B"},
            {"question": "Quel effet a l'alcool ou la fatigue sur le temps de réaction ?", "options": ["A) Il diminue le temps de réaction", "B) Il augmente le temps de réaction (le conducteur met plus de temps à freiner)", "C) Il n'a aucun impact"], "reponse": "B"},
            {"question": "L'utilisation du téléphone au volant (tenu en main) multiplie le risque d'accident par :", "options": ["A) 1,5", "B) 3", "C) 10"], "reponse": "B"},
            {"question": "Qu'est-ce que l'aquaplaning (ou aquaplanage) ?", "options": ["A) Un lavage automatique du véhicule", "B) La perte d'adhérence des pneus qui glissent sur une couche d'eau sans toucher le sol", "C) Une technique de freinage d'urgence"], "reponse": "B"},
            {"question": "Quelle est la première action à mener en cas d'aquaplaning ?", "options": ["A) Piler sur le frein immédiatement", "B) Relâcher doucement l'accélérateur et maintenir le volant droit sans freiner brusquement", "C) Tourner le volant rapidement"], "reponse": "B"},
            {"question": "Qu'appelle-t-on les 'angles morts' d'un véhicule ?", "options": ["A) Les zones situées directement sous les roues", "B) Les zones invisibles dans les rétroviseurs que le conducteur ne peut voir sans tourner la tête", "C) Les phares qui ne fonctionnent plus"], "reponse": "B"},
            {"question": "Avant de changer de voie ou de tourner, quelle est la bonne séquence d'actions ?", "options": ["A) Tourner le volant puis mettre le clignotant", "B) Rétroviseur, contrôle de l'angle mort, clignotant, puis manœuvre", "C) Klaxonner et tourner"], "reponse": "B"},
            {"question": "Quelle est la règle concernant le port de la ceinture de sécurité ?", "options": ["A) Obligatoire uniquement à l'avant", "B) Obligatoire pour tous les occupants du véhicule (avant et arrière) et sur tous les trajets", "C) Facultative en ville"], "reponse": "B"},
            {"question": "En conduite défensive, que faire si un véhicule vous colle de très près par derrière ?", "options": ["A) Freiner brusquement pour lui faire peur", "B) Augmenter votre propre distance de sécurité avec le véhicule devant vous pour éviter lesfreinages secs", "C) Accélérer au-delà des limites de vitesse"], "reponse": "B"},
            {"question": "En cas de fatigue au volant (premiers bâillements, yeux lourds), quelle est la seule solution efficace ?", "options": ["A) Ouvrir la fenêtre ou monter le son de la radio", "B) S'arrêter sur une zone sécurisée pour faire une pause d'au moins 15 à 20 minutes", "C) Boire un café fort en continuant de rouler"], "reponse": "B"},
            {"question": "La distance d'arrêt totale d'un véhicule est égale à :", "options": ["A) La distance de freinage uniquement", "B) La distance parcourue pendant le temps de réaction + la distance de freinage", "C) La longueur du véhicule"], "reponse": "B"},
            {"question": "Si la vitesse d'un véhicule est doublée (ex: passage de 50 km/h à 100 km/h), la distance de freinage est :", "options": ["A) Doublée", "B) Multipliée par 4", "C) Reste inchangée"], "reponse": "B"},
            {"question": "Quelle est la profondeur minimale légale de la bande de roulement des pneus d'une voiture particulière ?", "options": ["A) 0,5 mm", "B) 1,6 mm", "C) 3,0 mm"], "reponse": "B"},
            {"question": "Que devez-vous faire à l'approche d'un embranchement si vous n'êtes pas sûr de votre direction ?", "options": ["A) S'arrêter au milieu des voies pour réfléchir", "B) Ralentir à l'avance, rester sur la voie la plus sûre et continuer si la manœuvre devient dangereuse", "C) Reculer si vous avez raté la sortie"], "reponse": "B"},
            {"question": "Qu'indique une baisse soudaine de la pression d'un pneu lors des contrôles ?", "options": ["A) Une usure normale", "B) Une crevaison lente potentielle ou une anomalie à vérifier immédiatement", "C) Que le pneu a trop chaud"], "reponse": "B"},
            {"question": "En cas de visibilité inférieure à 50 mètres à cause d'un brouillard dense, la vitesse maximale autorisée est de :", "options": ["A) 30 km/h", "B) 50 km/h", "C) 80 km/h"], "reponse": "B"},
            {"question": "Quel comportement adopter face à un conducteur manifestement agressif sur la route ?", "options": ["A) Lui répondre par des gestes ou des coups de klaxon", "B) Rester calme, ne pas le regarder et le laisser passer pour s'en éloigner", "C) Bloquer sa trajectoire pour lui donner une leçon"], "reponse": "B"}
        ]
    }
})
