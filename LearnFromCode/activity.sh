#!/bin/bash

# Configuration
DAYS=180                              # Nombre de jours (6 mois = 180 jours)
REPO_PATH="."                         # Chemin du dépôt Git local
BRANCH="main"                         # Branche sur laquelle pousser les commits

# Liste des messages de commit pour la randomisation
MESSAGES=(
    "Progress on FreeCodeCamp 🚀"
    "Learning new math concepts 📐"
    "Advancing on Udemy course 🎓"
    "Experimenting with Python scripts 🐍"
    "Improving HTML/CSS skills 🌐"
    "Working on JavaScript challenges 💻"
    "Studying Git and GitHub fundamentals 📘"
    "Exploring React and front-end development 🌟"
    "Taking notes on algorithms and data structures 📝"
    "Building projects in web development 💼"
    "Practicing Japanese language skills 🇯🇵📖"
    "Studying English vocabulary and grammar 🇬🇧📝"
    "Reviewing kanji and hiragana for Japanese learning 📚🇯🇵"
    "Improving English listening and comprehension skills 🎧🇬🇧"
    "Learning conversational Japanese phrases 🗣️🇯🇵"
)

# Vérification du dépôt Git
cd "$REPO_PATH" || { echo "Erreur : le chemin du dépôt est invalide."; exit 1; }
if [ ! -d .git ]; then
    echo "Erreur : Ce dossier n'est pas un dépôt Git."
    exit 1
fi

# Création d'un fichier temporaire pour les commits
TEMP_FILE="learn_journal.txt"
touch "$TEMP_FILE"

echo "Début de la simulation d'activité sur GitHub..."

# Boucle sur chaque jour des 6 derniers mois
for i in $(seq 0 $((DAYS - 1))); do
    # Calculer la date (aujourd'hui - i jours)
    DATE=$(date -d "-$i days" "+%Y-%m-%d")

    # Déterminer un nombre aléatoire de commits pour ce jour (entre 1 et 5)
    COMMITS_PER_DAY=$((RANDOM % 5 + 1))

    # Répéter les commits pour ce jour
    for j in $(seq 1 $COMMITS_PER_DAY); do
        # Générer un message aléatoire parmi la liste
        RANDOM_INDEX=$((RANDOM % ${#MESSAGES[@]}))
        COMMIT_MESSAGE="${MESSAGES[$RANDOM_INDEX]}"

        # Modifier le fichier temporaire pour simuler une modification
        echo "$DATE - Commit $j" >> "$TEMP_FILE"

        # Ajouter et committer avec des dates simulées et un message aléatoire
        git add "$TEMP_FILE"
        GIT_AUTHOR_DATE="$DATE 12:00:00" GIT_COMMITTER_DATE="$DATE 12:00:00" \
        git commit -m "$COMMIT_MESSAGE"
    done
done

# Pousser les commits sur la branche spécifiée
git push origin "$BRANCH"

echo "Simulation terminée ! Les commits sont visibles sur GitHub."
