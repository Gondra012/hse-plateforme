import time
from donnees import FORMATION_DATA

def lancer_bot():
    print("[+] Initialisation du Bot HSE...")
    time.sleep(1)
    print("[+] Le robot est désormais actif et en cours d'exécution.\n")
    
    print("==================================================")
    print("--- BIENVENUE DANS VOTRE APPLICATION HSE ---")
    print("        Utilisateur : TAGO DOMINIQUE              ")
    print("==================================================\n")
    
    # Dictionnaires pour stocker les résultats de Dominique
    resultats_formation = {}
    score_global_total = 0
    questions_global_total = 0
    
    # Parcours des 8 modules réels de la capture d'écran
    for nom_module, donnees in FORMATION_DATA.items():
        print(f"\n==================================================")
        print(f"DÉBUT DU MODULE : {nom_module}")
        print(f"==================================================\n")
        
        # 1. AFFICHAGE DU COURS
        print(donnees["cours"])
        print("\n--------------------------------------------------")
        input("[Prenez le temps de bien lire. Appuyez sur ENTRÉE pour lancer le quiz...]")
        print("--------------------------------------------------\n")
        
        # 2. LANCEMENT DU QUESTIONNAIRE (20 questions)
        score_module = 0
        total_questions_module = len(donnees["questions"])
        
        for i, q in enumerate(donnees["questions"], 1):
            print(f"\nQuestion {i}/{total_questions_module}: {q['question']}")
            for opt in q["options"]:
                print(opt)
                
            # Forcer une entrée valide
            choix_utilisateur = ""
            while choix_utilisateur not in ["A", "B", "C"]:
                choix_utilisateur = input("Votre réponse (A, B ou C) : ").strip().upper()
            
            # Vérification de la réponse
            if choix_utilisateur == q["reponse"]:
                print("[✔] Correct !")
                score_module += 1
            else:
                print(f"[✘] Incorrect. La bonne réponse était la {q['reponse']}.")
                
            time.sleep(0.3)
            
        # Enregistrement des statistiques du module
        resultats_formation[nom_module] = score_module
        score_global_total += score_module
        questions_global_total += total_questions_module
        
        print(f"\n--- FIN DU MODULE : {nom_module} ---")
        print(f"Score obtenu : {score_module} / {total_questions_module}")
        input("\n[Appuyez sur ENTRÉE pour valider et passer au module suivant...]")

    # ==================================================
    # 3. RAPPORT DE FORMATION FINAL DE TAGO DOMINIQUE
    # ==================================================
    print("\n\n==================================================")
    print("       RAPPORT DE FORMATION FINAL : HSE-BOT       ")
    print("==================================================")
    print("Candidat : TAGO DOMINIQUE\n")
    print("Détails des scores par module :")
    
    for mod, sc in resultats_formation.items():
        print(f" - {mod} : {sc} / 20")
        
    print("--------------------------------------------------")
    pourcentage = round((score_global_total / questions_global_total) * 100, 2)
    print(f"SCORE GLOBAL FINAL : {score_global_total} / {questions_global_total} ({pourcentage}%)")
    
    # Mention de réussite
    if pourcentage >= 75:
        print("RÉSULTAT : [FÉLICITATIONS] Certification HSE validée avec succès !")
    else:
        print("RÉSULTAT : [ÉCHEC] Score insuffisant. Un score de 75% est requis pour la validation.")
    print("==================================================")

if __name__ == "__main__":
    try:
        lancer_bot()
    except KeyboardInterrupt:
        print("\n[-] Arrêt forcé du robot.")
