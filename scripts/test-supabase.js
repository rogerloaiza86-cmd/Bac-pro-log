#!/usr/bin/env node
/**
 * Vérifie la connexion au nouveau projet Supabase et charge les scénarios.
 */

require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const url = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;
const projectId = process.env.SUPABASE_PROJECT_ID || 'bac-pro-log';

if (!url || !anonKey) {
    console.error('Erreur : SUPABASE_URL et SUPABASE_ANON_KEY sont requis.');
    process.exit(1);
}

const supabase = createClient(url, anonKey);

async function test() {
    console.log('Test de connexion à Supabase :', url);

    const { data: scenarios, error } = await supabase
        .from('scenarios')
        .select('id, titre, project_id')
        .eq('project_id', projectId)
        .limit(5);

    if (error) {
        console.error('Erreur lors du chargement des scénarios :', error.message);
        process.exit(1);
    }

    console.log(`Scénarios chargés (${scenarios.length} affichés) :`);
    scenarios.forEach(s => console.log(`  - ${s.titre} [${s.project_id}]`));

    const { count, error: countError } = await supabase
        .from('scenarios')
        .select('*', { count: 'exact', head: true })
        .eq('project_id', projectId);

    if (countError) {
        console.error('Erreur de comptage :', countError.message);
        process.exit(1);
    }

    console.log(`Total de scénarios pour le projet "${projectId}" : ${count}`);
    console.log('Connexion OK ✓');
}

test().catch(err => {
    console.error('Erreur fatale :', err.message);
    process.exit(1);
});
