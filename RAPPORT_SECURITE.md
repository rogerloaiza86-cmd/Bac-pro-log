# 🔒 Rapport d'Analyse de Sécurité

**Date d'analyse** : 2026-03-06  
**Application** : Plateforme collaborative Bac Pro Logistique 2025  
**URL** : https://bac-pro-log.vercel.app

---

## 🟢 Bonnes pratiques en place

### ✅ Échappement HTML correct
Les fonctions de rendu utilisent `escapeHtml()` pour les données utilisateur :
- `scenario.titre`
- `scenario.problematique`
- `scenario.description`
- `scenario.entreprise`
- `scenario.auteur`

Cela protège contre les attaques XSS basiques.

### ✅ Pas d'éval de code
Aucune utilisation de `eval()`, `Function()`, ou `setTimeout/setInterval` avec chaînes de caractères dynamiques provenant de l'utilisateur.

### ✅ Validation basique des imports
Le fichier JSON importé est validé comme étant un tableau avant traitement.

---

## 🟠 Risques de sécurité identifiés

### 1. XSS potentiel dans `showToast()` ⚠️ MODÉRÉ

**Localisation** : `app.js`, ligne 437-442

```javascript
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerHTML = `<span class="material-symbols-outlined">check_circle</span>${message}`;
    // ...
}
```

**Problème** : Si `message` contient du HTML malveillant, il sera injecté dans le DOM.

**Exemple d'exploitation** :
```javascript
// Un scénario avec ce titre injecterait du JavaScript
const titre = "<img src=x onerror=alert('XSS')>";
// Après création, le toast afficherait le message et exécuterait le script
```

**Impact** : Vol de cookies, manipulation du DOM, redirection vers site malveillant.

**Correction recommandée** :
```javascript
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerHTML = `<span class="material-symbols-outlined">check_circle</span>${escapeHtml(message)}`;
    // ...
}
```

---

### 2. Pas de validation des données importées (JSON) ⚠️ MODÉRÉ

**Localisation** : `export-import.js`, ligne 22-41

**Problème** : L'import JSON ne valide que la structure (Array), mais pas le contenu des objets.

**Risques** :
- Injection de données malformées
- Stockage de payloads malveillants dans localStorage
- Corruption de la base de données locale

**Exemple de fichier JSON malveillant** :
```json
[{
  "id": "<script>alert('XSS')</script>",
  "titre": "Test",
  "problematique": "<img src=x onerror=stealData()>",
  "competences": ["C1.1"],
  "auteur": "<svg onload=alert('XSS')>",
  "niveau": "seconde"
}]
```

**Correction recommandée** :
```javascript
function importScenarios(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (Array.isArray(imported)) {
                // Valider chaque scénario
                const isValid = imported.every(s => 
                    s.id && typeof s.id === 'string' &&
                    s.titre && typeof s.titre === 'string' &&
                    s.niveau && ['seconde', 'premiere', 'terminale'].includes(s.niveau) &&
                    Array.isArray(s.competences)
                );
                
                if (!isValid) {
                    alert('Format de données invalide');
                    return;
                }
                
                // Nettoyer les données
                const cleaned = imported.map(s => ({
                    id: String(s.id).substring(0, 50),
                    titre: String(s.titre).substring(0, 200),
                    description: String(s.description || '').substring(0, 2000),
                    // ... autres champs nettoyés
                }));
                
                if (confirm(`Importer ${cleaned.length} scénarios ?`)) {
                    saveScenarios(cleaned);
                    // ...
                }
            }
        } catch (err) {
            alert('Erreur lors de l\'import: ' + err.message);
        }
    };
    reader.readAsText(file);
}
```

---

### 3. Pas de limitation de taille du localStorage ⚠️ FAIBLE

**Localisation** : `app.js`, fonctions `saveScenarios()` et `addScenario()`

**Problème** : Aucune vérification de la taille des données avant sauvegarde.

**Risque** : Attaque par déni de service (DoS) locale - un utilisateur malveillant pourrait importer un fichier JSON de plusieurs Mo, remplissant le localStorage et ralentissant l'application.

**Correction recommandée** :
```javascript
function saveScenarios(scenarios) {
    const MAX_SIZE = 4 * 1024 * 1024; // 4 Mo limite
    const json = JSON.stringify(scenarios);
    
    if (json.length > MAX_SIZE) {
        alert('Les données sont trop volumineuses. Limite: 4 Mo');
        throw new Error('Quota exceeded');
    }
    
    localStorage.setItem(STORAGE_KEY, json);
    localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);
}
```

---

### 4. URLs d'images externes non contrôlées ⚠️ FAIBLE

**Localisation** : `app.js`, ligne 112-119 (WAREHOUSE_IMAGES)

**Problème** : Les images sont chargées depuis des URLs Google externes (`https://lh3.googleusercontent.com/...`).

**Risques** :
- Tracking par Google (privacy)
- Indisponibilité si les URLs changent
- Pas de HTTPS forcé (même si Google le fait)

**Recommandation** : Héberger les images localement ou utiliser un service d'images dédié avec CSP.

---

### 5. Pas de Content Security Policy (CSP) 🔴 IMPORTANT

**Problème** : Aucun en-tête CSP n'est défini pour l'application.

**Risque** : Les attaques XSS sont facilitées car le navigateur n'a pas d'instructions pour bloquer l'exécution de scripts inline ou le chargement de ressources externes.

