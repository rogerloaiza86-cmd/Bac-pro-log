require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });

(async () => {
  const { data, error } = await supabase.from('scenarios').select('id,titre,niveau,competences').order('created_at', { ascending: true });
  if (error) {
    console.error('❌', error);
    process.exit(1);
  }
  console.log('Total scénarios :', data.length);
  const byNiveau = {};
  for (const s of data) { byNiveau[s.niveau] = (byNiveau[s.niveau] || 0) + 1; }
  console.log('Par niveau :', byNiveau);
  console.log('\nPremier :', data[0].titre, data[0].competences);
  console.log('Dernier :', data[data.length - 1].titre, data[data.length - 1].competences);
})();
