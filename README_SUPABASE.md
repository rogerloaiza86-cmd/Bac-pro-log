# 🚀 Migration vers Supabase - Guide Complet

## 📋 Table des matières
1. [Pourquoi Supabase ?](#pourquoi-supabase-)
2. [Architecture](#architecture)
3. [Installation pas à pas](#installation-pas-à-pas)
4. [Configuration Vercel](#configuration-vercel)
5. [Migration des données](#migration-des-données)
6. [Fonctionnalités ajoutées](#fonctionnalités-ajoutées)

---

## Pourquoi Supabase ?

### 📊 Comparaison avant/après

| Fonctionnalité | Avant (localStorage) | Après (Supabase) |
|---------------|---------------------|------------------|
| **Persistance** | ❌ Perdu si cache vidé | ✅ Permanent |
| **Partage** | ❌ Un seul utilisateur | ✅ Multi-utilisateurs |
| **Auth** | ❌ Aucune | ✅ Email, Google, etc. |
| **Backup** | ❌ Export manuel | ✅ Automatique |
| **Real-time** | ❌ F5 pour actualiser | ✅ Mises à jour live |
| **Sécurité** | ⚠️ Client-side uniquement | ✅ Server-side + RLS |
| **Quota** | ~5 Mo | 500 Mo (gratuit) |

---

## Architecture

```
┌─────────────────┐     ┌──────────────┐     ┌─────────────────┐
│   Navigateur    │────▶│   Vercel     │────▶│   Supabase      │
│   (Frontend)    │◀────│   (Static)   │◀────│   (PostgreSQL)  │
└─────────────────┘     └──────────────┘     └─────────────────┘
        │                                               │
        │         ┌──────────────────────┐              │
        └────────▶│  Auth (JWT Tokens)   │◀─────────────┘
                  └──────────────────────┘
```

---

## Installation pas à pas

### Étape 1 : Créer le projet Supabase (5 min)

1. Allez sur [https://supabase.com](https://supabase.com)
2. Créez un compte (gratuit)
3. Cliquez **"New Project"**
4. Configuration :
   - **Name** : `bac-pro-logistique`
   - **Database Password** : Générez-en un fort (gardez-le !)
   - **Region** : `West Europe (Belgium)` (le plus proche de la France)
5. Attendez ~2 minutes

### Étape 2 : Créer les tables (3 min)

1. Dans le dashboard Supabase, allez dans **SQL Editor**
2. Cliquez **"New query"**
3. Copiez-collez le SQL de `SUPABASE_INTEGRATION.md` (section Étape 2)
4. Cliquez **"Run"**

✅ Vos tables sont créées avec les politiques de sécurité !

### Étape 3 : Récupérer les clés (2 min)

1. Allez dans **Settings** > **API**
2. Copiez :
   - `Project URL` : `https://xxxxx.supabase.co`
   - `anon public` : `eyJhbG...` (clé publique)
   - `service_role` : `eyJhbG...` (⚠️ **secrète**, pour migration uniquement)

### Étape 4 : Configurer l'application (3 min)

**Option A - Fichier local (développement)** :

Créez `supabase-config.js` :
```javascript
window.ENV = {
    SUPABASE_URL: 'https://votre-projet.supabase.co',
    SUPABASE_ANON_KEY: 'votre-clé-publique-ici'
};
```

**Option B - Variables d'environnement (production)** :

Dans Vercel :
```
SUPABASE_URL = https://votre-projet.supabase.co
SUPABASE_ANON_KEY = votre-clé-publique-ici
```

### Étape 5 : Modifier index.html

Ajoutez avant `app.js` :
```html
<!-- Supabase -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="supabase-config.js"></script>

<!-- Application -->
<script src="app-supabase.js"></script>
```

---

## Configuration Vercel

### 1. Variables d'environnement

Dans votre projet Vercel :
- **Settings** > **Environment Variables**
- Ajoutez :
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`

### 2. Redéployer

```bash
git add .
git commit -m "feat: intégration Supabase"
git push origin master
```

---

## Migration des données

### Méthode 1 : Script Node.js (recommandé)

1. Installez le client Supabase :
```bash
npm install @supabase/supabase-js
```

2. Configurez les variables d'environnement :
```bash
export SUPABASE_URL="https://votre-projet.supabase.co"
export SUPABASE_SERVICE_KEY="votre-clé-service"
```

3. Exécutez la migration :
```bash
node migrate-to-supabase.js
```

### Méthode 2 : SQL Direct

Dans Supabase SQL Editor :
```sql
INSERT INTO scenarios (titre, entreprise, niveau, problematique, description, competences, duree, auteur) 
VALUES 
('Premier jour sur le quai', 'FM Logistic', 'seconde', 'Comment se repérer...', 'Description...', ARRAY['C1.1', 'C3.1'], '3h', 'Roger Loaiza Soto'),
('Alerte sur le quai 7', 'Geodis', 'seconde', 'Comment appliquer...', 'Description...', ARRAY['C1.2'], '2h', 'Roger Loaiza Soto');
-- etc...
```

---

## Fonctionnalités ajoutées

### 🔐 Authentification
- **Inscription** email/mot de passe
- **Connexion** sécurisée
- **Profil utilisateur** (nom, prénom, établissement)
- **Déconnexion**

### 👤 Gestion des scénarios
- **Création** : Associée à l'utilisateur connecté
- **Modification** : Uniquement par l'auteur
- **Suppression** : Uniquement par l'auteur
- **Visualisation** : Publique pour tous

### 🔄 Temps réel
Les scénarios se mettent à jour automatiquement quand :
- Quelqu'un ajoute un scénario
- Quelqu'un modifie un scénario
- Quelqu'un supprime un scénario

### 📊 Statistiques (à venir)
- Nombre de vues par scénario
- Scénarios les plus populaires
- Contributeurs actifs

---

## 🔒 Sécurité

### Row Level Security (RLS)
Les politiques configurées garantissent :
- ✅ Lecture publique des scénarios
- ✅ Création uniquement si authentifié
- ✅ Modification/suppression uniquement par l'auteur
- ✅ Protection contre les injections SQL

### Bonnes pratiques
- 🔑 Ne jamais exposer la `service_role key` côté client
- 🔑 Utiliser uniquement la `anon key` dans le frontend
- 🔑 Activer l'authentification par email de confirmation
- 🔑 Limiter les requêtes par IP (rate limiting)

---

## 💰 Coûts

| Plan | Prix | Limites |
|------|------|---------|
| **Free** | 0€ | 500 Mo DB, 2 Go stockage, 100k req/jour |
| **Pro** | 25$/mois | 8 Go DB, 100 Go stockage, illimité |

**Pour votre usage** : Le plan gratuit suffit largement pour :
- ~10 000 scénarios
- ~500 utilisateurs
- Photos et documents

---

## 🆘 Dépannage

### "Erreur de connexion à Supabase"
- Vérifiez l'URL et la clé
- Vérifiez que le projet n'est pas en pause (Supabase met en pause les projets inactifs après 7 jours)

### "Permission denied"
- Vérifiez que RLS est activé sur les tables
- Vérifiez les politiques dans Supabase > Authentication > Policies

### "Table not found"
- Vérifiez que vous avez exécuté le SQL de création des tables
- Rafraîchissez le schéma dans Supabase (bouton refresh)

---

## 📚 Ressources

- [Documentation Supabase](https://supabase.com/docs)
- [Guide Auth](https://supabase.com/docs/guides/auth)
- [Guide Database](https://supabase.com/docs/guides/database)

---

## ✅ Checklist de migration

- [ ] Projet Supabase créé
- [ ] Tables créées avec SQL
- [ ] RLS activé avec politiques
- [ ] Clés API récupérées
- [ ] Variables d'environnement configurées sur Vercel
- [ ] `index.html` modifié avec SDK Supabase
- [ ] `app-supabase.js` en place
- [ ] Données migrées (58 scénarios)
- [ ] Test création de compte
- [ ] Test création de scénario
- [ ] Test modification/suppression

**Une fois tout coché, votre application est prête !** 🎉