**Correction recommandée** (à ajouter dans `vercel.json` ou les en-têtes HTTP) :
```json
{
  "headers": [{
    "source": "/(.*)",
    "headers": [{
      "key": "Content-Security-Policy",
      "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' https://lh3.googleusercontent.com data:; connect-src 'self';"
    }]
  }]
}
```

---

### 6. Manque de rate limiting sur les opérations ⚠️ FAIBLE

**Problème** : Un utilisateur peut créer/supporter des scénarios sans limite de fréquence.

**Risque** : Spam, pollution de la base de données locale.

**Note** : Étant donné que c'est une application cliente pure (pas de backend), ce risque est limité aux impacts locaux.

---

### 7. Exposition des données dans le localStorage ⚠️ FAIBLE

**Problème** : Les données sont stockées en clair dans localStorage.

**Risque** : Si un attaquant a accès physique à la machine ou exécute du code JavaScript sur le domaine, il peut lire/modifier les scénarios.

**Mitigation** : 
- C'est un comportement attendu pour une application de démonstration
- Pour une sécurité accrue, il faudrait un backend avec authentification

---

## 🔴 Vulnérabilité critique potentielle

### Injection de code via les compétences

**Localisation** : `renderScenarioCard()` et `renderScenarioModal()`

**Analyse** : Les codes de compétences (ex: `C1.1`, `C2.2`) sont affichés sans échappement dans certains contextes :

```javascript
return `<span class="tag" style="background: ${color}10; color: ${color}; border-color: ${color}30;">${code}</span>`;
```

**Problème** : Si un utilisateur modifie manuellement le localStorage pour injecter du HTML dans un code de compétence :

```javascript
// Dans la console du navigateur
const scenarios = JSON.parse(localStorage.getItem('logistique2025_scenarios'));
scenarios[0].competences = ['<img src=x onerror=alert("XSS")>'];
localStorage.setItem('logistique2025_scenarios', JSON.stringify(scenarios));
location.reload();
```

**Impact** : XSS persistant (stored XSS)

**Correction recommandée** :
```javascript
// Dans renderScenarioCard
const competencyTags = scenario.competences.map(code => {
    const info = getCompetencyInfo(code);
    if (!info) return '';
    const color = info.bloc.couleur;
    // Échapper le code de compétence
    const safeCode = escapeHtml(code);
    return `<span class="tag" style="background: ${color}10; color: ${color}; border-color: ${color}30;">${safeCode}</span>`;
}).join('');
```

---

## 📋 Résumé des risques

| Vulnérabilité | Sévérité | Facilité d'exploitation | Impact |
|--------------|----------|------------------------|--------|
| XSS dans showToast | 🟠 Modéré | Facile | Exécution de code |
| Injection JSON | 🟠 Modéré | Moyenne | Corruption données |
| XSS via compétences | 🔴 Élevé | Facile | Exécution de code persistante |
| Pas de CSP | 🟠 Modéré | N/A | Facilitation XSS |
| LocalStorage clair | 🟡 Faible | Difficile | Lecture données |
| Images externes | 🟡 Faible | N/A | Tracking, indisponibilité |
| Pas de rate limiting | 🟢 Info | Facile | Spam local |
| Pas de limite taille | 🟡 Faible | Facile | DoS local |

---

## ✅ Recommandations prioritaires

### Priorité 1 (Immédiat)
1. **Corriger le XSS dans `showToast()`** - Utiliser `escapeHtml()` sur le message
2. **Échapper les codes de compétences** dans `renderScenarioCard()` et `renderScenarioModal()`
3. **Ajouter une CSP** dans les en-têtes HTTP

### Priorité 2 (Court terme)
4. **Valider et nettoyer les imports JSON**
5. **Limiter la taille des données** (4 Mo max)
6. **Ajouter des commentaires** indiquant que ce n'est pas pour la production sans modifications

### Priorité 3 (Moyen terme)
7. **Remplacer les URLs d'images** par des images locales
8. **Ajouter une indication** que l'application stocke les données localement

---

## 🛠️ Corrections à appliquer

### Correction 1 : showToast()
```javascript
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerHTML = `<span class="material-symbols-outlined">check_circle</span>${escapeHtml(message)}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}
```

### Correction 2 : Compétences
```javascript
// Dans renderScenarioCard
const competencyTags = scenario.competences.map(code => {
    const info = getCompetencyInfo(code);
    if (!info) return '';
    const color = info.bloc.couleur;
    return `<span class="tag" style="background: ${color}10; color: ${color}; border-color: ${color}30;">${escapeHtml(code)}</span>`;
}).join('');
```

### Correction 3 : CSP (vercel.json)
```json
{
  "headers": [{
    "source": "/(.*)",
    "headers": [{
      "key": "Content-Security-Policy",
      "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' https://lh3.googleusercontent.com data:;"
    }, {
      "key": "X-Content-Type-Options",
      "value": "nosniff"
    }, {
      "key": "X-Frame-Options",
      "value": "DENY"
    }]
  }]
}
```

---

## 📝 Conclusion

L'application présente **deux vulnérabilités XSS** (une modérée, une élevée) qui permettent l'injection de code JavaScript. Bien que l'application soit principalement utilisée localement (localStorage), ces failles pourraient être exploitées si un utilisateur importe un fichier JSON malveillant ou modifie ses données locales.

**Recommandation générale** : Avant une mise en production avec un backend, une **révision complète de la sécurité** est nécessaire, incluant :
- Authentification et autorisation
- Validation côté serveur
- Protection CSRF
- Audit de sécurité approfondi
