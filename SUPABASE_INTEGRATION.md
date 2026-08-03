# 🔌 Guide d'Intégration Supabase

## 📋 Prérequis

1. Compte Supabase (gratuit) : https://supabase.com
2. Projet Supabase créé
3. URL et clé API du projet

---

## 🚀 Étape 1 : Créer le projet Supabase

1. Allez sur https://supabase.com
2. Cliquez sur "New Project"
3. Nommez-le : `bac-pro-logistique`
4. Choisissez la région la plus proche (Europe West pour la France)
5. Attendez la fin de la création (~2 min)

---

## 🗄️ Étape 2 : Créer les tables (SQL)

Dans le SQL Editor de Supabase, exécutez :

```sql
-- Table des scénarios
CREATE TABLE scenarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titre TEXT NOT NULL,
    entreprise TEXT,
    niveau TEXT NOT NULL CHECK (niveau IN ('seconde', 'premiere', 'terminale')),
    problematique TEXT NOT NULL,
    description TEXT,
    mise_en_situation TEXT,
    magasin_pedagogique TEXT,
    competences TEXT[] NOT NULL DEFAULT '{}',
    duree TEXT DEFAULT '2h',
    auteur TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id),
    project_id TEXT NOT NULL DEFAULT 'bac-pro-log',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour les performances
CREATE INDEX idx_scenarios_niveau ON scenarios(niveau);
CREATE INDEX idx_scenarios_auteur ON scenarios(auteur);
CREATE INDEX idx_scenarios_user_id ON scenarios(user_id);
CREATE INDEX idx_scenarios_project_id ON scenarios(project_id);

-- Table des utilisateurs (profils)
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    nom TEXT,
    prenom TEXT,
    etablissement TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Politiques de sécurité (RLS)
ALTER TABLE scenarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Droits d'accès au Data API (nécessaire selon les paramètres du projet)
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON scenarios TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON scenarios TO authenticated;

-- Politique : Lecture publique des scénarios du projet courant
CREATE POLICY "Scénarios visibles par projet" 
ON scenarios FOR SELECT 
TO anon, authenticated
USING (project_id = 'bac-pro-log');

-- Politique : Création uniquement par utilisateurs authentifiés du projet courant
CREATE POLICY "Création de scénarios authentifiée" 
ON scenarios FOR INSERT 
TO authenticated
WITH CHECK (project_id = 'bac-pro-log');

-- Politique : Modification uniquement par l'auteur, dans le projet courant
CREATE POLICY "Modification par l'auteur" 
ON scenarios FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id AND project_id = 'bac-pro-log')
WITH CHECK (auth.uid() = user_id AND project_id = 'bac-pro-log');

-- Politique : Suppression uniquement par l'auteur, dans le projet courant
CREATE POLICY "Suppression par l'auteur" 
ON scenarios FOR DELETE 
TO authenticated
USING (auth.uid() = user_id AND project_id = 'bac-pro-log');

-- Politique profil : Lecture par l'utilisateur
CREATE POLICY "Profil visible par soi-même" 
ON profiles FOR SELECT 
USING (auth.uid() = id);

-- Politique profil : Modification par l'utilisateur
CREATE POLICY "Profil modifiable par soi-même" 
ON profiles FOR UPDATE 
USING (auth.uid() = id);

-- Trigger pour mettre à jour updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_scenarios_updated_at 
    BEFORE UPDATE ON scenarios 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
```

---

## ⚙️ Étape 3 : Récupérer les clés API

1. Dans Supabase, allez dans **Settings** > **API**
2. Copiez :
   - **Project URL** : `https://xxxxxxxx.supabase.co`
   - **anon public** : `eyJhb...` (clé publique)
   - **service_role** : `eyJhb...` (clé secrète, pour la migration uniquement)

---

## 🔧 Étape 4 : Configuration du projet

Créez un fichier `supabase-config.js` :

```javascript
// SUPABASE CONFIGURATION
// Remplacez ces valeurs par les vôtres

const SUPABASE_CONFIG = {
    URL: 'https://votre-projet.supabase.co',
    ANON_KEY: 'eyJhbGciOiJIUzI1NiIs...votre-clé-publique',
    PROJECT_ID: 'bac-pro-log'
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
}
```

**⚠️ IMPORTANT** : 
- Ne commitez jamais ce fichier avec les vraies clés sur GitHub public
- Ajoutez-le au `.gitignore` après configuration
- Pour Vercel, utilisez les **Environment Variables**

---

## 🔐 Étape 5 : Variables d'environnement (Vercel)

Dans votre projet Vercel :

1. Allez dans **Settings** > **Environment Variables**
2. Ajoutez :
   - `SUPABASE_URL` = `https://votre-projet.supabase.co`
   - `SUPABASE_ANON_KEY` = `votre-clé-publique`
   - `SUPABASE_PROJECT_ID` = `bac-pro-log`

---

## 📦 Étape 6 : Installation du SDK

Ajoutez dans `index.html` (avant `app.js`) :

```html
<!-- Supabase SDK -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

---

## 🔄 Migration des données

Pour migrer vos 58 scénarios existants :

1. Exportez-les en JSON depuis l'application actuelle
2. Dans Supabase SQL Editor :

```sql
-- Insérer les scénarios existants (exemple)
INSERT INTO scenarios (titre, entreprise, niveau, problematique, description, competences, duree, auteur) 
VALUES 
('Premier jour sur le quai', 'FM Logistic', 'seconde', 'Comment se repérer...', 'Description...', ARRAY['C1.1', 'C3.1'], '3h', 'Roger Loaiza Soto'),
-- Ajoutez les autres ici...
;
```

---

## 🔒 Isolation multi-projets

Le schéma inclut une colonne `project_id` (valeur par défaut `bac-pro-log`). Cela permet de partager une base Supabase avec d'autres applications tout en isolant les scénarios :
- Les politiques RLS filtrent automatiquement sur `project_id = 'bac-pro-log'`.
- L'application frontend injecte `project_id` dans chaque requête.
- Pour un autre projet, changez la valeur de `SUPABASE_PROJECT_ID` et adaptez les politiques RLS.

**⚠️ Important :** si les deux projets doivent être totalement isolés, utilisez des projets Supabase distincts ou des schémas Postgres séparés. Le `project_id` est une étiquette de filtrage, pas une barrière de sécurité absolue si les mêmes clés API sont partagées.

---

## ✅ Avantages après migration

| Avant | Après Supabase |
|-------|----------------|
| Données locales uniquement | Données partagées entre utilisateurs |
| Pas d'authentification | Auth sécurisée avec email/social |
| Risque de perte de données | Persistance garantie |
| Un seul utilisateur par navigateur | Multi-utilisateurs |
| Pas de backup automatique | Backup automatique Supabase |
| Limité à ~5 Mo | 500 Mo en gratuit |
| Un seul projet possible | Isolation multi-projets par `project_id` |

---

## 🚀 Prochaines étapes

Une fois configuré, vous pourrez :
1. ✅ Ajouter l'authentification (login/register)
2. ✅ Système de favoris par utilisateur
3. ✅ Commentaires sur les scénarios
4. ✅ Historique des modifications
5. ✅ Statistiques globales (vues, likes)

**Voulez-vous que je modifie `app.js` pour intégrer Supabase maintenant ?** 🛠️
