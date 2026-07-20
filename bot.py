import time

# ==========================================
# 1. CONTENU DE LA FORMATION
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
    
    print("--- BIENVENUE DANS VOTRE FORMATION HSE ---")
    
    # Pour chaque module, on affiche le cours
    for nom_module, donnees in FORMATION_DATA.items():
        print(f"\n=== {nom_module} ===")
        print(donnees["cours"])
        
        # Le robot attend que l'utilisateur appuie sur Entrée pour continuer
        input("\n[Appuyez sur ENTRÉE pour commencer le questionnaire...]")
        
    print("\n[+] Fin de la session de formation.")

if __name__ == "__main__":
    try:
        lancer_bot()
    except KeyboardInterrupt:
        print("\n[-] Arrêt du robot.")
