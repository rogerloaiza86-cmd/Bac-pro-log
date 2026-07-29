#!/usr/bin/env node
/**
 * Migration initiale : insère les scénarios d'exemple dans Supabase.
 *
 * Usage :
 *   npm install
 *   SUPABASE_SERVICE_ROLE_KEY=... npx ts-node scripts/migrate-scenarios.js
 *   ou simplement : npm run migrate (si le .env est configuré)
 */

require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');
const scenarios = require('../data/sample-scenarios.json');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Erreur : SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont requis.');
    console.error('Renseignez-les dans un fichier .env ou en variables d\'environnement.');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function migrate() {
    console.log('Connecté à Supabase. Chargement de ' + scenarios.length + ' scénarios...');

    const payload = scenarios.map(sc => ({
        titre: sc.titre,
        entreprise: sc.entreprise || null,
        niveau: sc.niveau,
        problematique: sc.problematique,
        description: sc.description || null,
        mise_en_situation: sc.miseEnSituation || null,
        magasin_pedagogique: sc.magasinPedagogique || null,
        competences: sc.competences || [],
        duree: sc.duree || '2h',
        auteur: sc.auteur || 'Anonyme',
        created_at: sc.date ? sc.date + 'T00:00:00Z' : new Date().toISOString()
    }));

    const { data, error } = await supabase
        .from('scenarios')
        .insert(payload)
        .select('id');

    if (error) {
        console.error('Erreur pendant la migration :', error.message);
        process.exit(1);
    }

    console.log(`Migration terminée : ${data.length} scénarios insérés.`);
}

migrate().catch(err => {
    console.error('Erreur fatale :', err.message);
    process.exit(1);
});
