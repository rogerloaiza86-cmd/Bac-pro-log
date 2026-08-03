#!/usr/bin/env node
/**
 * Teste l'accès aux scénarios avec un utilisateur authentifié.
 * Crée un utilisateur de test via la service_role key, puis se connecte
 * et charge les scénarios.
 */

require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const url = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const projectId = process.env.SUPABASE_PROJECT_ID || 'bac-pro-log';

if (!url || !anonKey || !serviceKey) {
    console.error('Erreur : SUPABASE_URL, SUPABASE_ANON_KEY et SUPABASE_SERVICE_ROLE_KEY sont requis.');
    process.exit(1);
}

const adminClient = createClient(url, serviceKey);

const testEmail = `test-${Date.now()}@example.com`;
const testPassword = 'TestPassword123!';

async function test() {
    console.log('Création d\'un utilisateur de test...');
    const { data: userData, error: createError } = await adminClient.auth.admin.createUser({
        email: testEmail,
        password: testPassword,
        email_confirm: true,
        user_metadata: { nom: 'Test', prenom: 'User' }
    });

    if (createError) {
        console.error('Erreur création utilisateur :', createError.message);
        process.exit(1);
    }

    console.log('Utilisateur créé :', userData.user.email);

    const client = createClient(url, anonKey);
    console.log('Connexion avec l\'utilisateur de test...');
    const { data: signInData, error: signInError } = await client.auth.signInWithPassword({
        email: testEmail,
        password: testPassword
    });

    if (signInError) {
        console.error('Erreur connexion :', signInError.message);
        process.exit(1);
    }

    console.log('Connecté en tant que :', signInData.user.email);

    const { data: scenarios, error: loadError } = await client
        .from('scenarios')
        .select('id, titre, project_id')
        .eq('project_id', projectId)
        .limit(5);

    if (loadError) {
        console.error('Erreur chargement scénarios :', loadError.message);
        process.exit(1);
    }

    console.log(`Scénarios chargés (${scenarios.length} affichés) :`);
    scenarios.forEach(s => console.log(`  - ${s.titre} [${s.project_id}]`));

    const { count, error: countError } = await client
        .from('scenarios')
        .select('*', { count: 'exact', head: true })
        .eq('project_id', projectId);

    if (countError) {
        console.error('Erreur de comptage :', countError.message);
        process.exit(1);
    }

    console.log(`Total de scénarios visibles pour "${projectId}" : ${count}`);
    console.log('Test authentifié OK ✓');

    // Nettoyage
    console.log('Suppression de l\'utilisateur de test...');
    const { error: deleteError } = await adminClient.auth.admin.deleteUser(userData.user.id);
    if (deleteError) {
        console.error('Erreur suppression utilisateur :', deleteError.message);
    } else {
        console.log('Utilisateur de test supprimé.');
    }
}

test().catch(err => {
    console.error('Erreur fatale :', err.message);
    process.exit(1);
});
