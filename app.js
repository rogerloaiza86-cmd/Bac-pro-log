/* ============================================
   PLATEFORME LOGISTIQUE 2025 — APP LOGIC
   ============================================ */

// =============================================
// DATA — Référentiel 2025 Compétences
// =============================================
const REFERENTIEL = {
    blocs: [
        {
            id: 'bloc1',
            nom: 'Bloc 1 — Réaliser des opérations logistiques dans un environnement sécurisé',
            couleur: '#137fec',
            competences: [
                { code: 'C1.1', nom: 'Positionner des activités logistiques dans la supply chain', desc: 'Identifier les étapes, acteurs, zones logistiques et flux.' },
                { code: 'C1.2', nom: 'Mettre en œuvre les règles de sécurité', desc: 'Prévention des risques et des dangers dans l\'environnement de travail.' },
                { code: 'C1.2.1', nom: 'Repérer les dangers et les risques dans un contexte donné', desc: 'Identification des risques professionnels matériels et humains.' },
                
                { code: 'C1.3', nom: 'Préparer l\'action de réception', desc: 'Planifier les moyens pour la réception des marchandises.' },
                { code: 'C1.3.1', nom: 'Planifier les moyens pour la réception', desc: 'Collecte des données et utilisation de planigramme.' },
                { code: 'C1.3.2', nom: 'Adapter l\'organisation de la réception selon les aléas', desc: 'Accueil conducteur, collecte et vérification des documents.' },
                { code: 'C1.4', nom: 'Traiter les opérations de réception de produits selon les procédures', desc: 'Déchargement, contrôle, réserves, gestion des déchets.' },
                { code: 'C1.4.1', nom: 'Mettre en œuvre les procédures de réception', desc: 'Contrôles quantitatifs/qualitatifs et application des protocoles.' },
                { code: 'C1.5', nom: 'Mettre en stock les produits', desc: 'Transfert et stockage en sécurité, dégroupage et reconditionnement.' },
                { code: 'C1.5.1', nom: 'Transférer et stocker les produits en sécurité', desc: 'Repérage des zones et rotation selon les critères de conservation.' },
                { code: 'C1.5.2', nom: 'Dégrouper et/ou reconditionner les produits', desc: 'Réalisation d\'activités de dégroupage ou reconditionnement.' },
                { code: 'C1.6', nom: 'Gérer le suivi des stocks', desc: 'Suivi des flux d\'information et participation aux inventaires.' },
                { code: 'C1.6.1', nom: 'Assurer le suivi des flux d\'information', desc: 'Actualisation de la base de données informatique.' },
                { code: 'C1.6.2', nom: 'Participer aux activités d\'inventaire', desc: 'Application du protocole de comptage et sécurisation de zone.' },
            ]
        },
        {
            id: 'bloc2',
            nom: 'Bloc 2 — Satisfaire le client par la coordination des activités logistiques',
            couleur: '#6366f1',
            competences: [
                { code: 'C2.1', nom: 'Répondre à la demande des clients internes et/ou externes', desc: 'Collecter les données pour la préparation et/ou expédition.' },
                { code: 'C2.1.1', nom: 'Identifier les caractéristiques des produits', desc: 'Collecte des données nécessaires à la préparation.' },
                { code: 'C2.1.2', nom: 'Adapter la préparation de commandes au besoin du client', desc: 'Dimensionnement des moyens et respect de la confidentialité.' },
                { code: 'C2.2', nom: 'Optimiser les préparations de commandes', desc: 'Application des procédures selon les demandes clients.' },
                { code: 'C2.2.1', nom: 'Appliquer la procédure de préparation de commandes', desc: 'Respect des réglementations et de l\'économie d\'effort.' },
                { code: 'C2.2.2', nom: 'S\'adapter aux contraintes et aux aléas', desc: 'Réactivité face à une situation et traitement des incidents.' },
                { code: 'C2.2.3', nom: 'Optimiser la constitution de l\'unité de charge', desc: 'Élaboration de plan de palettisation et simulation 3D.' },
                { code: 'C2.2.4', nom: 'Transférer en sécurité les produits dans une zone dédiée', desc: 'Choix du matériel et respect de l\'intégrité des produits.' },
                { code: 'C2.2.5', nom: 'Mettre à jour les données liées à la sortie du stock', desc: 'Saisie des données et interprétation de tableaux de bord.' },
                { code: 'C2.3', nom: 'Contribuer au processus de logistique industrielle', desc: 'Approvisionnement de lignes de production et gestion des flux.' },
                { code: 'C2.3.1', nom: 'Approvisionner une ligne de production', desc: 'Identification des flux et mise à jour de la base de données.' },
                { code: 'C2.3.2', nom: 'Mesurer l\'impact d\'un dysfonctionnement d\'une opération logistique', desc: 'Analyse des anomalies et proposition d\'actions adaptées.' },
                { code: 'C2.4', nom: 'Organiser une tournée de livraison', desc: 'Élaboration d\'itinéraire, plan de chargement et dossier de transport.' },
                { code: 'C2.4.1', nom: 'Élaborer un itinéraire', desc: 'Optimisation de l\'itinéraire de livraison.' },
                { code: 'C2.4.2', nom: 'Déterminer les temps de conduite, de repos et de travail', desc: 'Application de la réglementation sociale (RSE).' },
                { code: 'C2.4.3', nom: 'Élaborer un plan de chargement', desc: 'Sélection du véhicule et optimisation du chargement.' },
                { code: 'C2.4.4', nom: 'Constituer le dossier de transport', desc: 'Renseignement et actualisation des données de transport.' },
                { code: 'C2.5', nom: 'Traiter les retours des supports de charges', desc: 'Suivi, traçabilité et contrôle des supports consignés.' },
                { code: 'C2.6', nom: 'Confier l\'expédition à un prestataire de transport externe', desc: 'Choisir un transporteur et échanger informations.' },
                { code: 'C2.6.1', nom: 'Choisir un transporteur dans une liste référencée', desc: 'Contrôle de l\'adéquation et identification des obligations.' },
                { code: 'C2.6.2', nom: 'Échanger informations et documents', desc: 'Transmission efficace via le moyen adapté.' },
            ]
        },
        {
            id: 'bloc3',
            nom: 'Bloc 3 — Contribuer de manière responsable à l\'efficacité des activités logistiques',
            couleur: '#10b981',
            competences: [
                { code: 'C3.1', nom: 'Adapter le processus logistique selon le type de produit ou de flux', desc: 'Prise en compte des spécificités et environnements.' },
                { code: 'C3.2', nom: 'Mettre en œuvre le processus de traçabilité', desc: 'Application des processus de traçabilité dans la chaîne.' },
                { code: 'C3.2.1', nom: 'Prendre part au processus qualité', desc: 'Contrôle de conformité et analyse de situation.' },
                { code: 'C3.2.2', nom: 'Assurer le suivi des produits à l\'aide de données', desc: 'Mise à jour des données dans un référentiel de suivi.' },
                { code: 'C3.2.3', nom: 'Identifier la procédure applicable selon le type de retour', desc: 'Caractérisation du retour et procédure adaptée.' },
                { code: 'C3.2.4', nom: 'Valoriser les déchets', desc: 'Identification des zones et tri dans les bacs dédiés.' },
                { code: 'C3.3', nom: 'Proposer des axes d\'amélioration logistique (RSE)', desc: 'Contribution à l\'amélioration sociétale et environnementale.' },
                { code: 'C3.3.1', nom: 'Analyser une situation professionnelle courante', desc: 'Diagnostic et repérage des incidences sur la chaîne.' },
                { code: 'C3.3.2', nom: 'Proposer des axes d\'amélioration', desc: 'Actions adaptées RSE pour améliorer l\'environnement.' },
                { code: 'C3.3.3', nom: 'Évaluer les impacts de l\'organisation du poste de travail', desc: 'Mesure d\'impacts et interprétation d\'indicateurs.' },
                { code: 'C3.4', nom: 'Coordonner une petite équipe logistique', desc: 'Transmission d\'infos, gestion d\'imprévus, animation.' },
                { code: 'C3.4.1', nom: 'Assurer le partage d\'informations', desc: 'Communication orale ou écrite lors de la prise de poste.' },
                { code: 'C3.4.2', nom: 'Traiter des situations imprévues', desc: 'Proposition d\'actions pour répondre aux imprévus.' },
                { code: 'C3.4.3', nom: 'Contribuer à l\'efficacité du service logistique', desc: 'Animation, suivi et prise en compte de la sécurité.' },
                { code: 'C3.4.4', nom: 'Veiller à l\'inclusion, au bien-être et à la sécurité', desc: 'Mise en place de l\'inclusion et vigilance bien-être.' },
            ]
        },
        {
            id: 'bloc4',
            nom: 'Bloc 4 — Conduire en sécurité des engins de manutention',
            couleur: '#f59e0b',
            competences: [
                { code: 'C4.1', nom: 'Mettre en service un engin de manutention en sécurité', desc: 'Vérification de l\'adéquation et du bon fonctionnement.' },
                { code: 'C4.1.1', nom: 'Vérifier l\'adéquation d\'un engin de manutention', desc: 'Identification des caractéristiques du transfert de charge.' },
                { code: 'C4.1.2', nom: 'Vérifier le bon fonctionnement des dispositifs de sécurité', desc: 'Réglages du poste et contrôle visuel de l\'engin.' },
                { code: 'C4.1.3', nom: 'Vérifier la présence et validité des documents réglementaires', desc: 'Exploitation des documents de l\'engin de manutention.' },
                { code: 'C4.2', nom: 'Conduire un engin de manutention', desc: 'Circulation à vide/charge, gestion des plans inclinés.' },
                { code: 'C4.2.1', nom: 'Circuler à vide', desc: 'Circulation en avant, arrière, virage et en allée.' },
                { code: 'C4.2.2', nom: 'Circuler en charge', desc: 'Circulation avec charge en toute sécurité.' },
                { code: 'C4.2.3', nom: 'Circuler sur un plan incliné', desc: 'Conduite en toute sécurité sur rampe d\'accès.' },
                { code: 'C4.2.4', nom: 'Respecter les règles de circulation Compréhension de la signalisation', desc: 'Compréhension de la signalisation et conduite éco.' },
                { code: 'C4.2.5', nom: 'Conduire avec assurance en sécurité Conduite sans heurts, sans chocs ou brutalité', desc: 'Conduite sans heurts, sans chocs ou brutalité.' },
                { code: 'C4.2.6', nom: 'Respecter les prescriptions en temps de l\'opération en garantissant la sécurité', desc: 'Respect des contraintes de temps garantissant la sécurité.' },
                { code: 'C4.3', nom: 'Manœuvrer un engin de manutention (1B 3 5)', desc: 'Manœuvre selon recommandations R489.' },
                { code: 'C4.3.1', nom: 'Manœuvrer un engin de catégorie 1B-R489', desc: 'Prise, déplacement et stockage jusqu\'à 2.90m.' },
                { code: 'C4.3.2', nom: 'Manœuvrer un engin de catégorie 3 –R489', desc: 'Prise, déplacement et stockage jusqu\'à 3.30m.' },
                { code: 'C4.3.3', nom: 'Manœuvrer un engin de catégorie 5 –R489', desc: 'Prise, déplacement et stockage jusqu\'à 6.00m.' },
                { code: 'C4.4', nom: 'Effectuer les opérations de fin de poste', desc: 'Stationnement, maintenance 1er niveau et compte-rendu.' },
                { code: 'C4.4.1', nom: 'Stationner l\'engin de manutention à son emplacement en sécurité', desc: 'Mise en stationnement selon le protocole.' },
                { code: 'C4.4.2', nom: 'Effectuer les opérations de maintenance de premier niveau si nécessaire', desc: 'Maintenance préventive si nécessaire.' },
                { code: 'C4.4.3', nom: 'Rendre compte des anomalies relevées', desc: 'Précision des comptes rendus sur le déroulé.' },
            ]
        }
    ]
};

