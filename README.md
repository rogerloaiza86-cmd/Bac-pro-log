# Plateforme Collaborative — Bac Pro Métiers de la Logistique

Plateforme collaborative de mutualisation des scénarios pédagogiques pour le Bac Pro Métiers de la Logistique — Référentiel 2025.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Déploiement

L'application est automatiquement déployée sur GitHub Pages via GitHub Actions.

### URL de production
👉 **https://rogerloaiza86-cmd.github.io/Bac-pro-log/**

### Activer GitHub Pages (première fois)

1. Aller sur le repository GitHub : https://github.com/rogerloaiza86-cmd/Bac-pro-log
2. Cliquer sur **Settings** → **Pages** (dans le menu de gauche)
3. Dans **Source**, sélectionner **GitHub Actions**
4. Le déploiement se lance automatiquement à chaque push sur `main`

### Déclencher un déploiement manuel

1. Aller sur l'onglet **Actions** du repository
2. Cliquer sur le workflow **"Deploy to GitHub Pages"**
3. Cliquer sur **Run workflow** → **Run workflow**

## 🛠️ Technologies

- HTML5 / CSS3 / JavaScript vanilla
- LocalStorage pour la persistance des données
- Google Fonts (Lexend)
- Material Symbols (icônes)

## ✨ Fonctionnalités

- 📚 Consultation des scénarios pédagogiques par niveau (Seconde, Première, Terminale)
- 🔍 Recherche et filtrage par compétences
- ➕ Ajout de nouveaux scénarios
- 👁️ Visualisation détaillée des scénarios (modal)
- 🏆 Classement des meilleurs contributeurs
- 📊 Statistiques de couverture du référentiel

## 📁 Structure

```
.
├── index.html          # Page principale
├── app.js              # Logique applicative
├── styles.css          # Styles
├── .github/
│   └── workflows/
│       └── deploy.yml  # Workflow GitHub Actions
└── README.md
```

## 📝 Notes

Les données sont stockées dans le `localStorage` du navigateur. Chaque utilisateur a ses propres données en local. Pour une synchronisation entre appareils, une base de données backend serait nécessaire.

## 👨‍💻 Auteur

**Roger LOAIZA SOTO** — Professeur de Logistique, Académie de Versailles
