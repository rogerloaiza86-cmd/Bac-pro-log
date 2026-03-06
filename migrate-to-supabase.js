#!/usr/bin/env node
/**
 * Script de migration des scénarios vers Supabase
 * Usage: node migrate-to-supabase.js
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://votre-projet.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || 'votre-clé-service';

// Scénarios à migrer (copiez vos 58 scénarios ici)
const SCENARIOS_TO_MIGRATE = [
    {
        id: 'sc-s01',
        titre: "Premier jour sur le quai",
        entreprise: "FM Logistic (Longueil-Sainte-Marie)",
        niveau: "seconde",
        problematique: "Comment se repérer et s'intégrer dans un environnement logistique professionnel ?",
        description: "L'élève découvre l'organisation d'un entrepôt logistique : zones fonctionnelles, circuits de circulation, organigramme...",
        competences: ["C1.1", "C3.1"],
        duree: "3h",
        auteur: "Roger Loaiza Soto"
    },
    // ... Ajoutez tous vos scénarios ici
];

async function migrate() {
    if (SUPABASE_URL === 'https://votre-projet.supabase.co') {
        console.error('❌ ERREUR: Configurez SUPABASE_URL et SUPABASE_SERVICE_KEY');
        console.log('\n1. Allez dans Supabase > Settings > API');
        console.log('2. Copiez l\'URL du projet');
        console.log('3. Copiez la "service role key" (NE PAS PARTAGER !)');
        console.log('4. Exécutez: SUPABASE_URL=votre-url SUPABASE_SERVICE_KEY=votre-clé node migrate-to-supabase.js');
        process.exit(1);
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

    console.log(`🚀 Migration de ${SCENARIOS_TO_MIGRATE.length} scénarios vers Supabase...\n`);

    let success = 0;
    let errors = 0;

    for (const scenario of SCENARIOS_TO_MIGRATE) {
        try {
            const { data, error } = await supabase
                .from('scenarios')
                .insert([{
                    titre: scenario.titre,
                    entreprise: scenario.entreprise,
                    niveau: scenario.niveau,
                    problematique: scenario.problematique,
                    description: scenario.description,
                    mise_en_situation: scenario.miseEnSituation || null,
                    magasin_pedagogique: scenario.magasinPedagogique || null,
                    competences: scenario.competences,
                    duree: scenario.duree,
                    auteur: scenario.auteur,
                    created_at: new Date(scenario.date || '2025-01-01').toISOString()
                }]);

            if (error) {
                console.error(`❌ Erreur "${scenario.titre}":`, error.message);
                errors++;
            } else {
                console.log(`✅ Migré: ${scenario.titre}`);
                success++;
            }
        } catch (e) {
            console.error(`❌ Exception "${scenario.titre}":`, e.message);
            errors++;
        }
    }

    console.log(`\n📊 Résultat:`);
    console.log(`   ✅ Succès: ${success}`);
    console.log(`   ❌ Erreurs: ${errors}`);
    console.log(`   📈 Total: ${SCENARIOS_TO_MIGRATE.length}`);
}

migrate();