// Warehouse images for cards
const WAREHOUSE_IMAGES = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDvbgl0-UHC0BzHEVuryakPrNgEa-dbsl1vYCgg5v6zIMEuLMZBwPSN94uOLl5ap7ss-aTrvUUAQaIr9YcIpELUxu9TI1bqCkv6l8mOTxlFSfulB8k9J9_2PcAAa0wUZ-aC3Vj8bwuR3dMOSqao9PJYdl3R0MWN2aPjPx1msi4ko80qVbE8_nusG44IU3NA8qr_yGnmPrtRPQZTJvLjWmgMZsz4fHQj24gGEhlH6WYwfk_YheVR6LgPSMZ9vpKG1XcxudC9KVFalho',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCpGUsc35bxHXPawxODY4K0W96EtfFNIBciJsQouw7VFt8f2M1PwhJ-st15tNflw1Bajiz_zVAqz1mAVwMZTflX_FlsUUcPzecSJGgpV7Id3hFWCppKxkhXSbxbnU3DZe44sHf6fk6CH6CPFE2-dEYFZAIo7S2HV4u-Y2yQTZDcVQrs_Ap3-CNoco6qhHRjhAYa3fSFAmaz47dhFWTTycogf3Oax_tU6r2BM3YkBW6Hv5vNip2afTMlOp5DxGGIUiY03eGWc9JIXfQ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAfII775YAVpOhAE-K4slKucj46XYS-HfK6Fwj-bq_eaCcaywtjkLcIvM4lrPNokFO0qUZACfdOUJdafBqoBOpM5LU9QhTMLeydO6O7XpDIZRHO6XSRlyF3ClbZtTYGJkgi4oxm4NUyblMUWzLRVsq3CR6cKMoUBaTEVuuoTwjphEeGi6fku7AeQJvbmR9mZDXSrrtNGnrkvtBgULBddt2iNQRYjziq7EnZcSUxBdrxrTzG3NfXAf4jq29yF728td1-hftofPBe81U',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB-8WQ_1QdghqMQ3foo99HfM7QeH1w5FBRW166S-p3yeu9dYKEERV3mVInJllyDsMKmHyOFquRES_EXB9AeCDaJZsG3IRZ85_ho5Yk-tWpfycvhlfqwjq45AeAXhkM0DfuWCLSnAfJL82yDpRez65Hn52z0gpIwmqEd8aG1OEiL_gaiHmsGfIVqfqDIJHpxsCj8IQ2zi-61OA4LxgY6RFvoi1CfvZ5zEJgEYQkqNFt7GtiRMHHG-BkZNNjPrGx_MtHCS0oTKX4uPbA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuASqGmAmuIUHD40odh8hKlQBBtqcQ4lHKSzJc_l-1jT3cC1Bl9TKdm8fVkFLUa42ZKdJFfQ_Zl4-cUOLL5gDSYkXtQGjWX9ShU3dPbqF7J2Lxmyf0ggwkonNTjmx9nDKw_gF-JXifQYMHotYDCbNT_6Y4Z6zGhUH7Gh5vx7JOGwahF2y4Z-QCMIUMa2vIAi5r6496G_7kJu5uaEl2MGlIICoQd16C7s0iHjEvXJuXTRrgVXvIZkef2VmZHfavJFxVSxUuk8ja3ssCk',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC2spJZKUxYBV5u0vLUtmW8cbgERGXLBalu8wHyN6Oekb2pttM7xBuTGgBPcbh6JCO8u2ZEZLHggWtXzgPM6H5vNoQwGtgWl6AgY9Mn7-ndqUgaAvdMrXXF_3eXZ3wULi0k2WSRr0WMgnPACZDm44pApiJXwYN1R8Y4hC17gf5yxuTdSsw8uo-MVE-E4ylicKflCQXDr5mEuL59OAXQJUuV227noDBp5LGyvilG2VFbGho3_FCbUm7mXSQBu1e68RtRDiBHi1k8xaU',
];

const HERO_IMAGES = {
    seconde: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvbgl0-UHC0BzHEVuryakPrNgEa-dbsl1vYCgg5v6zIMEuLMZBwPSN94uOLl5ap7ss-aTrvUUAQaIr9YcIpELUxu9TI1bqCkv6l8mOTxlFSfulB8k9J9_2PcAAa0wUZ-aC3Vj8bwuR3dMOSqao9PJYdl3R0MWN2aPjPx1msi4ko80qVbE8_nusG44IU3NA8qr_yGnmPrtRPQZTJvLjWmgMZsz4fHQj24gGEhlH6WYwfk_YheVR6LgPSMZ9vpKG1XcxudC9KVFalho',
    premiere: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpf0cidpWzuzXcdhz4PcGW9IpbIp9TlLDZGfhxAPiCl6YlHWzqH_L_qbOQ7Kv-s88N0VEMF26xW5Gix1r6Ah7WSyLHLOrXuF3wxZlpXMeZ7bcG-CD2BMYQTW_7gouUHz3bWqThRi5eTaiy0K_D2eV4IRaulb5pz1Gp7EC6o5Rb4eQm0Kltev4dwBXx8x5-YNlQfBsKYu1CyCREguCvBV4S4f3IdSCxT4XE1xGLZqcGGer0BXotktFQtNUEKKGQp5fnJN3zVQrPRgw',
    terminale: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-8WQ_1QdghqMQ3foo99HfM7QeH1w5FBRW166S-p3yeu9dYKEERV3mVInJllyDsMKmHyOFquRES_EXB9AeCDaJZsG3IRZ85_ho5Yk-tWpfycvhlfqwjq45AeAXhkM0DfuWCLSnAfJL82yDpRez65Hn52z0gpIwmqEd8aG1OEiL_gaiHmsGfIVqfqDIJHpxsCj8IQ2zi-61OA4LxgY6RFvoi1CfvZ5zEJgEYQkqNFt7GtiRMHHG-BkZNNjPrGx_MtHCS0oTKX4uPbA',
};

