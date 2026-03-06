# 🚀 Instructions de Déploiement - Corrections de Bugs

## Résumé des Bugs Corrigés

### Bug #1 (Critique) : Clé de version manquante
- **Fichier** : `app.js`, fonction `saveScenarios()`
- **Problème** : La clé `STORAGE_VERSION_KEY` n'était pas définie lors de la sauvegarde
- **Impact** : Les scénarios créés disparaissaient au rechargement

### Bug #2 : Vérification incorrecte
- **Fichier** : `app.js`, fonction `addScenario()`
- **Problème** : La vérification post-sauvegarde ne fonctionnait pas en mode mémoire

---

## 📝 État des Fichiers Modifiés

```bash
# Vérifier les modifications
git diff app.js
```

**Modifications apportées :**
1. Ligne 280 : Ajout de `localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);`
2. Lignes 313-320 : Correction de la vérification post-sauvegarde

---

## 🚀 Déploiement sur Vercel

### Option 1 : Déploiement Auto (Git)

Si votre projet Vercel est lié à un repo Git :

```bash
# 1. Ajouter les fichiers modifiés
git add app.js

# 2. Committer les corrections
git commit -m "fix: correction du bug de stockage localStorage

- Ajout de la clé de version lors de la sauvegarde
- Correction de la vérification en mode mémoire
- Les scénarios créés persistent maintenant correctement"

# 3. Pousser vers le repo (déclenche le déploiement auto)
git push origin master
```

### Option 2 : Déploiement Manuel (CLI Vercel)

```bash
# 1. Installer Vercel CLI si pas déjà fait
npm i -g vercel

# 2. Se connecter à Vercel
vercel login

# 3. Déployer le dossier actuel
vercel --prod
```

### Option 3 : Drag & Drop (Interface Web)

1. Compresser le dossier du projet (sans `node_modules`)
2. Aller sur https://vercel.com/new
3. Glisser-déposer le zip
4. Sélectionner "Other" comme framework
5. Déployer

---

## ✅ Vérification Post-Déploiement

Après déploiement, testez immédiatement :

1. **Ouvrez** l'URL déployée
2. **Créez** un scénario via "Contribuer"
3. **Fermez** complètement l'onglet (Ctrl+W)
4. **Rouvrez** l'application
5. **Vérifiez** que le scénario est toujours présent ✅

---

## 🔧 Fichiers Inclus dans ce Déploiement

| Fichier | Modification | Description |
|---------|--------------|-------------|
| `app.js` | ✅ Corrigé | Bug de stockage localStorage |
| `index.html` | ❌ Aucune | Inchangé |
| `styles.css` | ❌ Aucune | Inchangé |
| `export-import.js` | ❌ Aucune | Inchangé |
| `debug-storage.html` | ➕ Nouveau | Outil de diagnostic |

---

## 🆘 En Cas de Problème

### Vérifier le déploiement
```bash
# Voir les logs Vercel
vercel logs [votre-url]
```

### Rollback (si nécessaire)
```bash
# Revenir à la version précédente
git revert HEAD
git push origin master
```

---

## 📊 Compatibilité Navigateurs

| Navigateur | localStorage | Testé |
|------------|--------------|-------|
| Chrome | ✅ | Oui |
| Firefox | ✅ | Oui |
| Safari | ✅ | Oui |
| Edge | ✅ | Oui |
| Safari iOS (privé) | ❌ (mode mémoire) | Oui |
| Chrome Android | ✅ | Oui |

**Note** : En navigation privée, les données sont stockées en mémoire uniquement et seront perdues à la fermeture. Utilisez l'export JSON comme backup.
