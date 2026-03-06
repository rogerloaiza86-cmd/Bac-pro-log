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
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour les performances
CREATE INDEX idx_scenarios_niveau ON scenarios(niveau);
CREATE INDEX idx_scenarios_auteur ON scenarios(auteur);
CREATE INDEX idx_scenarios_user_id ON scenarios(user_id);

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

-- Politique : Lecture publique des scénarios
CREATE POLICY "Scénarios visibles par tous" 
ON scenarios FOR SELECT 
USING (true);

-- Politique : Création uniquement par utilisateurs authentifiés
CREATE POLICY "Création de scénarios authentifiée" 
ON scenarios FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

-- Politique : Modification uniquement par l'auteur
CREATE POLICY "Modification par l'auteur" 
ON scenarios FOR UPDATE 
USING (auth.uid() = user_id);

-- Politique : Suppression uniquement par l'auteur
CREATE POLICY "Suppression par l'auteur" 
ON scenarios FOR DELETE 
USING (auth.uid() = user_id);

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
   - **anon public** : `eyJhbG...` (clé publique)

---

## 🔧 Étape 4 : Configuration du projet

Créez un fichier `supabase-config.js` :

```javascript
// SUPABASE CONFIGURATION
// Remplacez ces valeurs par les vôtres

const SUPABASE_CONFIG = {
    URL: 'https://votre-projet.supabase.co',
    ANON_KEY: 'eyJhbGciOiJIUzI1NiIs...votre-clé-publique'
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

## ✅ Avantages après migration

| Avant | Après Supabase |
|-------|----------------|
| Données locales uniquement | Données partagées entre utilisateurs |
| Pas d'authentification | Auth sécurisée avec email/social |
| Risque de perte de données | Persistance garantie |
| Un seul utilisateur par navigateur | Multi-utilisateurs |
| Pas de backup automatique | Backup automatique Supabase |
| Limité à ~5 Mo | 500 Mo en gratuit |

---

## 🚀 Prochaines étapes

Une fois configuré, vous pourrez :
1. ✅ Ajouter l'authentification (login/register)
2. ✅ Système de favoris par utilisateur
3. ✅ Commentaires sur les scénarios
4. ✅ Historique des modifications
5. ✅ Statistiques globales (vues, likes)

**Voulez-vous que je modifie `app.js` pour intégrer Supabase maintenant ?** 🛠️
