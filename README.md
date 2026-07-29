# Plateforme Collaborative — Bac Pro Métiers de la Logistique

Plateforme collaborative de mutualisation des scénarios pédagogiques pour le Bac Pro Métiers de la Logistique — Référentiel 2025.

![Version](https://img.shields.io/badge/version-5.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Architecture

- **Frontend** : HTML5 / CSS3 / JavaScript vanilla, hébergé sur **Vercel**
- **Backend / Base de données** : **Supabase** (PostgreSQL + Auth)
- **Déploiement** : GitHub → Vercel (déploiement automatique à chaque push)

## 🛠️ Technologies

- HTML5 / CSS3 / JavaScript vanilla
- Supabase (`@supabase/supabase-js`)
- Google Fonts (Lexend)
- Material Symbols (icônes)
- PostgreSQL (via Supabase)

## ✨ Fonctionnalités

- 📚 Consultation des scénarios pédagogiques par niveau (Seconde, Première, Terminale)
- 🔍 Recherche et filtrage par compétences
- ➕ Ajout de nouveaux scénarios (authentification requise)
- ✏️ Suppression de ses propres scénarios
- 👁️ Visualisation détaillée des scénarios (modal)
- 🔐 Authentification par email / mot de passe (Supabase Auth)
- 🏆 Classement des meilleurs contributeurs
- 📊 Statistiques de couverture du référentiel

## 📁 Structure

```
.
├── index.html                 # Page principale
├── app.js                     # Logique applicative (router, rendu, Supabase)
├── styles.css                 # Styles et design system
├── supabase-config.js         # Configuration Supabase (placeholders)
├── export-import.js           # Export JSON local
├── supabase/
│   └── schema.sql             # Schéma PostgreSQL + RLS
├── scripts/
│   └── migrate-scenarios.js   # Migration initiale des 58 scénarios
├── data/
│   └── sample-scenarios.json  # Scénarios de démonstration
├── .env.example               # Variables d'environnement
├── vercel.json                # En-têtes de sécurité (CSP)
└── README.md
```

## ⚙️ Configuration locale

1. **Copier le fichier d'environnement**
   ```bash
   cp .env.example .env
   ```

2. **Remplir les variables** dans `.env` :
   - `SUPABASE_URL` : URL du projet Supabase
   - `SUPABASE_ANON_KEY` : clé publique `anon`
   - `DATABASE_URL` : connection string PostgreSQL (pour la migration)

3. **Installer les dépendances**
   ```bash
   npm install
   ```

4. **Lancer un serveur local**
   ```bash
   npm run serve
   ```

## 🗄️ Initialiser la base de données

1. Exécuter le SQL dans `supabase/schema.sql` dans l'éditeur SQL de Supabase.
2. Migrer les scénarios d'exemple :
   ```bash
   npm run migrate
   ```

## 🔐 Configuration Vercel

Dans les **Environment Variables** du projet Vercel :

| Variable | Valeur |
|----------|--------|
| `SUPABASE_URL` | `https://votre-projet.supabase.co` |
| `SUPABASE_ANON_KEY` | `eyJ...` (clé publique) |

> La clé `anon` est publique par nature (elle est envoyée au navigateur), mais ne la mettez pas dans un repo public si vous souhaitez éviter le spam.

## 📝 Notes

- Les données sont maintenant persistantes dans **Supabase** et partagées entre les utilisateurs.
- L'authentification est requise pour publier ou supprimer un scénario.
- Les politiques RLS (Row Level Security) garantissent qu'un utilisateur ne peut modifier ou supprimer que ses propres scénarios.

## 👨‍💻 Auteur

**Roger LOAIZA SOTO** — Professeur de Logistique, Académie de Versailles