// Scenarios are now loaded from Supabase. See data/sample-scenarios.json for the seed data.


// =============================================
// SUPABASE & AUTH
// =============================================
let supabaseClient = null;
let USE_SUPABASE = false;
let CURRENT_USER = null;
let SCENARIOS_CACHE = [];

function initSupabase() {
    const cfg = window.SUPABASE_CONFIG || {};
    if (cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY &&
        cfg.SUPABASE_URL !== '__SUPABASE_URL__' &&
        cfg.SUPABASE_ANON_KEY !== '__SUPABASE_ANON_KEY__' &&
        typeof window.supabaseClient !== 'undefined') {
        supabaseClient = window.supabaseClient.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
        USE_SUPABASE = true;
        console.log('%c[Supabase] Connecté ✓', 'color: #3ecf8e;');
    } else {
        console.warn('%c[Supabase] Non configuré — l\'application ne fonctionnera pas sans clés API.', 'color: #f59e0b;');
    }
}

async function initAuth() {
    if (!USE_SUPABASE) return;
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
        CURRENT_USER = session.user;
        await loadUserProfile();
    }
    supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
            CURRENT_USER = session.user;
            await loadUserProfile();
            renderAuthButton();
            await renderPage();
        } else if (event === 'SIGNED_OUT') {
            CURRENT_USER = null;
            renderAuthButton();
            await renderPage();
        }
    });
}

async function loadUserProfile() {
    if (!CURRENT_USER || !USE_SUPABASE) return;
    const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', CURRENT_USER.id)
        .single();
    if (!error && data) {
        CURRENT_USER.profile = data;
    }
}

async function signUp(email, password, nom, prenom) {
    if (!USE_SUPABASE) return alert('Mode hors ligne : inscription impossible.');
    const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: { data: { nom, prenom } }
    });
    if (error) return alert('Erreur : ' + error.message);
    return data.user;
}

async function signIn(email, password) {
    if (!USE_SUPABASE) return alert('Mode hors ligne : connexion impossible.');
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) return alert('Erreur : ' + error.message);
    return data.user;
}

async function signOut() {
    if (!USE_SUPABASE) return;
    await supabaseClient.auth.signOut();
}

function getDisplayName() {
    if (!CURRENT_USER) return '';
    const p = CURRENT_USER.profile || CURRENT_USER.user_metadata || {};
    return [p.prenom, p.nom].filter(Boolean).join(' ') || CURRENT_USER.email || 'Utilisateur';
}

function getAuthorInitials(name) {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}

// =============================================
// DATA — Supabase storage
// =============================================
async function loadScenarios() {
    if (!USE_SUPABASE) return [];
    try {
        const { data, error } = await supabaseClient
            .from('scenarios')
            .select('*')
            .order('created_at', { ascending: false });
        if (error) throw error;
        SCENARIOS_CACHE = data.map(s => ({
            id: s.id,
            titre: s.titre,
            entreprise: s.entreprise,
            niveau: s.niveau,
            problematique: s.problematique,
            description: s.description,
            miseEnSituation: s.mise_en_situation,
            magasinPedagogique: s.magasin_pedagogique,
            competences: s.competences || [],
            duree: s.duree || '2h',
            auteur: s.auteur,
            date: s.created_at ? s.created_at.split('T')[0] : '',
            user_id: s.user_id
        }));
        console.log(`%c[loadScenarios] ${SCENARIOS_CACHE.length} scénarios chargés`, 'color: #3ecf8e;');
        return SCENARIOS_CACHE;
    } catch (e) {
        console.error('[Supabase] Erreur chargement scénarios:', e);
        showToast('Erreur de connexion à la base de données.');
        return SCENARIOS_CACHE;
    }
}

async function addScenario(scenario) {
    if (!USE_SUPABASE) return alert('Mode hors ligne : impossible de publier.');
    const auteur = getDisplayName() || scenario.auteur || 'Anonyme';
    const payload = {
        titre: scenario.titre,
        entreprise: scenario.entreprise,
        niveau: scenario.niveau,
        problematique: scenario.problematique,
        description: scenario.description,
        mise_en_situation: scenario.miseEnSituation,
        magasin_pedagogique: scenario.magasinPedagogique,
        competences: scenario.competences || [],
        duree: scenario.duree || '2h',
        auteur: auteur,
        user_id: CURRENT_USER?.id || null
    };
    try {
        const { data, error } = await supabaseClient.from('scenarios').insert([payload]).select().single();
        if (error) throw error;
        SCENARIOS_CACHE.unshift({
            ...scenario,
            id: data.id,
            auteur: auteur,
            date: data.created_at.split('T')[0],
            user_id: data.user_id
        });
        return SCENARIOS_CACHE[0];
    } catch (e) {
        console.error('[Supabase] Erreur ajout:', e);
        alert('Erreur de sauvegarde : ' + e.message);
        return null;
    }
}

async function updateScenario(id, scenario) {
    if (!USE_SUPABASE) return alert('Mode hors ligne : impossible de modifier.');
    const payload = {
        titre: scenario.titre,
        entreprise: scenario.entreprise,
        niveau: scenario.niveau,
        problematique: scenario.problematique,
        description: scenario.description,
        mise_en_situation: scenario.miseEnSituation,
        magasin_pedagogique: scenario.magasinPedagogique,
        competences: scenario.competences || [],
        duree: scenario.duree || '2h'
    };
    try {
        const { data, error } = await supabaseClient.from('scenarios').update(payload).eq('id', id).select().single();
        if (error) throw error;
        const idx = SCENARIOS_CACHE.findIndex(s => s.id === id);
        if (idx !== -1) {
            SCENARIOS_CACHE[idx] = { ...SCENARIOS_CACHE[idx], ...scenario, date: data.created_at.split('T')[0] };
        }
        return SCENARIOS_CACHE[idx];
    } catch (e) {
        console.error('[Supabase] Erreur mise à jour:', e);
        alert('Erreur de modification : ' + e.message);
        return null;
    }
}

async function deleteScenario(id) {
    if (!USE_SUPABASE) return false;
    try {
        const { error } = await supabaseClient.from('scenarios').delete().eq('id', id);
        if (error) throw error;
        SCENARIOS_CACHE = SCENARIOS_CACHE.filter(s => s.id !== id);
        return true;
    } catch (e) {
        console.error('[Supabase] Erreur suppression:', e);
        alert('Erreur de suppression : ' + e.message);
        return false;
    }
}

function saveScenarios(scenarios) {
    // Compatibilité export-import.js : désactivé en mode Supabase.
    console.log('[saveScenarios] Mode Supabase actif : sauvegarde locale ignorée.');
}

async function getScenariosByLevel(level) {
    const all = await loadScenarios();
    return all.filter(s => s.niveau === level);
}

async function searchScenarios(query) {
    const all = await loadScenarios();
    if (!query || query.trim() === '') return all;
    const lower = query.toLowerCase().trim();
    return all.filter(s =>
        (s.titre && s.titre.toLowerCase().includes(lower)) ||
        (s.description && s.description.toLowerCase().includes(lower)) ||
        (s.problematique && s.problematique.toLowerCase().includes(lower)) ||
        (s.miseEnSituation && s.miseEnSituation.toLowerCase().includes(lower)) ||
        (s.magasinPedagogique && s.magasinPedagogique.toLowerCase().includes(lower)) ||
        (s.entreprise && s.entreprise.toLowerCase().includes(lower)) ||
        (s.auteur && s.auteur.toLowerCase().includes(lower)) ||
        (s.competences && s.competences.some(c => c.toLowerCase().includes(lower)))
    );
}

async function filterScenariosByCompetence(code) {
    const all = await loadScenarios();
    if (!code) return all;
    return all.filter(s => s.competences && s.competences.includes(code));
}

async function getTopContributors(limit = 5) {
    const all = await loadScenarios();
    const contributors = {};
    all.forEach(s => {
        const auteur = s.auteur || 'Anonyme';
        if (!contributors[auteur]) contributors[auteur] = { name: auteur, count: 0, scenarios: [] };
        contributors[auteur].count++;
        contributors[auteur].scenarios.push(s);
    });
    return Object.values(contributors).sort((a, b) => b.count - a.count).slice(0, limit);
}

function getCompetencyInfo(code) {
    for (const bloc of REFERENTIEL.blocs) {
        const comp = bloc.competences.find(c => c.code === code);
        if (comp) return { ...comp, bloc };
    }
    return null;
}

function getBlocColor(code) {
    const info = getCompetencyInfo(code);
    return info ? info.bloc.couleur : '#137fec';
}

function getRandomImage() {
    return WAREHOUSE_IMAGES[Math.floor(Math.random() * WAREHOUSE_IMAGES.length)];
}

// =============================================
// ROUTER
// =============================================
function navigateTo(page) {
    window.location.hash = page;
}

function getPage() {
    const hash = window.location.hash.replace('#', '') || 'accueil';
    return hash;
}

