/* ============================================
   PLATEFORME LOGISTIQUE 2025 — AVEC SUPABASE
   ============================================ */

// =============================================
// SUPABASE CONFIGURATION
// =============================================
// Remplacez ces valeurs par les vôtres après création du projet Supabase
const SUPABASE_URL = window.ENV?.SUPABASE_URL || 'https://votre-projet.supabase.co';
const SUPABASE_ANON_KEY = window.ENV?.SUPABASE_ANON_KEY || 'votre-clé-anon';

// Initialisation Supabase (sera undefined si les clés ne sont pas configurées)
let supabase = null;
let USE_SUPABASE = false;

try {
    if (SUPABASE_URL && SUPABASE_ANON_KEY && 
        SUPABASE_URL !== 'https://votre-projet.supabase.co') {
        supabase = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        USE_SUPABASE = true;
        console.log('%c[Supabase] Connecté ✓', 'color: #3ecf8e;');
    }
} catch (e) {
    console.warn('%c[Supabase] Non configuré - Mode localStorage', 'color: #f59e0b;');
}

// =============================================
// AUTHENTIFICATION
// =============================================
let CURRENT_USER = null;

async function initAuth() {
    if (!USE_SUPABASE) return;
    
    // Vérifier la session active
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        CURRENT_USER = session.user;
        await loadUserProfile();
    }
    
    // Écouter les changements d'auth
    supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
            CURRENT_USER = session.user;
            await loadUserProfile();
            renderPage();
        } else if (event === 'SIGNED_OUT') {
            CURRENT_USER = null;
            renderPage();
        }
    });
}

async function loadUserProfile() {
    if (!CURRENT_USER) return;
    
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', CURRENT_USER.id)
        .single();
    
    if (data) {
        CURRENT_USER.profile = data;
    }
}

async function signUp(email, password, nom, prenom) {
    if (!USE_SUPABASE) {
        alert('Mode hors-ligne : Inscription impossible');
        return;
    }
    
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { nom, prenom }
        }
    });
    
    if (error) {
        alert('Erreur : ' + error.message);
        return null;
    }
    
    // Créer le profil
    await supabase.from('profiles').insert([{
        id: data.user.id,
        email,
        nom,
        prenom
    }]);
    
    return data.user;
}

async function signIn(email, password) {
    if (!USE_SUPABASE) {
        alert('Mode hors-ligne : Connexion impossible');
        return;
    }
    
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    
    if (error) {
        alert('Erreur : ' + error.message);
        return null;
    }
    
    return data.user;
}

async function signOut() {
    if (!USE_SUPABASE) return;
    await supabase.auth.signOut();
}

// =============================================
// DATA - Chargement depuis Supabase ou localStorage
// =============================================

async function loadScenarios() {
    // Mode Supabase
    if (USE_SUPABASE) {
        try {
            const { data, error } = await supabase
                .from('scenarios')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            
            // Convertir au format de l'application
            return data.map(s => ({
                id: s.id,
                titre: s.titre,
                entreprise: s.entreprise,
                niveau: s.niveau,
                problematique: s.problematique,
                description: s.description,
                miseEnSituation: s.mise_en_situation,
                magasinPedagogique: s.magasin_pedagogique,
                competences: s.competences,
                duree: s.duree,
                auteur: s.auteur,
                date: s.created_at.split('T')[0],
                user_id: s.user_id
            }));
        } catch (e) {
            console.error('[Supabase] Erreur chargement:', e);
            // Fallback sur localStorage
        }
    }
    
    // Mode localStorage (original)
    return loadScenariosLocal();
}

async function saveScenarios(scenarios) {
    // En mode Supabase, on sauvegarde individuellement
    // Cette fonction est conservée pour compatibilité
    if (USE_SUPABASE) return;
    
    saveScenariosLocal(scenarios);
}

async function addScenario(scenario) {
    // Mode Supabase
    if (USE_SUPABASE) {
        try {
            const { data, error } = await supabase
                .from('scenarios')
                .insert([{
                    titre: scenario.titre,
                    entreprise: scenario.entreprise,
                    niveau: scenario.niveau,
                    problematique: scenario.problematique,
                    description: scenario.description,
                    mise_en_situation: scenario.miseEnSituation,
                    magasin_pedagogique: scenario.magasinPedagogique,
                    competences: scenario.competences,
                    duree: scenario.duree || '2h',
                    auteur: scenario.auteur || CURRENT_USER?.profile?.nom || 'Anonyme',
                    user_id: CURRENT_USER?.id
                }])
                .select()
                .single();
            
            if (error) throw error;
            
            return {
                ...scenario,
                id: data.id,
                date: data.created_at.split('T')[0]
            };
        } catch (e) {
            console.error('[Supabase] Erreur ajout:', e);
            alert('Erreur de sauvegarde : ' + e.message);
            return null;
        }
    }
    
    // Mode localStorage
    return addScenarioLocal(scenario);
}

