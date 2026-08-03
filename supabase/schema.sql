-- ============================================================
--  Schéma Supabase — Plateforme Bac Pro Logistique
--  Tables : scenarios, profiles
--  RLS activé, trigger updated_at
--  Isolation : la colonne project_id permet de partager la base
--  avec d'autres applications tout en isolant les scénarios.
--  Valeur par défaut pour ce projet : 'bac-pro-log'.
-- ============================================================

-- Table des scénarios pédagogiques
CREATE TABLE IF NOT EXISTS scenarios (
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
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    project_id TEXT NOT NULL DEFAULT 'bac-pro-log',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes pour les requêtes fréquentes
CREATE INDEX IF NOT EXISTS idx_scenarios_niveau ON scenarios(niveau);
CREATE INDEX IF NOT EXISTS idx_scenarios_auteur ON scenarios(auteur);
CREATE INDEX IF NOT EXISTS idx_scenarios_user_id ON scenarios(user_id);
CREATE INDEX IF NOT EXISTS idx_scenarios_created_at ON scenarios(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_scenarios_project_id ON scenarios(project_id);

-- Table des profils utilisateurs (liée à auth.users)
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    nom TEXT,
    prenom TEXT,
    lycee TEXT,
    academie TEXT,
    etablissement TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger pour mettre à jour updated_at sur profiles
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_scenarios_updated_at ON scenarios;
CREATE TRIGGER update_scenarios_updated_at
    BEFORE UPDATE ON scenarios
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
--  Row Level Security (RLS)
-- ============================================================

ALTER TABLE scenarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Droits d'accès au Data API pour les rôles anon et authenticated.
-- Nécessaire car les nouvelles tables ne sont pas toujours automatiquement
-- exposées via l'API REST selon les paramètres Data API du projet.
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON scenarios TO authenticated;
GRANT INSERT, UPDATE, DELETE ON scenarios TO authenticated;
GRANT SELECT, UPDATE ON profiles TO authenticated;

-- Scenarios : lecture reservee aux utilisateurs authentifies du projet courant
DROP POLICY IF EXISTS "Scenarios visibles par projet" ON scenarios;
CREATE POLICY "Scenarios visibles par projet"
ON scenarios FOR SELECT
TO authenticated
USING (project_id = 'bac-pro-log');

-- Scenarios : création réservée aux utilisateurs authentifiés du projet courant
DROP POLICY IF EXISTS "Creation de scenarios authentifiee" ON scenarios;
CREATE POLICY "Creation de scenarios authentifiee"
ON scenarios FOR INSERT
TO authenticated
WITH CHECK (project_id = 'bac-pro-log');

-- Scenarios : modification par l'auteur uniquement, dans le projet courant
DROP POLICY IF EXISTS "Modification par l'auteur" ON scenarios;
CREATE POLICY "Modification par l'auteur"
ON scenarios FOR UPDATE
TO authenticated
USING (auth.uid() = user_id AND project_id = 'bac-pro-log')
WITH CHECK (auth.uid() = user_id AND project_id = 'bac-pro-log');

-- Scenarios : suppression par l'auteur uniquement, dans le projet courant
DROP POLICY IF EXISTS "Suppression par l'auteur" ON scenarios;
CREATE POLICY "Suppression par l'auteur"
ON scenarios FOR DELETE
TO authenticated
USING (auth.uid() = user_id AND project_id = 'bac-pro-log');

-- Profiles : lecture par soi-même
DROP POLICY IF EXISTS "Profil visible par soi-meme" ON profiles;
CREATE POLICY "Profil visible par soi-meme"
ON profiles FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- Profiles : modification par soi-même
DROP POLICY IF EXISTS "Profil modifiable par soi-meme" ON profiles;
CREATE POLICY "Profil modifiable par soi-meme"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Fonction trigger pour créer automatiquement le profil à l'inscription
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, nom, prenom)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'nom', ''),
        COALESCE(NEW.raw_user_meta_data->>'prenom', '')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
