require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const INTERFACE_PATH = path.resolve(
  'C:\\Users\\roger\\OneDrive\\Bureau\\Création scénarion pédagogiques\\Plan pédagogique\\Coordination_bi_prof\\interface.html'
);

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('❌ SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY manquant dans .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false }
});

function extractScenariosArray(html) {
  const startMarker = 'const scenarios = [';
  const endMarker = '    ];';

  const startIdx = html.indexOf(startMarker);
  if (startIdx === -1) throw new Error('Marqueur de début des scénarios non trouvé');

  const arrayStart = startIdx + startMarker.length - 1; // position du '['

  const stateIdx = html.indexOf('const state = {', arrayStart);
  if (stateIdx === -1) throw new Error('Marqueur de fin (const state) non trouvé');

  // Cherche le '];' juste avant const state
  let endIdx = html.lastIndexOf(endMarker, stateIdx);
  if (endIdx === -1) throw new Error('Marqueur de fin des scénarios non trouvé');
  endIdx += 1; // position du ']'

  const arrayText = html.slice(arrayStart, endIdx + endMarker.length);
  // Évaluation sécurisée d'un littéral JS
  return new Function('return ' + arrayText)();
}

function extractCompetenceCodes(skills) {
  if (!Array.isArray(skills)) return [];
  const codes = [];
  const seen = new Set();
  const regex = /\b(C[1-4](?:\.[0-9]+(?:\.[0-9]+)?)?|M[1-5]|E[0-9]{2,3})\b/g;
  for (const skill of skills) {
    let match;
    while ((match = regex.exec(skill)) !== null) {
      const code = match[1];
      if (!seen.has(code)) {
        seen.add(code);
        codes.push(code);
      }
    }
  }
  return codes;
}

function buildDescription(s) {
  const lines = [
    `## Objectif`,
    s.objective,
    ``,
    `## Contexte`,
    s.context,
    ``,
    `## Rôle du Prof A`,
    s.profA,
    ``,
    `## Rôle du Prof B`,
    s.profB,
    ``,
    `## Artefact de liaison`,
    s.artifact,
    ``,
    `## Sujet collègue`,
    s.colleague,
    ``,
    `## Points de synchronisation`,
    ...s.sync.map(item => `- ${item}`),
    ``,
    `## Déroulé coordonné`,
    `| Séance | Responsable | Objectif | Production |`,
    `|--------|-------------|----------|------------|`,
    ...s.steps.map(step => `| ${step[0]} | ${step[1]} | ${step[2]} | ${step[3]} |`),
  ];
  return lines.join('\n');
}

function buildMagasinPedagogique(s) {
  const productions = s.steps.map(step => `- ${step[0]} : ${step[3]}`);
  return [
    `Artefact principal : ${s.artifact}`,
    ``,
    `Productions attendues :`,
    ...productions,
  ].join('\n');
}

function estimateDuration(level) {
  switch (level) {
    case 'Seconde': return '2h';
    case 'Première': return '3h';
    case 'Terminale': return '4h';
    default: return '2h';
  }
}

function mapLevel(level) {
  const map = { Seconde: 'seconde', Première: 'premiere', Terminale: 'terminale' };
  return map[level] || level.toLowerCase();
}

function transformScenario(s) {
  return {
    titre: `${s.code} - ${s.title}`,
    entreprise: 'LOGIPREST',
    niveau: mapLevel(s.level),
    problematique: s.objective,
    description: buildDescription(s),
    mise_en_situation: s.context,
    magasin_pedagogique: buildMagasinPedagogique(s),
    competences: extractCompetenceCodes(s.skills),
    duree: estimateDuration(s.level),
    auteur: 'Roger Loaiza Soto',
  };
}

async function main() {
  console.log('📖 Lecture du plan pédagogique...');
  const html = fs.readFileSync(INTERFACE_PATH, 'utf-8');
  const rawScenarios = extractScenariosArray(html);
  console.log(`✅ ${rawScenarios.length} scénarios extraits`);

  const transformed = rawScenarios.map(transformScenario);

  console.log('🗑️ Suppression des scénarios existants...');
  const { error: deleteError } = await supabase
    .from('scenarios')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // supprime tout

  if (deleteError) {
    console.error('❌ Erreur suppression :', deleteError.message);
    process.exit(1);
  }
  console.log('✅ Scénarios existants supprimés');

  console.log('📝 Insertion des nouveaux scénarios...');
  const { data, error: insertError } = await supabase
    .from('scenarios')
    .insert(transformed)
    .select('id,titre,niveau,competences');

  if (insertError) {
    console.error('❌ Erreur insertion :', insertError.message);
    process.exit(1);
  }

  console.log(`✅ ${data.length} scénarios insérés avec succès`);
  console.log('\n📋 Récapitulatif :');
  data.forEach(s => {
    console.log(`  - ${s.titre} [${s.niveau}] ${s.competences.join(', ')}`);
  });
}

main().catch(err => {
  console.error('❌ Erreur fatale :', err);
  process.exit(1);
});