async function deleteScenario(id) {
    // Mode Supabase
    if (USE_SUPABASE) {
        try {
            const { error } = await supabase
                .from('scenarios')
                .delete()
                .eq('id', id);
            
            if (error) throw error;
            return true;
        } catch (e) {
            console.error('[Supabase] Erreur suppression:', e);
            return false;
        }
    }
    
    // Mode localStorage
    deleteScenarioLocal(id);
    return true;
}

// =============================================
// UI - Bouton Auth et Profil
// =============================================

function renderAuthButton() {
    if (!USE_SUPABASE) return '';
    
    if (CURRENT_USER) {
        const initials = CURRENT_USER.profile?.nom?.charAt(0) + CURRENT_USER.profile?.prenom?.charAt(0) || 'U';
        return `
            <div class="user-menu" style="display: flex; align-items: center; gap: 10px;">
                <span style="color: var(--text-secondary); font-size: 0.9rem;">
                    ${escapeHtml(CURRENT_USER.profile?.prenom || '')}
                </span>
                <div class="user-avatar" style="
                    width: 36px; 
                    height: 36px; 
                    border-radius: 50%; 
                    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    font-size: 0.85rem;
                    cursor: pointer;
                " onclick="toggleUserMenu()">${initials.toUpperCase()}</div>
                <div id="user-dropdown" style="display: none; position: absolute; top: 50px; right: 0; background: white; box-shadow: 0 4px 20px rgba(0,0,0,0.15); border-radius: 8px; padding: 8px 0; min-width: 150px; z-index: 1000;">
                    <div style="padding: 8px 16px; color: var(--text-muted); font-size: 0.8rem; border-bottom: 1px solid var(--border);">${escapeHtml(CURRENT_USER.email)}</div>
                    <button onclick="signOut(); toggleUserMenu();" style="width: 100%; padding: 10px 16px; border: none; background: none; text-align: left; cursor: pointer; color: var(--danger); font-size: 0.9rem;">Se déconnecter</button>
                </div>
            </div>
        `;
    }
    
    return `
        <button class="btn btn-outline btn-sm" onclick="openAuthModal()">
            <span class="material-symbols-outlined">login</span>
            Connexion
        </button>
    `;
}