function updateActiveNav() {
    const page = getPage();
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
}

// =============================================
// TOAST
// =============================================
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerHTML = `<span class="material-symbols-outlined">check_circle</span>${escapeHtml(message)}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}

// =============================================
// RENDER HELPERS
// =============================================
function renderScenarioCard(scenario) {
    const competencyTags = scenario.competences.map(code => {
        const info = getCompetencyInfo(code);
        if (!info) return '';
        const color = info.bloc.couleur;
        return `<span class="tag" style="background: ${color}10; color: ${color}; border-color: ${color}30;">${escapeHtml(code)}</span>`;
    }).join('');

    const blocInfo = getCompetencyInfo(scenario.competences[0]);
    const blocLabel = blocInfo ? blocInfo.bloc.nom.split('—')[0].trim() : '';
    const blocColor = blocInfo ? blocInfo.bloc.couleur : '#137fec';
    const initials = getAuthorInitials(scenario.auteur);

    const displayText = scenario.problematique || scenario.description || '';
    const isProblematique = !!scenario.problematique;

    return `
        <div class="card" data-scenario-id="${escapeHtml(scenario.id)}" data-action="open-modal">
            <div class="card-img" style="background-image: url('${getRandomImage()}')">
                <span class="card-img-badge" style="background:${blocColor}">${escapeHtml(blocLabel)}</span>
                <span class="card-img-time"><span class="material-symbols-outlined">schedule</span>${escapeHtml(scenario.duree)}</span>
            </div>
            <div class="card-body">
                <h4 class="card-title">${escapeHtml(scenario.titre)}</h4>
                ${isProblematique ? `<div class="card-problematique"><span class="problematique-label">Problématique :</span> ${escapeHtml(scenario.problematique)}</div>` : ''}
                <p class="card-desc">${escapeHtml(scenario.description)}</p>
                <div class="card-tags">
                    ${competencyTags}
                    ${scenario.entreprise ? `<span class="tag" style="background:rgba(147,51,234,0.08);color:#7c3aed;border-color:rgba(147,51,234,0.2)">${escapeHtml(scenario.entreprise)}</span>` : ''}
                </div>
                <div class="card-footer">
                    <div class="card-author">
                        <div class="card-author-avatar">${initials}</div>
                        <span>${escapeHtml(scenario.auteur)}</span>
                    </div>
                    <div class="card-actions">
                        <button class="card-view-btn" data-action="open-modal" data-scenario-id="${escapeHtml(scenario.id)}" title="Ouvrir">
                            <span class="material-symbols-outlined">visibility</span>
                        </button>
                        ${canManageScenario(scenario) ? `
                        <button class="card-delete-btn" data-action="delete" data-scenario-id="${escapeHtml(scenario.id)}" title="Supprimer">
                            <span class="material-symbols-outlined">delete</span>
                        </button>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function canManageScenario(scenario) {
    if (!CURRENT_USER) return false;
    return scenario.user_id === CURRENT_USER.id;
}

async function renderStats(level) {
    const all = await loadScenarios();
    const filtered = level ? all.filter(s => s.niveau === level) : all;
    const totalComps = REFERENTIEL.blocs.reduce((sum, b) => sum + b.competences.length, 0);
    const coveredCodes = new Set();
    filtered.forEach(s => s.competences.forEach(c => coveredCodes.add(c)));
    const coverPercent = Math.round((coveredCodes.size / totalComps) * 100);

    const enterprises = new Set(filtered.map(s => s.entreprise).filter(Boolean));
    const levelLabel = level ? level.charAt(0).toUpperCase() + level.slice(1) : 'Global';

    return `
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-card-header">
                    <div>
                        <div class="stat-card-label">Progression</div>
                        <div class="stat-card-value">${coverPercent}%</div>
                    </div>
                    <div class="stat-card-icon" style="background:rgba(16,185,129,0.1);color:#10b981">
                        <span class="material-symbols-outlined">trending_up</span>
                    </div>
                </div>
                <div class="progress-bar"><div class="progress-bar-fill" style="width:${coverPercent}%;background:#10b981"></div></div>
                <div class="stat-card-sub">Couverture du référentiel</div>
            </div>
            <div class="stat-card">
                <div class="stat-card-header">
                    <div>
                        <div class="stat-card-label">Scénarios</div>
                        <div class="stat-card-value">${filtered.length}</div>
                    </div>
                    <div class="stat-card-icon" style="background:rgba(19,127,236,0.1);color:#137fec">
                        <span class="material-symbols-outlined">inventory_2</span>
                    </div>
                </div>
                <div class="stat-card-sub">Disponibles en ${levelLabel}</div>
            </div>
            <div class="stat-card">
                <div class="stat-card-header">
                    <div>
                        <div class="stat-card-label">Compétences</div>
                        <div class="stat-card-value">${coveredCodes.size}<span style="font-size:1rem;color:var(--text-muted);font-weight:400">/${totalComps}</span></div>
                    </div>
                    <div class="stat-card-icon" style="background:rgba(245,158,11,0.1);color:#f59e0b">
                        <span class="material-symbols-outlined">check_circle</span>
                    </div>
                </div>
                <div class="stat-card-sub">Couvertes par les scénarios</div>
            </div>
            <div class="stat-card">
                <div class="stat-card-header">
                    <div>
                        <div class="stat-card-label">Entreprises</div>
                        <div class="stat-card-value">${enterprises.size}</div>
                    </div>
                    <div class="stat-card-icon" style="background:rgba(99,102,241,0.1);color:#6366f1">
                        <span class="material-symbols-outlined">domain</span>
                    </div>
                </div>
                <div class="stat-card-sub">Partenaires dans les scénarios</div>
            </div>
        </div>
    `;
}

function renderCompetenciesChecklist() {
    return REFERENTIEL.blocs.map(bloc => `
        <div style="margin-bottom: 12px;">
            <div style="font-size:0.78rem;font-weight:700;color:${bloc.couleur};margin-bottom:8px;padding:4px 0;">${bloc.nom}</div>
            ${bloc.competences.map(c => `
                <label class="competency-item">
                    <input type="checkbox" name="competences" value="${c.code}" />
                    <div class="competency-item-text">
                        <span class="competency-item-code">${c.code} — ${c.nom}</span>
                        <span class="competency-item-desc">${c.desc}</span>
                    </div>
                </label>
            `).join('')}
        </div>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

async function renderTopContributors() {
    const contributors = await getTopContributors(5);
    
    if (contributors.length === 0) {
        return '';
    }
    
    const podiumColors = ['#FFD700', '#C0C0C0', '#CD7F32']; // Or, Argent, Bronze
    
    const contributorsHTML = contributors.map((c, index) => {
        const initials = getAuthorInitials(c.name);
        const rank = index + 1;
        const medalColor = index < 3 ? podiumColors[index] : 'transparent';
        const showMedal = index < 3;
        
        return `
            <div class="contributor-item">
                <div class="contributor-rank">${showMedal ? `<span class="medal" style="background:${medalColor}">${rank}</span>` : rank}</div>
                <div class="contributor-avatar">${initials}</div>
                <div class="contributor-info">
                    <div class="contributor-name">${escapeHtml(c.name)}</div>
                    <div class="contributor-count">${c.count} scénario${c.count > 1 ? 's' : ''}</div>
                </div>
            </div>
        `;
    }).join('');
    
    return `
        <section class="contributors-section">
            <div class="contributors-inner">
                <div class="contributors-header">
                    <h2><span class="material-symbols-outlined">emoji_events</span> Meilleurs Contributeurs</h2>
                    <p>Remercions les enseignants qui enrichissent la plateforme en partageant leurs scénarios pédagogiques.</p>
                </div>
                <div class="contributors-list">
                    ${contributorsHTML}
                </div>
            </div>
        </section>
    `;
}

// =============================================
// PAGE RENDERERS
// =============================================

async function renderAccueil() {
    const all = await loadScenarios();
    const totalScenarios = all.length;
    const coveredCodes = new Set();
    all.forEach(s => s.competences.forEach(c => coveredCodes.add(c)));
    const totalComps = REFERENTIEL.blocs.reduce((sum, b) => sum + b.competences.length, 0);

    return `
    <div class="page" id="page-accueil">
        <!-- Hero -->
        <section class="hero">
            <div class="hero-bg"></div>
            <div class="hero-gradient"></div>
            <div class="hero-content">
                <span class="hero-badge">Nouveau Référentiel Bac Pro 2025</span>
                <h1>Ensemble pour le <span class="gradient-text">Bac Pro métiers de la logistique</span></h1>
                <p class="hero-desc">La première plateforme collaborative dédiée à la mutualisation des parcours pédagogiques. Partagez vos scénarios, adaptez ceux de vos collègues et construisez ensemble un parcours complet et cohérent.</p>
                <div class="hero-actions">
                    <button class="btn btn-primary btn-lg" data-action="navigate" data-page="formulaire">
                        <span class="material-symbols-outlined">add_circle</span>
                        Contribuer un scénario
                    </button>
                    <button class="btn btn-glass btn-lg" data-action="navigate" data-page="seconde">
                        Découvrir les parcours
                    </button>
                </div>
                <div class="hero-stats">
                    <div class="hero-stat">
                        <div class="hero-stat-value" id="stat-teachers">200+</div>
                        <div class="hero-stat-label">Enseignants</div>
                    </div>
                    <div class="hero-stat">
                        <div class="hero-stat-value">${totalScenarios}</div>
                        <div class="hero-stat-label">Scénarios partagés</div>
                    </div>
                    <div class="hero-stat">
                        <div class="hero-stat-value">${coveredCodes.size}/${totalComps}</div>
                        <div class="hero-stat-label">Compétences couvertes</div>
                    </div>
                    <div class="hero-stat">
                        <div class="hero-stat-value">Gratuit</div>
                        <div class="hero-stat-label">Accès libre</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Value Proposition -->
        <section class="value-section">
            <div style="text-align:center;max-width:700px;margin:0 auto 48px">
                <h2 style="font-size:2rem;font-weight:700;margin-bottom:12px">Pourquoi nous rejoindre ?</h2>
                <p style="color:var(--text-secondary);font-size:1.05rem">Une réponse concrète aux défis du nouveau référentiel. Gagnez du temps et enrichissez vos pratiques pédagogiques.</p>
            </div>
            <div class="value-grid">
                <div class="value-card">
                    <div class="value-card-icon"><span class="material-symbols-outlined">groups</span></div>
                    <h3>Collaboration Nationale</h3>
                    <p>Ne restez pas isolé face à la réforme. Échangez avec des collègues professeurs de logistique de toutes les académies de France.</p>
                </div>
                <div class="value-card">
                    <div class="value-card-icon"><span class="material-symbols-outlined">verified</span></div>
                    <h3>Conformité 2025</h3>
                    <p>Des ressources strictement adaptées aux nouvelles compétences et blocs du Bac Pro Métiers de la Logistique rénové.</p>
                </div>
                <div class="value-card">
                    <div class="value-card-icon"><span class="material-symbols-outlined">schedule</span></div>
                    <h3>Gain de Temps</h3>
                    <p>Accédez à une banque de scénarios pédagogiques clés en main, prêts à l'emploi pour vos classes.</p>
                </div>
            </div>
        </section>

        <!-- How it works -->
        <section class="how-section">
            <div class="how-inner">
                <div class="how-image">
                    <img alt="Enseignants collaborant autour d'une tablette numérique" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKjvTMCo_DmlJAmZoLaoKNJOS-t5bI4G-Tqf_mJvVh1lx4QwUxpqnk8w-H3kUKPVfu-Rsp7Ln0rtBirJ4rsozpBMsJ-7cdbAhMq-a4r6y-XKGqUkVT37IcwLkB9ya2xtsGVuNwrZ3fg4XJKoJIiTOS2LJJBuN7UOQvoadywlTF5q_qnthuUO5lmmg0b4oRvR9bzI_1lsoI4n0FEiprTTOSVuo_vym7n46mQBnemPJyD6ntzoiNLZ0F-sIjj-y82TQbNgxQLw9ddX4"/>
                    <div class="how-image-overlay">
                        <div class="how-image-card">
                            <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
                                <span class="how-image-card-dot"></span>
                                <span style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-muted)">Dernier ajout</span>
                            </div>
                            <div style="font-weight:700;font-size:0.9rem">Scénario : Gestion des flux entrants automatisés</div>
                            <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px">Par M. Dupont • Lycée Professionnel Jean Moulin</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 style="font-size:2rem;font-weight:700;margin-bottom:8px">Comment ça marche ?</h2>
                    <p style="font-size:1.05rem;color:var(--text-secondary);margin-bottom:32px">Le processus est simple et ouvert à tous les enseignants.</p>
                    <div class="how-steps">
                        <div class="how-step">
                            <div class="how-step-num filled">1</div>
                            <div>
                                <h3>Explorez les parcours</h3>
                                <p>Consultez les scénarios partagés par niveau (Seconde, Première, Terminale) et filtrez par compétence.</p>
                            </div>
                        </div>
                        <div class="how-step">
                            <div class="how-step-num outlined">2</div>
                            <div>
                                <h3>Déposez vos ressources</h3>
                                <p>Remplissez le formulaire avec le titre, l'entreprise support, les compétences visées et le niveau.</p>
                            </div>
                        </div>
                        <div class="how-step">
                            <div class="how-step-num muted">3</div>
                            <div>
                                <h3>Construisez un parcours commun</h3>
                                <p>Tous les enseignants bénéficient des mêmes scénarios pour harmoniser la progression nationale.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Quote -->
        <section class="quote-section">
            <div class="quote-content">
                <span class="material-symbols-outlined quote-icon">format_quote</span>
                <p class="quote-text">"La mutualisation est la clé de la réussite de cette réforme. Cette plateforme nous permet de ne pas réinventer la roue chacun dans notre coin et de nous concentrer sur la pédagogie."</p>
                <div class="quote-author-avatar">RL</div>
                <div class="quote-author">Roger LOAIZA SOTO</div>
                <div class="quote-role">professeur Logistique - Académie de Versailles</div>
            </div>
        </section>

        <!-- Top Contributors -->
        ${await renderTopContributors()}

        <!-- CTA -->
        <section class="cta-section">
            <h2>Prêt à collaborer ?</h2>
            <p>Rejoignez la communauté des enseignants et accédez dès aujourd'hui aux ressources du Bac pro métiers de la logistique.</p>
            <div class="cta-actions">
                <button class="btn btn-primary btn-lg" data-action="navigate" data-page="formulaire">Ajouter un scénario</button>
                <button class="btn btn-outline btn-lg" data-action="navigate" data-page="seconde">Explorer les parcours</button>
            </div>
            ${renderExportImportButtons()}
        </section>
    </div>
    `;
}

async function renderParcours(level) {
    const labels = { seconde: 'Seconde', premiere: 'Première', terminale: 'Terminale' };
    const descriptions = {
        seconde: 'Découverte des métiers de la logistique. Premiers scénarios de mise en situation professionnelle.',
        premiere: 'Approfondissement des compétences opérationnelles. Scénarios de spécialisation et co-intervention.',
        terminale: 'Préparation intensive à l\'examen. Scénarios complexes et transversaux, validation des compétences terminales.'
    };
    const scenarios = await getScenariosByLevel(level);
    const label = labels[level];

    const scenarioCards = scenarios.map(s => renderScenarioCard(s)).join('');

    return `
    <div class="page" id="page-${level}">
        <div class="page-content">
            <div class="breadcrumbs">
                <a href="#accueil">Accueil</a>
                <span class="material-symbols-outlined">chevron_right</span>
                <span class="current">Parcours ${label}</span>
            </div>

            <div class="parcours-hero">
                <div class="parcours-hero-bg" style="background-image:url('${HERO_IMAGES[level]}')"></div>
                <div class="parcours-hero-overlay">
                    <div>
                        <div class="parcours-hero-tags">
                            <span class="parcours-hero-tag" style="background:var(--primary);color:#fff">Référentiel 2025</span>
                            <span class="parcours-hero-tag" style="background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.25)">${label} Pro</span>
                        </div>
                        <h1>Parcours ${label} Professionnelle</h1>
                        <p class="parcours-hero-subtitle">${descriptions[level]}</p>
                    </div>
                </div>
            </div>

            ${await renderStats(level)}

            <div class="section-toolbar">
                <h3>Scénarios Disponibles <span class="tag tag-primary">${scenarios.length}</span></h3>
                <button class="btn btn-primary btn-sm" data-action="navigate" data-page="formulaire">
                    <span class="material-symbols-outlined">add</span>
                    Nouveau Scénario
                </button>
            </div>

            <div class="scenarios-grid">
                ${scenarioCards}
                <div class="card-add" data-action="navigate" data-page="formulaire">
                    <div class="card-add-icon">
                        <span class="material-symbols-outlined">add</span>
                    </div>
                    <h4>Créer un scénario</h4>
                    <p>Partagez vos ressources pédagogiques avec la communauté.</p>
                </div>
            </div>

            ${scenarios.length === 0 ? `
                <div class="empty-state">
                    <div class="empty-state-icon"><span class="material-symbols-outlined">inventory</span></div>
                    <h3>Aucun scénario pour la ${label}</h3>
                    <p>Soyez le premier à partager un scénario pédagogique pour ce niveau !</p>
                    <button class="btn btn-primary" data-action="navigate" data-page="formulaire">Ajouter un scénario</button>
                </div>
            ` : ''}
        </div>
    </div>
    `;
}

async function renderFormulaire() {
    const isAuthenticated = !!CURRENT_USER;
    const displayName = getDisplayName();
    return `
    <div class="page" id="page-formulaire">
        <div class="page-content">
            <div class="breadcrumbs">
                <a href="#accueil">Accueil</a>
                <span class="material-symbols-outlined">chevron_right</span>
                <a href="#seconde">Scénarios</a>
                <span class="material-symbols-outlined">chevron_right</span>
                <span class="current">Nouveau Scénario</span>
            </div>

            <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px">
                <div>
                    <h1 class="section-title">Ajouter un Scénario Pédagogique</h1>
                    <p class="section-subtitle">Partagez vos séquences pédagogiques conformes au Référentiel 2025 avec la communauté des enseignants.</p>
                </div>
                <div style="display:flex;gap:10px">
                    <button type="reset" class="btn btn-outline btn-sm" form="scenario-form">Réinitialiser</button>
                    <button type="submit" class="btn btn-primary btn-sm" form="scenario-form">
                        <span class="material-symbols-outlined">publish</span>
                        Publier
                    </button>
                </div>
            </div>

            ${!isAuthenticated ? `
            <div class="form-info-card" style="margin-bottom:24px;padding:16px;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.2);border-radius:12px;color:var(--text-secondary)">
                <span class="material-symbols-outlined" style="vertical-align:middle;margin-right:6px">info</span>
                Vous devez être <a href="#" data-action="open-auth" style="color:var(--primary);font-weight:600">connecté</a> pour publier un scénario.
            </div>
            ` : ''}

            <form id="scenario-form">
                <div class="form-layout">
                    <!-- Left: Main Form -->
                    <div>
                        <!-- General Info -->
                        <div class="form-card" style="margin-bottom:24px">
                            <div class="form-card-header">
                                <span class="material-symbols-outlined">info</span>
                                <h3>Informations Générales</h3>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="f-titre">Titre du scénario <span class="required">*</span></label>
                                <input class="form-input" type="text" id="f-titre" placeholder="Ex : Réception des marchandises — Cas IKEA" required />
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label" for="f-entreprise">Entreprise support</label>
                                    <div class="form-input-icon">
                                        <span class="material-symbols-outlined">business</span>
                                        <input class="form-input" type="text" id="f-entreprise" placeholder="Ex : IKEA, Amazon, Fictif..." />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="f-niveau">Niveau de classe <span class="required">*</span></label>
                                    <div class="form-input-icon">
                                        <span class="material-symbols-outlined">school</span>
                                        <select class="form-select" id="f-niveau" required>
                                            <option value="" disabled selected>Sélectionner un niveau</option>
                                            <option value="seconde">Seconde Bac Pro</option>
                                            <option value="premiere">Première Bac Pro</option>
                                            <option value="terminale">Terminale Bac Pro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label" for="f-auteur">Auteur</label>
                                    <div class="form-input-icon">
                                        <span class="material-symbols-outlined">person</span>
                                        <input class="form-input" type="text" id="f-auteur" value="${escapeHtml(displayName)}" readonly />
                                    </div>
                                    <p style="font-size:0.75rem;color:var(--text-muted);margin-top:4px">Le nom est automatiquement rempli depuis votre profil.</p>
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="f-duree">Durée estimée</label>
                                    <div class="form-input-icon">
                                        <span class="material-symbols-outlined">schedule</span>
                                        <input class="form-input" type="text" id="f-duree" placeholder="Ex : 2h, 4h, ½ journée..." />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="f-problematique">Problématique <span class="required">*</span></label>
                                <input class="form-input" type="text" id="f-problematique" placeholder="Ex : Comment optimiser la réception des marchandises en respectant les normes de sécurité ?" required />
                                <p style="font-size:0.75rem;color:var(--text-muted);margin-top:4px">La question centrale que les élèves vont devoir résoudre.</p>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="f-description">Description courte</label>
                                <textarea class="form-textarea" id="f-description" placeholder="Décrivez brièvement le contexte, les objectifs et le déroulement de la séance..." maxlength="500" oninput="updateCharCount()"></textarea>
                                <div class="form-char-count"><span id="char-count">0</span> / 500 caractères</div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="f-mise-en-situation">Mise en situation</label>
                                <textarea class="form-textarea" id="f-mise-en-situation" placeholder="Décrivez la mise en situation professionnelle : contexte, rôles des élèves, situation initiale..." maxlength="1000" oninput="updateCharCount('f-mise-en-situation', 'char-count-situation')"></textarea>
                                <div class="form-char-count"><span id="char-count-situation">0</span> / 1000 caractères</div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="f-magasin-pedagogique">Utilisation du magasin pédagogique</label>
                                <textarea class="form-textarea" id="f-magasin-pedagogique" placeholder="Décrivez les ressources du magasin pédagogique nécessaires : matériel, documents, supports, consommables..." maxlength="800" oninput="updateCharCount('f-magasin-pedagogique', 'char-count-magasin')"></textarea>
                                <div class="form-char-count"><span id="char-count-magasin">0</span> / 800 caractères</div>
                            </div>
                        </div>

                        <!-- Competencies -->
                        <div class="form-card">
                            <div class="form-card-header">
                                <span class="material-symbols-outlined">verified</span>
                                <h3>Référentiel 2025 — Compétences visées</h3>
                                <span class="tag tag-success" style="margin-left:auto">Nouveau Programme</span>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Compétences visées <span class="required">*</span></label>
                                <div class="competencies-list">
                                    ${renderCompetenciesChecklist()}
                                </div>
                                <p style="font-size:0.78rem;color:var(--text-muted);margin-top:6px;display:flex;align-items:center;gap:4px">
                                    <span class="material-symbols-outlined" style="font-size:14px">info</span>
                                    Sélectionnez une ou plusieurs compétences du référentiel.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Tips & Status -->
                    <div>
                        <div class="tips-card" style="margin-bottom:24px">
                            <h4><span class="material-symbols-outlined">lightbulb</span> Conseils pédagogiques</h4>
                            <ul>
                                <li>Intégrez des documents "élèves" et "professeurs" séparés si possible.</li>
                                <li>Mentionnez si le scénario nécessite des logiciels spécifiques (EBP, Odoo, WMS...).</li>
                                <li>Décrivez le contexte professionnel de manière réaliste dans la mise en situation.</li>
                                <li>Détaillez les ressources du magasin pédagogique nécessaires (matériel, documents, supports).</li>
                                <li>Précisez les prérequis nécessaires pour les élèves.</li>
                                <li>Vérifiez que les logos d'entreprises sont utilisés à des fins pédagogiques.</li>
                            </ul>
                        </div>

                        <div class="form-card">
                            <h4 style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-muted);margin-bottom:12px">Statut</h4>
                            <div style="display:flex;align-items:center;gap:10px">
                                <div style="width:10px;height:10px;border-radius:50%;background:#cbd5e1"></div>
                                <span style="font-size:0.9rem;color:var(--text-secondary)">Brouillon (Non enregistré)</span>
                            </div>
                        </div>

                        <div class="form-card" style="margin-top:20px">
                            <h4 style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-muted);margin-bottom:16px">Référentiel — Blocs</h4>
                            ${REFERENTIEL.blocs.map(bloc => `
                                <div style="margin-bottom:12px">
                                    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
                                        <span style="font-size:0.78rem;font-weight:700;color:${bloc.couleur}">${bloc.nom.split('—')[0].trim()}</span>
                                        <span style="font-size:0.72rem;color:var(--text-muted)">${bloc.competences.length} compétences</span>
                                    </div>
                                    <div class="progress-bar">
                                        <div class="progress-bar-fill" style="width:${Math.round(bloc.competences.length / REFERENTIEL.blocs.reduce((s, b) => s + b.competences.length, 0) * 100)}%;background:${bloc.couleur}"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    `;
}

// =============================================
// FORM HANDLERS
// =============================================
async function submitForm(e) {
    if (e) e.preventDefault();
    if (!CURRENT_USER) {
        alert('Veuillez vous connecter pour publier un scénario.');
        openAuthModal();
        return;
    }

    console.log('[submitForm] Début de la soumission...');
    
    const titre = document.getElementById('f-titre')?.value.trim();
    const entreprise = document.getElementById('f-entreprise')?.value.trim();
    const niveau = document.getElementById('f-niveau')?.value;
    const duree = document.getElementById('f-duree')?.value.trim();
    const problematique = document.getElementById('f-problematique')?.value.trim();
    const description = document.getElementById('f-description')?.value.trim();
    const miseEnSituation = document.getElementById('f-mise-en-situation')?.value.trim();
    const magasinPedagogique = document.getElementById('f-magasin-pedagogique')?.value.trim();
    const checkboxes = document.querySelectorAll('input[name="competences"]:checked');
    const competences = Array.from(checkboxes).map(cb => cb.value);

    if (!titre) { alert('Veuillez saisir un titre pour le scénario.'); return; }
    if (!niveau) { alert('Veuillez sélectionner un niveau de classe.'); return; }
    if (!problematique) { alert('Veuillez saisir une problématique.'); return; }
    if (competences.length === 0) { alert('Veuillez sélectionner au moins une compétence.'); return; }

    const submitBtn = document.querySelector('button[type="submit"][form="scenario-form"]');
    if (submitBtn) submitBtn.disabled = true;

    const result = await addScenario({ titre, entreprise, niveau, duree: duree || '2h', problematique, description, miseEnSituation, magasinPedagogique, competences });

    if (submitBtn) submitBtn.disabled = false;
    if (result) {
        showToast('Scénario publié avec succès !');
        resetForm();
        setTimeout(() => navigateTo(niveau), 800);
    } else {
        alert('Le scénario n\'a pas pu être enregistré. Vérifiez la connexion et réessayez.');
    }
}

function resetForm() {
    const form = document.getElementById('scenario-form');
    if (form) {
        form.reset();
        updateCharCount('f-description', 'char-count');
        updateCharCount('f-mise-en-situation', 'char-count-situation');
        updateCharCount('f-magasin-pedagogique', 'char-count-magasin');
    }
}

async function handleDelete(id) {
    if (confirm('Supprimer ce scénario ?')) {
        const ok = await deleteScenario(id);
        if (ok) {
            await renderPage();
            showToast('Scénario supprimé.');
        }
    }
}

function updateCharCount(textareaId = 'f-description', counterId = 'char-count') {
    const textarea = document.getElementById(textareaId);
    const counter = document.getElementById(counterId);
    if (textarea && counter) {
        counter.textContent = textarea.value.length;
    }
}

// =============================================
// SCENARIO MODAL
// =============================================
async function openScenarioModal(id) {
    const all = await loadScenarios();
    const scenario = all.find(s => s.id === id);
    if (!scenario) return;
    
    let modal = document.getElementById('scenario-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'scenario-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = renderScenarioModal(scenario);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('scenario-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

function renderScenarioModal(scenario) {
    const competencyDetails = scenario.competences.map(code => {
        const info = getCompetencyInfo(code);
        if (!info) return '';
        const color = info.bloc.couleur;
        return `
            <div class="modal-competency" style="border-left-color: ${color}">
                <div class="modal-competency-code" style="color: ${color}">${escapeHtml(code)}</div>
                <div class="modal-competency-name">${escapeHtml(info.nom)}</div>
                <div class="modal-competency-desc">${escapeHtml(info.desc)}</div>
            </div>
        `;
    }).join('');
    
    const blocInfo = getCompetencyInfo(scenario.competences[0]);
    const blocColor = blocInfo ? blocInfo.bloc.couleur : '#137fec';
    const initials = getAuthorInitials(scenario.auteur);
    
    const niveauLabel = {
        'seconde': 'Seconde Bac Pro',
        'premiere': 'Première Bac Pro',
        'terminale': 'Terminale Bac Pro'
    }[scenario.niveau] || scenario.niveau;
    
    return `
        <div class="modal-overlay" data-action="close-modal"></div>
        <div class="modal-content">
            <button class="modal-close" data-action="close-modal">
                <span class="material-symbols-outlined">close</span>
            </button>
            
            <div class="modal-header" style="background: linear-gradient(135deg, ${blocColor}15, ${blocColor}05)">
                <div class="modal-badges">
                    <span class="modal-badge" style="background: ${blocColor}">
                        <span class="material-symbols-outlined">school</span>
                        ${escapeHtml(niveauLabel)}
                    </span>
                    <span class="modal-badge" style="background: rgba(107, 114, 128, 0.9)">
                        <span class="material-symbols-outlined">schedule</span>
                        ${escapeHtml(scenario.duree)}
                    </span>
                    ${scenario.entreprise ? `
                    <span class="modal-badge" style="background: rgba(147, 51, 234, 0.9)">
                        <span class="material-symbols-outlined">business</span>
                        ${escapeHtml(scenario.entreprise)}
                    </span>
                    ` : ''}
                </div>
                <h2 class="modal-title">${escapeHtml(scenario.titre)}</h2>
                <div class="modal-meta">
                    <div class="modal-author">
                        <div class="modal-author-avatar">${initials}</div>
                        <span>${escapeHtml(scenario.auteur)}</span>
                    </div>
                    <span class="modal-date">Créé le ${escapeHtml(scenario.date)}</span>
                </div>
            </div>
            
            <div class="modal-body">
                <div class="modal-section">
                    <h3><span class="material-symbols-outlined">help_outline</span> Problématique</h3>
                    <p class="modal-problematique">${escapeHtml(scenario.problematique || 'Aucune problématique définie.')}</p>
                </div>
                
                <div class="modal-section">
                    <h3><span class="material-symbols-outlined">description</span> Description</h3>
                    <p class="modal-description">${escapeHtml(scenario.description || 'Aucune description disponible.')}</p>
                </div>
                
                <div class="modal-section">
                    <h3><span class="material-symbols-outlined">theater_comedy</span> Mise en situation</h3>
                    <p class="modal-mise-en-situation">${escapeHtml(scenario.miseEnSituation || 'Aucune mise en situation définie.')}</p>
                </div>
                
                <div class="modal-section">
                    <h3><span class="material-symbols-outlined">inventory_2</span> Utilisation du magasin pédagogique</h3>
                    <p class="modal-magasin">${escapeHtml(scenario.magasinPedagogique || 'Aucune ressource du magasin pédagogique spécifiée.')}</p>
                </div>
                
                <div class="modal-section">
                    <h3><span class="material-symbols-outlined">verified</span> Compétences visées (${scenario.competences.length})</h3>
                    <div class="modal-competencies">
                        ${competencyDetails}
                    </div>
                </div>
            </div>
            
            <div class="modal-footer">
                <button class="btn btn-outline" data-action="close-modal">Fermer</button>
                ${canManageScenario(scenario) ? `
                <button class="btn btn-danger" data-action="delete" data-scenario-id="${escapeHtml(scenario.id)}">
                    <span class="material-symbols-outlined">delete</span>
                    Supprimer
                </button>
                ` : ''}
                <button class="btn btn-primary" data-action="navigate" data-page="formulaire">
                    <span class="material-symbols-outlined">add</span>
                    Créer un scénario similaire
                </button>
            </div>
        </div>
    `;
}

// Fermer la modal avec la touche Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeAuthModal();
    }
});

// =============================================
// MAIN ROUTER
// =============================================
async function renderPage() {
    const page = getPage();
    const container = document.getElementById('page-container');
    if (!container) return;

    container.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Chargement des scénarios...</p></div>';

    try {
        switch (page) {
            case 'accueil':
                container.innerHTML = await renderAccueil();
                break;
            case 'seconde':
                container.innerHTML = await renderParcours('seconde');
                break;
            case 'premiere':
                container.innerHTML = await renderParcours('premiere');
                break;
            case 'terminale':
                container.innerHTML = await renderParcours('terminale');
                break;
            case 'formulaire':
                container.innerHTML = await renderFormulaire();
                break;
            default:
                container.innerHTML = await renderAccueil();
        }
    } catch (err) {
        console.error('[renderPage] Erreur:', err);
        container.innerHTML = `<div class="empty-state"><h3>Erreur de chargement</h3><p>${escapeHtml(err.message)}</p></div>`;
    }

    updateActiveNav();
    applyPageTransition(container, page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    initPageAnimations();
}

// Directional page transition: forward = slide in from right, back = from left.
const NAV_ORDER = ['accueil', 'seconde', 'premiere', 'terminale', 'formulaire'];
let lastRenderedPage = null;
function applyPageTransition(container, page) {
    const wrapper = container.firstElementChild;
    if (!wrapper) return;
    if (lastRenderedPage !== null && !prefersReducedMotion()) {
        const from = NAV_ORDER.indexOf(lastRenderedPage);
        const to = NAV_ORDER.indexOf(page);
        const back = from !== -1 && to !== -1 && to < from;
        wrapper.classList.add(back ? 'page-back' : 'page-forward');
    }
    lastRenderedPage = page;
}

// =============================================
// AUTH UI
// =============================================
function renderAuthButton() {
    const container = document.getElementById('auth-container');
    if (!container) return;

    if (!USE_SUPABASE) {
        container.innerHTML = '';
        return;
    }

    if (CURRENT_USER) {
        const name = getDisplayName();
        const initials = getAuthorInitials(name);
        container.innerHTML = `
            <div class="user-menu" id="user-menu">
                <button class="user-avatar-btn" aria-haspopup="true" aria-expanded="false">
                    <div class="user-avatar">${initials}</div>
                    <span class="user-name">${escapeHtml(name)}</span>
                    <span class="material-symbols-outlined" style="font-size:1.1rem">expand_more</span>
                </button>
                <div class="user-dropdown" id="user-dropdown">
                    <div class="user-dropdown-email">${escapeHtml(CURRENT_USER.email || '')}</div>
                    <button class="user-dropdown-item user-dropdown-logout" data-action="signout">
                        <span class="material-symbols-outlined">logout</span> Se déconnecter
                    </button>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <button class="btn btn-outline btn-sm" data-action="open-auth">
                <span class="material-symbols-outlined">login</span> Connexion
            </button>
        `;
    }

    const menuBtn = container.querySelector('#user-menu .user-avatar-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = document.getElementById('user-dropdown');
            const expanded = dropdown?.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', String(expanded));
        });
    }
}

function openAuthModal() {
    let modal = document.getElementById('auth-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'auth-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    modal.innerHTML = renderAuthModal();
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    attachAuthModalListeners();
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

function renderAuthModal(mode = 'login') {
    const isLogin = mode === 'login';
    return `
        <div class="modal-overlay" data-action="close-auth-modal"></div>
        <div class="modal-content auth-modal-content">
            <button class="modal-close" data-action="close-auth-modal">
                <span class="material-symbols-outlined">close</span>
            </button>
            <div class="auth-modal-header">
                <h2>${isLogin ? 'Connexion' : 'Créer un compte'}</h2>
                <p>${isLogin ? 'Accédez à vos scénarios et contribuez à la communauté.' : 'Rejoignez les enseignants qui mutualisent leurs scénarios.'}</p>
            </div>
            <form id="auth-form" data-mode="${mode}">
                ${!isLogin ? `
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" for="auth-prenom">Prénom</label>
                        <input class="form-input" type="text" id="auth-prenom" required />
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="auth-nom">Nom</label>
                        <input class="form-input" type="text" id="auth-nom" required />
                    </div>
                </div>
                ` : ''}
                <div class="form-group">
                    <label class="form-label" for="auth-email">Email</label>
                    <input class="form-input" type="email" id="auth-email" required />
                </div>
                <div class="form-group">
                    <label class="form-label" for="auth-password">Mot de passe</label>
                    <input class="form-input" type="password" id="auth-password" minlength="6" required />
                </div>
                <button type="submit" class="btn btn-primary btn-lg" style="width:100%;margin-top:12px">
                    ${isLogin ? 'Se connecter' : 'Créer mon compte'}
                </button>
            </form>
            <div class="auth-modal-footer">
                <button class="btn btn-text" data-action="toggle-auth-mode">
                    ${isLogin ? 'Pas encore de compte ? S\'inscrire' : 'Déjà un compte ? Se connecter'}
                </button>
            </div>
        </div>
    `;
}

function attachAuthModalListeners() {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;

    modal.querySelectorAll('[data-action="close-auth-modal"]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            closeAuthModal();
        });
    });

    const toggle = modal.querySelector('[data-action="toggle-auth-mode"]');
    if (toggle) {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const form = modal.querySelector('#auth-form');
            const newMode = form?.dataset.mode === 'login' ? 'register' : 'login';
            modal.innerHTML = renderAuthModal(newMode);
            attachAuthModalListeners();
        });
    }

    const form = modal.querySelector('#auth-form');
    if (form) {
        form.addEventListener('submit', handleAuthSubmit);
    }
}

async function handleAuthSubmit(e) {
    e.preventDefault();
    const mode = e.target.dataset.mode;
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;

    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    let user = null;
    if (mode === 'login') {
        user = await signIn(email, password);
    } else {
        const prenom = document.getElementById('auth-prenom').value.trim();
        const nom = document.getElementById('auth-nom').value.trim();
        user = await signUp(email, password, nom, prenom);
    }

    if (submitBtn) submitBtn.disabled = false;
    if (user) {
        closeAuthModal();
        showToast(mode === 'login' ? 'Connexion réussie.' : 'Compte créé avec succès.');
        renderAuthButton();
        await renderPage();
    }
}


// =============================================
// EVENT LISTENERS
// =============================================
window.addEventListener('hashchange', renderPage);
window.addEventListener('DOMContentLoaded', async () => {
    await initApp();
});

async function initApp() {
    initSupabase();
    await initAuth();
    renderAuthButton();
    await renderPage();

    // Global delegated click handler for data-action elements
    document.addEventListener('click', (e) => {
        const actionEl = e.target.closest('[data-action]');
        if (!actionEl) return;
        const action = actionEl.dataset.action;

        if (action === 'navigate') {
            e.preventDefault();
            const page = actionEl.dataset.page;
            if (page) navigateTo(page);
            return;
        }

        if (action === 'open-modal') {
            e.preventDefault();
            e.stopPropagation();
            const id = actionEl.dataset.scenarioId || actionEl.closest('[data-scenario-id]')?.dataset.scenarioId;
            if (id) openScenarioModal(id);
            return;
        }

        if (action === 'delete') {
            e.preventDefault();
            e.stopPropagation();
            const id = actionEl.dataset.scenarioId;
            if (id) handleDelete(id);
            return;
        }

        if (action === 'close-modal') {
            e.preventDefault();
            closeModal();
            return;
        }

        if (action === 'open-auth') {
            e.preventDefault();
            openAuthModal();
            return;
        }

        if (action === 'close-auth-modal') {
            e.preventDefault();
            closeAuthModal();
            return;
        }

        if (action === 'signout') {
            e.preventDefault();
            signOut();
            return;
        }

        if (action === 'export') {
            e.preventDefault();
            exportScenarios();
        }
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', String(mobileNav.classList.contains('open')));
        });
        // Close mobile nav on link click
        mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => mobileNav.classList.remove('open'));
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (header) header.classList.toggle('scrolled', window.scrollY > 10);
    });

    // Theme toggle (light / dark)
    initThemeToggle();
}

if (document.readyState !== 'loading') {
    initApp();
}


// =============================================
// THEME (light / dark)
// =============================================
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.querySelector('#theme-toggle .material-symbols-outlined');
    if (icon) icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
}

function initThemeToggle() {
    // The inline <head> script already set data-theme; sync the icon to it.
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current);

    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    });
}

// =============================================
// MOTION ENGINE — scroll reveal, counters, progress
// =============================================
function prefersReducedMotion() {
    return window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Orchestrate all entrance animations for the freshly rendered page.
function initPageAnimations() {
    const scope = document.getElementById('page-container');
    if (!scope) return;

    // Reduced motion: skip motion, just show final values immediately.
    if (prefersReducedMotion()) return;

    initScrollReveal(scope);
    animateCounters(scope);
    animateProgressBars(scope);
}

// Tag elements with .reveal + stagger delay, then reveal on intersection.
function initScrollReveal(scope) {
    // [selector, staggerStepMs, variantClass]
    const groups = [
        ['.hero-badge, .hero h1, .hero-desc, .hero-actions, .hero-stats', 90, ''],
        ['.section-header', 0, ''],
        ['.stats-grid .stat-card', 80, 'reveal-zoom'],
        ['.scenarios-grid > .card, .scenarios-grid > .card-add', 55, 'reveal-zoom'],
        ['.value-grid .value-card', 90, ''],
        ['.how-image', 0, 'reveal-right'],
        ['.how-step', 110, 'reveal-left'],
        ['.contributors-header, .contributors-list .contributor-item', 70, ''],
        ['.quote-content', 0, ''],
        ['.cta-section h2, .cta-section p, .cta-actions', 80, ''],
        ['.parcours-hero', 0, ''],
        ['.filter-bar', 0, ''],
        ['.form-card, .tips-card', 110, ''],
        ['.empty-state', 0, ''],
    ];

    const supportsIO = 'IntersectionObserver' in window;
    const io = supportsIO ? new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;

    groups.forEach(([selector, step, variant]) => {
        const els = scope.querySelectorAll(selector);
        els.forEach((el, i) => {
            el.classList.add('reveal');
            if (variant) el.classList.add(variant);
            if (step) el.style.setProperty('--reveal-delay', (i * step) + 'ms');
            if (io) {
                io.observe(el);
            } else {
                el.classList.add('is-visible'); // graceful fallback
            }
        });
    });
}

// Count-up animation for KPI values, preserving any suffix markup.
function animateCounters(scope) {
    const values = scope.querySelectorAll('.stat-card-value, .hero-stat-value');
    values.forEach(el => {
        const node = el.firstChild;
        if (!node || node.nodeType !== 3) return; // must start with a text node
        const match = node.nodeValue.trim().match(/^(\d[\d\s]*)(.*)$/);
        if (!match) return;
        const target = parseInt(match[1].replace(/\s/g, ''), 10);
        const suffix = match[2] || '';
        if (!isFinite(target) || target <= 0) return;

        const duration = 950;
        let startTime = null;
        function tick(now) {
            if (startTime === null) startTime = now;
            const p = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            node.nodeValue = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else node.nodeValue = target + suffix;
        }
        node.nodeValue = '0' + suffix;
        requestAnimationFrame(tick);
    });
}

// Animate progress bar widths from 0 to their target (CSS transition handles the tween).
function animateProgressBars(scope) {
    scope.querySelectorAll('.progress-bar-fill').forEach(bar => {
        const target = bar.style.width;
        if (!target) return;
        bar.style.width = '0%';
        requestAnimationFrame(() => requestAnimationFrame(() => {
            bar.style.width = target;
        }));
    });
}
