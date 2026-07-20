const BDD_FORMATION = {
    "Travaux en Hauteur": {
        cours: "Le travail en hauteur présente des risques majeurs de chutes. La protection collective (garde-corps, filets) est prioritaire sur la protection individuelle (harnais).\n\nLe harnais doit être inspecté et connecté à un point d'ancrage solide situé au-dessus de la tête.",
        questions: [
            { q: "Quelle est la priorité absolue en matière de protection contre les chutes ?", o: ["A) Le harnais individuel", "B) La protection collective (ex: garde-corps)", "C) Travailler très vite"], r: "B" },
            { q: "Une échelle peut-elle servir de poste de travail régulier ?", o: ["A) Oui", "B) Non, elle sert uniquement de moyen d'accès", "C) Oui, pour moins de 5 mètres"], r: "B" },
            { q: "Que compose un système antichute individuel de base ?", o: ["A) Un casque et des gants", "B) Un point d'ancrage, une liaison et un harnais", "C) Une échelle"], r: "B" },
            { q: "Où doit se situer idéalement le point d'ancrage du harnais ?", o: ["A) Au niveau des pieds", "B) Au niveau de la taille", "C) Au-dessus de la tête"], r: "C" },
            { q: "Qu'est-ce que le 'tirant d'air' ?", o: ["A) La force du vent", "B) La hauteur libre minimale nécessaire sous les pieds pour éviter l'impact", "C) L'épaisseur du câble"], r: "B" },
            { q: "À quelle fréquence un harnais doit-il être vérifié par un expert ?", o: ["A) Tous les 5 ans", "B) Au moins une fois par an (12 mois)", "C) Uniquement après une chute"], r: "B" },
            { q: "Que devez-vous faire avant d'utiliser votre harnais antichute ?", o: ["A) Le laver", "B) Réaliser une inspection visuelle des coutures", "C) Demander l'autorisation"], r: "B" }
        ]
    },
    "Habilitation Électrique": {
        cours: "Le courant électrique présente deux risques majeurs : l'électrisation (passage du courant dans le corps) et l'électrocution (mortelle).\n\nAvant toute intervention, il faut réaliser une consignation : Séparer, Verrouiller, VAT, Mettre à la terre.",
        questions: [
            { q: "Quelle est la différence entre électrisation et électrocution ?", o: ["A) L'électrisation est mortelle, pas l'électrocution", "B) L'électrocution entraîne obligatoirement le décès de la victime", "C) C'est la même chose"], r: "B" },
            { q: "Que signifie le sigle VAT en sécurité électrique ?", o: ["A) Vérification de l'Absence de Tension", "B) Voltage Automatique Total", "C) Véhicule d'Assistance Technique"], r: "A" },
            { q: "Quelle est la première étape d'une consignation électrique ?", o: ["A) Mettre des gants", "B) La séparation (couper l'alimentation générale)", "C) Appeler les pompiers"], r: "B" },
            { q: "Peut-on utiliser un multimètre classique pour réaliser une VAT réglementaire ?", o: ["A) Oui", "B) Non, il faut utiliser un testeur dédié (détecteur de tension) conforme", "C) Oui, en faisant attention"], r: "B" },
            { q: "Quel symbole graphique sur un outil indique qu'il est isolé pour 1000 Volts ?", o: ["A) Un triangle avec un éclair", "B) Deux triangles superposés avec la mention 1000V", "C) Un cercle rouge"], r: "B" }
        ]
    },
    "Lutte contre l'Incendie": {
        cours: "Pour qu'un feu se déclare, trois éléments doivent être réunis : un Combustible, un Comburant (oxygène) et une Énergie d'activation (chaleur). C'est le Triangle du Feu.",
        questions: [
            { q: "Quels sont les trois éléments du Triangle du Feu ?", o: ["A) Bois, Allumette, Fumée", "B) Combustible, Comburant, Énergie d'activation", "C) Eau, Vent, Terre"], r: "B" },
            { q: "En cas de début d'incendie, quelle est la toute première action ?", o: ["A) Chercher ses affaires", "B) Déclencher l'alarme et alerter", "C) Ouvrir toutes les fenêtres"], r: "B" },
            { q: "Quel extincteur est adapté pour un feu sur équipement électrique sous tension ?", o: ["A) Eau pulvérisée", "B) Dioxyde de carbone (CO2)", "C) Seau d'eau"], r: "B" },
            { q: "Où devez-vous vous rendre immédiatement après avoir évacué ?", o: ["A) Dans votre voiture", "B) Au point de rassemblement désigné", "C) À la cafétéria"], r: "B" }
        ]
    },
    "Corde & Sauvetage": {
        cours: "Les travaux d'accès par corde nécessitent une technique extrême. Le cordiste doit toujours être connecté à deux systèmes de cordes indépendants : travail et sécurité.",
        questions: [
            { q: "Quelle est la règle d'or concernant le nombre de cordes lors d'un accès difficile ?", o: ["A) Une seule corde suffit", "B) Toujours deux cordes indépendantes (travail et sécurité)", "C) Trois cordes obligatoirement"], r: "B" },
            { q: "Comment appelle-t-on le nœud le plus utilisé et le plus sûr pour s'amarrer ?", o: ["A) Le nœud de huit", "B) Le nœud de cravate", "C) Le nœud simple"], r: "A" }
        ]
    },
    "Assemblage au Mât": {
        cours: "L'assemblage de structures sur pylônes ou mâts présente des risques de chutes d'objets. Le balisage d'une zone d'exclusion au sol est obligatoire sous le mât.",
        questions: [
            { q: "Quel est le risque majeur spécifique lors du montage d'un mât en sections ?", o: ["A) Le bruit du vent", "B) L'effondrement de la structure ou la chute d'éléments lourds", "C) La surchauffe"], r: "B" },
            { q: "Quelle mesure de sécurité est obligatoire au sol au droit d'un mât ?", o: ["A) Installer une bâche", "B) Mettre en place une zone d'exclusion balisée", "C) Garer les véhicules"], r: "B" }
        ]
    },
    "Élingage": {
        cours: "L'élingage consiste à lier une charge à un appareil de levage. Inspectez le matériel avant chaque utilisation : refuser toute élingue coupée ou sans étiquette de charge (CMU).",
        questions: [
            { q: "Que signifie le sigle CMU inscrit sur une élingue ?", o: ["A) Charge Maximale Utile (le poids maximum)", "B) Contrôle Mécanique Unique", "C) Capacité de Manutention"], r: "A" },
            { q: "Quelle est l'obligation principale concernant l'étiquette d'une élingue ?", o: ["A) Couleur verte", "B) Elle doit être présente, lisible et indiquer la CMU", "C) Retirée avant le levage"], r: "B" }
        ]
    },
    "Conduite Défensive": {
        cours: "La conduite défensive est une attitude de sécurité au volant visant à anticiper les situations dangereuses. Respectez la règle des 2 secondes d'écart avec le véhicule qui précède.",
        questions: [
            { q: "Qu'est-ce que la conduite défensive ?", o: ["A) Conduire de manière agressive", "B) Anticiper les dangers et les erreurs des autres pour éviter l'accident", "C) Rouler le plus vite possible"], r: "B" },
            { q: "Quelle est la distance de sécurité minimale (en temps) à maintenir par temps sec ?", o: ["A) 0,5 seconde", "B) 2 secondes", "C) 5 secondes"], r: "B" },
            { q: "Comment doit évoluer la distance de sécurité si la chaussée est mouillée ?", o: ["A) Reste identique", "B) Doublée (passer à 4 secondes minimum)", "C) Réduite"], r: "B" },
            { q: "L'utilisation du téléphone au volant (tenu en main) multiplie le risque d'accident par :", o: ["A) 1,5", "B) 3", "C) 10"], r: "B" }
        ]
    },
    "Opérateur de Machines": {
        cours: "L'utilisation de machines industrielles présente des risques d'accidents graves. Les carters de protection et les boutons d'arrêt d'urgence ne doivent jamais être retirés.",
        questions: [
            { q: "Quel est le risque principal lors de l'utilisation d'une machine avec des pièces en rotation ?", o: ["A) Risque de poussière", "B) Risque d'entraînement, de happement ou de sectionnement", "C) Surchauffe"], r: "B" },
            { q: "Peut-on retirer un carter de protection pour travailler plus vite ?", o: ["A) Oui", "B) Non, il est strictement interdit de neutraliser un dispositif de sécurité", "C) Si le chef est d'accord"], r: "B" }
        ]
    }
};
