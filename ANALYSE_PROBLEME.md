# 🔍 Analyse du Problème de Stockage

## Résumé du Problème

J'ai identifié **plusieurs bugs critiques** dans la gestion du stockage qui empêchent la persistance des scénarios créés.

---

## 🐛 Bug #1 : La clé de version n'est pas définie lors de l'ajout d'un scénario

### Localisation
- **Fichier** : `app.js`
- **Fonction** : `addScenario()` (ligne 292-330)

### Description
Quand un utilisateur crée un scénario via le formulaire :
1. `addScenario()` appelle `saveScenarios()`
2. `saveScenarios()` sauvegarde uniquement `STORAGE_KEY`
3. **MAIS** il ne définit jamais `STORAGE_VERSION_KEY` !

### Conséquence
Au rechargement de la page :
1. `loadScenarios()` vérifie `storedVersion !== CURRENT_VERSION`
2. `storedVersion` = `null` (car jamais défini)
3. `null !== '5.0'` → **VRAI**
4. Le code pense qu'une migration est nécessaire
5. Les données existantes sont lues mais la clé de version n'est pas mise à jour

---

## 🐛 Bug #2 : Réinitialisation silencieuse lors de la "migration"

### Localisation
- **Fichier** : `app.js`
- **Fonction** : `loadScenarios()` (ligne 218-265)

### Description
Dans la logique de migration (lignes 220-246), il y a un problème subtil :

```javascript
if (storedVersion !== CURRENT_VERSION) {
    const existingData = localStorage.getItem(STORAGE_KEY);
    let scenarios = [];
    
    if (existingData) {
        try {
            const parsed = JSON.parse(existingData);
            if (Array.isArray(parsed) && parsed.length > 0) {
                scenarios = parsed;  // ← Scénarios préservés
            }
        } catch (e) {
            console.warn('Données existantes corrompues...');
        }
    }
    
    if (scenarios.length === 0) {  // ← SEULEMENT si vide
        scenarios = JSON.parse(JSON.stringify(SAMPLE_SCENARIOS));
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scenarios));
    localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);  // ← Version définie ici
    return scenarios;
}
```

**Problème** : Cette logique semble correcte, mais elle ne fonctionne que si `storedVersion` existe. Si `storedVersion` est `null` (première visite ou Bug #1), les données devraient être préservées...

### Sauf que...
Il y a un autre problème : si `localStorage` est vidé ou corrompu entre temps, les scénarios disparaissent.

---

## 🐛 Bug #3 : Problème dans la vérification post-sauvegarde

### Localisation
- **Fichier** : `app.js`
- **Lignes** : 312-324

### Description
```javascript
// Vérification immédiate
const verify = localStorage.getItem(STORAGE_KEY);
const parsed = JSON.parse(verify);
console.log('%c[addScenario] Vérification après sauvegarde:', 'color: #137fec;', parsed.length, 'scénarios');

if (parsed.find(s => s.id === newScenario.id)) {
    console.log('%c[addScenario] ✅ SCÉNARIO CONFIRMÉ DANS LOCALSTORAGE', ...);
    return newScenario;
} else {
    console.error('%c[addScenario] ❌ SCÉNARIO NON TROUVÉ APRÈS SAUVEGARDE', ...);
    alert('ERREUR: Le scénario a été sauvegardé mais ne peut pas être retrouvé...');
    return null;
}
```

**Problème** : Cette vérification lit directement depuis `localStorage`, mais si `LOCAL_STORAGE_AVAILABLE` est `false`, les données sont en mémoire seulement (`MEMORY_STORAGE`). La vérification va donc échouer et retourner `null` !

---

## 🐛 Bug #4 : `renderAccueil()` peut réinitialiser les statistiques

### Localisation
- **Fichier** : `app.js`
- **Fonction** : `renderAccueil()` (ligne 622)

### Description
`renderAccueil()` appelle `loadScenarios()` pour afficher les statistiques. Si `loadScenarios()` réinitialise les données (à cause du Bug #1), les scénarios disparaissent.

---

## ✅ Corrections Nécessaires

### 1. Ajouter `STORAGE_VERSION_KEY` dans `saveScenarios()`

```javascript
function saveScenarios(scenarios) {
    console.log('[saveScenarios] Sauvegarde de', scenarios.length, 'scénarios');
    
    if (!LOCAL_STORAGE_AVAILABLE) {
        MEMORY_STORAGE = [...scenarios];
        console.log('%c[saveScenarios] ✅ Sauvegardé en mémoire', ...);
        return;
    }
    
    try {
        const json = JSON.stringify(scenarios);
        console.log('[saveScenarios] JSON length:', json.length, 'caractères');
        localStorage.setItem(STORAGE_KEY, json);
        localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);  // ← AJOUTER CECI
        console.log('[saveScenarios] ✅ Sauvegarde réussie');
    } catch (error) {
        console.error('[saveScenarios] ❌ Erreur:', error);
        // ...
    }
}
```

### 2. Corriger la vérification dans `addScenario()`

```javascript
if (LOCAL_STORAGE_AVAILABLE) {
    const verify = localStorage.getItem(STORAGE_KEY);
    const parsed = JSON.parse(verify);
    // ... vérification localStorage
} else {
    const verify = MEMORY_STORAGE;
    // ... vérification mémoire
}
```

### 3. S'assurer que la version est définie dès le premier chargement

Dans `loadScenarios()`, après avoir initialisé avec les samples :

```javascript
// First load — seed with samples
localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_SCENARIOS));
localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);  // ← Déjà présent, OK
return JSON.parse(JSON.stringify(SAMPLE_SCENARIOS));
```

Cette partie est correcte, mais le problème vient de `addScenario` qui ne définit pas la version.

---

## 🧪 Comment Reproduire le Bug

1. Ouvrir l'application dans un navigateur
2. Créer un nouveau scénario via le formulaire
3. Constater que le scénario apparaît bien dans la liste
4. **Fermer complètement l'onglet/navigateur**
5. Rouvrir l'application
6. Le scénario créé a disparu !

---

## 🔧 Solution Immédiate

La correction principale est dans `saveScenarios()` : ajouter la ligne qui définit la version.
