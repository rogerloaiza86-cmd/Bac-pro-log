# 🔧 Guide de débogage - Problème de sauvegarde

## Testez l'application

### 1. Ouvrir la console développeur
- **Chrome/Firefox/Edge**: F12 ou Ctrl+Shift+J (Cmd+Option+J sur Mac)
- Cliquer sur l'onglet **Console**

### 2. Tester l'ajout d'un scénario
1. Aller sur https://bac-pro-log.vercel.app/#formulaire
2. Remplir le formulaire
3. Ouvrir la console AVANT de cliquer sur "Publier"
4. Cliquer sur "Publier"
5. Vérifier les messages dans la console

## Messages attendus (normaux)
```
[submitForm] Début de la soumission...
[submitForm] Données récupérées: {...}
[submitForm] Validation OK, appel de addScenario...
[addScenario] Début avec: {...}
[addScenario] Scénarios chargés: 9
[addScenario] Nouveau scénario: {...}
[addScenario] Scénarios après push: 10
[saveScenarios] Sauvegarde de 10 scénarios
[saveScenarios] JSON length: XXXXX caractères
[saveScenarios] ✅ Sauvegarde réussie
[addScenario] Vérification après sauvegarde: 10 scénarios
[addScenario] ✅ Scénario confirmé dans localStorage
[submitForm] ✅ Scénario créé: sc-XXXXXX
```

## Si vous voyez une erreur

### "localStorage inaccessible"
→ Votre navigateur bloque le stockage local (mode privé, extension, etc.)

**Solution**: Utilisez les boutons **Exporter/Importer JSON** en bas de la page d'accueil.

### "QuotaExceededError"
→ Le stockage est plein

**Solution**: Vider le stockage avec ce code dans la console:
```javascript
localStorage.clear();
location.reload();
```

### Aucun message dans la console
→ Le JavaScript ne s'exécute pas

**Solution**: Vider le cache (Ctrl+F5) ou tester dans une fenêtre privée.

## Page de test spéciale

Accédez à: **https://bac-pro-log.vercel.app/test-storage.html**

Cette page va tester automatiquement:
- ✅ L'accessibilité du localStorage
- ✅ La capacité de stockage
- ✅ L'ajout de scénarios
- ✅ La persistance des données

## Solution alternative (Export/Import JSON)

Si le localStorage ne fonctionne pas du tout:

1. **Exporter** vos scénarios avant de quitter:
   - Aller sur la page d'accueil
   - Cliquer sur **"Exporter JSON"**
   - Sauvegarder le fichier téléchargé

2. **Importer** vos scénarios lors de votre prochaine visite:
   - Aller sur la page d'accueil
   - Cliquer sur **"Importer JSON"**
   - Sélectionner votre fichier

## Vérifier le stockage manuellement

Dans la console développeur (F12):
```javascript
// Voir tous les scénarios
JSON.parse(localStorage.getItem('logistique2025_scenarios'))

// Voir le nombre de scénarios
JSON.parse(localStorage.getItem('logistique2025_scenarios')).length

// Vider tout (attention!)
localStorage.removeItem('logistique2025_scenarios')
localStorage.removeItem('logistique2025_version')
```

## Navigateurs testés et compatibilité

| Navigateur | localStorage | Mode privé |
|------------|-------------|------------|
| Chrome | ✅ OK | ⚠️ Effacé à la fermeture |
| Firefox | ✅ OK | ⚠️ Effacé à la fermeture |
| Safari | ✅ OK | ❌ Bloqué |
| Edge | ✅ OK | ⚠️ Effacé à la fermeture |

**Note**: En mode privé/incognito, les données sont effacées à la fermeture du navigateur.

## Contact

Si le problème persiste, copiez les messages de la console et envoyez-les pour analyse.
