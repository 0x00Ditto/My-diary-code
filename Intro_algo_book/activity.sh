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

for i in $(seq 0 $((DAYS - 1))); do
    DATE=$(date -d "-$i days" "+%Y-%m-%d") || DATE=$(gdate -d "-$i days" "+%Y-%m-%d") # Compatible GNU date
    COMMITS_PER_DAY=$((RANDOM % 5 + 1))  # Nombre aléatoire de commits par jour

    for j in $(seq 1 $COMMITS_PER_DAY); do
        RANDOM_INDEX=$((RANDOM % ${#MESSAGES[@]}))
        COMMIT_MESSAGE="${MESSAGES[$RANDOM_INDEX]}"
        echo "$DATE - Commit $j" >> "$TEMP_FILE"

        git add "$TEMP_FILE"
        GIT_AUTHOR_DATE="$DATE 12:00:00" GIT_COMMITTER_DATE="$DATE 12:00:00" \
        git commit -m "$COMMIT_MESSAGE"
    done
done

git push origin "$BRANCH"

echo "Simulation terminée ! Les commits sont visibles sur GitHub."
