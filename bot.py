import time

def lancer_bot():
    print("[+] Initialisation du Bot HSE...")
    time.sleep(1)
    print("[+] Le robot est désormais actif et en cours d'exécution.")
    
    # Votre logique d'automatisation ira ici
    while True:
        print("[Pas de tâche] En attente d'instructions...")
        time.sleep(5)

if __name__ == "__main__":
    try:
        lancer_bot()
    except KeyboardInterrupt:
        print("\n[-] Arrêt du robot.")