function toggleUserMenu() {
    const menu = document.getElementById('user-dropdown');
    if (menu) {
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
}

function openAuthModal() {
    // Créer la modal d'authentification
    let modal = document.getElementById('auth-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'auth-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeAuthModal()"></div>
        <div class="modal-content" style="max-width: 400px;">
            <button class="modal-close" onclick="closeAuthModal()">
                <span class="material-symbols-outlined">close</span>
            </button>
            <div class="modal-header" style="background: linear-gradient(135deg, var(--primary), var(--primary-dark));">
                <h2 class="modal-title" style="color: white;">Connexion</h2>
            </div>
            <div class="modal-body">
                <form id="auth-form" onsubmit="handleAuthSubmit(event)">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" id="auth-email" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Mot de passe</label>
                        <input type="password" id="auth-password" class="form-input" required minlength="6">
                    </div>
                    <div id="auth-register-fields" style="display: none;">
                        <div class="form-group">
                            <label class="form-label">Nom</label>
                            <input type="text" id="auth-nom" class="form-input">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Prénom</label>
                            <input type="text" id="auth-prenom" class="form-input">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 16px;">
                        <span id="auth-submit-text">Se connecter</span>
                    </button>
                </form>
                <p style="text-align: center; margin-top: 16px; color: var(--text-muted); font-size: 0.9rem;">
                    <span id="auth-toggle-text">Pas encore de compte ?</span>
                    <a href="#" onclick="toggleAuthMode()" style="color: var(--primary); margin-left: 4px;">
                        <span id="auth-toggle-link">S'inscrire</span>
                    </a>
                </p>
            </div>
        </div>
    `;
    modal.classList.add('show');
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.remove('show');
}

let AUTH_MODE = 'login'; // ou 'register'

function toggleAuthMode() {
    AUTH_MODE = AUTH_MODE === 'login' ? 'register' : 'login';
    document.getElementById('auth-register-fields').style.display = AUTH_MODE === 'register' ? 'block' : 'none';
    document.getElementById('auth-submit-text').textContent = AUTH_MODE === 'login' ? 'Se connecter' : 'Créer un compte';
    document.getElementById('auth-toggle-text').textContent = AUTH_MODE === 'login' ? 'Pas encore de compte ?' : 'Déjà un compte ?';
    document.getElementById('auth-toggle-link').textContent = AUTH_MODE === 'login' ? "S'inscrire" : 'Se connecter';
}

async function handleAuthSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    
    if (AUTH_MODE === 'login') {
        const user = await signIn(email, password);
        if (user) {
            closeAuthModal();
            showToast('Connecté avec succès !');
            renderPage();
        }
    } else {
        const nom = document.getElementById('auth-nom').value;
        const prenom = document.getElementById('auth-prenom').value;
        const user = await signUp(email, password, nom, prenom);
        if (user) {
            alert('Compte créé ! Vérifiez votre email pour confirmer.');
            toggleAuthMode();
        }
    }
}

// =============================================
// INITIALISATION
// =============================================

document.addEventListener('DOMContentLoaded', async () => {
    await initAuth();
    renderPage();
    // ... reste de l'initialisation
});

// =============================================
// FONCTIONS LOCALSTORAGE (FALLBACK)
// =============================================

function loadScenariosLocal() {
    // ... code original de loadScenarios
    const STORAGE_KEY = 'logistique2025_scenarios';
    const STORAGE_VERSION_KEY = 'logistique2025_version';
    const CURRENT_VERSION = '5.0';
    
    try {
        const storedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
        if (storedVersion !== CURRENT_VERSION) {
            const existingData = localStorage.getItem(STORAGE_KEY);
            let scenarios = [];
            
            if (existingData) {
                try {
                    const parsed = JSON.parse(existingData);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        scenarios = parsed;
                    }
                } catch (e) {}
            }
            
            if (scenarios.length === 0) {
                scenarios = JSON.parse(JSON.stringify(SAMPLE_SCENARIOS));
            }
            
            localStorage.setItem(STORAGE_KEY, JSON.stringify(scenarios));
            localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);
            return scenarios;
        }
        
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) return parsed;
        }
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_SCENARIOS));
        localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);
        return JSON.parse(JSON.stringify(SAMPLE_SCENARIOS));
    } catch (error) {
        return JSON.parse(JSON.stringify(SAMPLE_SCENARIOS));
    }
}

function saveScenariosLocal(scenarios) {
    const STORAGE_KEY = 'logistique2025_scenarios';
    const STORAGE_VERSION_KEY = 'logistique2025_version';
    const CURRENT_VERSION = '5.0';
    
    try {
        const MAX_SCENARIOS = 100;
        if (scenarios.length > MAX_SCENARIOS) {
            alert(`Nombre maximum de scénarios atteint (${MAX_SCENARIOS})`);
            throw new Error('Maximum scenarios exceeded');
        }
        
        const json = JSON.stringify(scenarios);
        const MAX_SIZE = 5 * 1024 * 1024;
        if (json.length > MAX_SIZE) {
            alert('Données trop volumineuses. Limite: 5 Mo');
            throw new Error('Data size exceeded');
        }
        
        localStorage.setItem(STORAGE_KEY, json);
        localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);
    } catch (error) {
        console.error('Erreur sauvegarde:', error);
        throw error;
    }
}

function addScenarioLocal(scenario) {
    try {
        const scenarios = loadScenariosLocal();
        const newScenario = {
            ...scenario,
            id: 'sc-' + Date.now(),
            date: new Date().toISOString().split('T')[0],
            auteur: scenario.auteur || 'Contributeur',
            duree: scenario.duree || '2h'
        };
        scenarios.push(newScenario);
        saveScenariosLocal(scenarios);
        return newScenario;
    } catch (error) {
        console.error('Erreur ajout:', error);
        return null;
    }
}

function deleteScenarioLocal(id) {
    let scenarios = loadScenariosLocal();
    scenarios = scenarios.filter(s => s.id !== id);
    saveScenariosLocal(scenarios);
}

// =============================================
// DONNÉES EXEMPLE (SAMPLE_SCENARIOS)
// =============================================

const SAMPLE_SCENARIOS = [
    // ... vos 58 scénarios ici ...
];

// =============================================
// RESTE DU CODE (rendu, formulaires, etc.)
// =============================================

// ... (copier le reste de app.js ici)

// Export pour modules si besoin
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadScenarios,
        addScenario,
        deleteScenario,
        signIn,
        signUp,
        signOut
    };
}
