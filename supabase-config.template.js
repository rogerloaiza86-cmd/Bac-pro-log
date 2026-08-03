// ============================================================
// Configuration Supabase pour le frontend
// Les valeurs sont injectées depuis les variables d'environnement
// Vercel au moment du build (window.ENV) ou depuis les placeholders.
// ============================================================

(function () {
    'use strict';

    // Vercel injecte window.ENV via un script d'environnement si configuré.
    const env = window.ENV || {};

    const SUPABASE_URL = env.SUPABASE_URL || '__SUPABASE_URL__';
    const SUPABASE_ANON_KEY = env.SUPABASE_ANON_KEY || '__SUPABASE_ANON_KEY__';
    const SUPABASE_PROJECT_ID = env.SUPABASE_PROJECT_ID || '__SUPABASE_PROJECT_ID__';

    window.SUPABASE_CONFIG = { SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_PROJECT_ID };
})();
