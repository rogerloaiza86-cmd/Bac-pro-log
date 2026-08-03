// ============================================================
// Configuration Supabase pour le frontend
// La clé anon (publishable) est publique par conception — la sécurité
// repose sur les politiques RLS côté base de données.
// Ne jamais exposer la clé service_role ici.
// ============================================================

(function () {
    'use strict';

    // Vercel peut injecter window.ENV via un script d'environnement.
    // Sinon, on utilise les valeurs par défaut (clé anon publique).
    const env = window.ENV || {};

    const SUPABASE_URL = env.SUPABASE_URL || 'https://fbsomoubwvgtalomzyoa.supabase.co';
    const SUPABASE_ANON_KEY = env.SUPABASE_ANON_KEY || 'sb_publishable_w2QZOqAzqxQ3ggBlBg8A9Q_xk-pHMGh';
    const SUPABASE_PROJECT_ID = env.SUPABASE_PROJECT_ID || 'bac-pro-log';

    window.SUPABASE_CONFIG = { SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_PROJECT_ID };
})();
