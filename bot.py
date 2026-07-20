import time

# ==========================================
# 1. CONTENU DE LA FORMATION (À compléter)
# ==========================================
FORMATION_DATA = {
    "Module 1: Introduction au HSE": {
        "cours": "Le HSE signifie Hygiène, Sécurité et Environnement. C'est une priorité absolue en entreprise.",
        "questions": [
            {
                "question": "Que signifie le sigle HSE ?",
                "options": ["A) Hygiène, Sécurité, Environnement", "B) Histoire, Science, Évolution"],
                "reponse": "A"
            }
        ]
    }
}

# ==========================================
# 2. LOGIQUE DU ROBOT
# ==========================================
def lancer_bot():
    print("[+] Initialisation du Bot HSE...")
    time.sleep(1)
    print("[+] Le robot est désormais actif et en cours d'exécution.\n")
    
    # Présentation des modules disponibles
    print("--- BIENVENUE DANS VOTRE FORMATION HSE ---")
    for module in FORMATION_DATA.keys():
        print(f"[-] {module}")
    print("------------------------------------------\n")

    # Boucle d'attente
    while True:
        print("[Pas de tâche] En attente d'instructions...")
        time.sleep(5)

if __name__ == "__main__":
    try:
        lancer_bot()
    except KeyboardInterrupt:
        print("\n[-] Arrêt du robot.")
