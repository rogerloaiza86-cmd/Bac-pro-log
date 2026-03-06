// =============================================
// EXPORT / IMPORT JSON - Solution de secours
// =============================================

function exportScenarios() {
    const scenarios = loadScenarios();
    const dataStr = JSON.stringify(scenarios, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `scenarios-logistique-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showToast(`${scenarios.length} scénarios exportés`);
}

function importScenarios(file) {
    // Vérifier la taille du fichier (max 5 Mo)
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
        alert('Fichier trop volumineux. Limite: 5 Mo');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (!Array.isArray(imported)) {
                alert('Format de fichier invalide : un tableau est attendu');
                return;
            }
            
            // Limiter le nombre de scénarios
            const MAX_SCENARIOS = 100;
            if (imported.length > MAX_SCENARIOS) {
                alert(`Trop de scénarios. Limite: ${MAX_SCENARIOS}`);
                return;
            }
            
            // Valider et nettoyer chaque scénario
            const validNiveaux = ['seconde', 'premiere', 'terminale'];
            const cleaned = imported.map((s, index) => {
                // Validation des champs requis
                if (!s.titre || typeof s.titre !== 'string') {
                    throw new Error(`Scénario ${index + 1}: titre invalide`);
                }
                if (!s.niveau || !validNiveaux.includes(s.niveau)) {
                    throw new Error(`Scénario ${index + 1}: niveau invalide`);
                }
                if (!Array.isArray(s.competences)) {
                    throw new Error(`Scénario ${index + 1}: compétences invalides`);
                }
                
                // Nettoyage des données
                return {
                    id: 'import-' + Date.now() + '-' + index,
                    titre: String(s.titre).substring(0, 200),
                    entreprise: String(s.entreprise || '').substring(0, 100),
                    niveau: s.niveau,
                    problematique: String(s.problematique || '').substring(0, 500),
                    description: String(s.description || '').substring(0, 2000),
                    miseEnSituation: String(s.miseEnSituation || '').substring(0, 1000),
                    magasinPedagogique: String(s.magasinPedagogique || '').substring(0, 800),
                    competences: s.competences
                        .filter(c => typeof c === 'string')
                        .map(c => c.substring(0, 20))
                        .filter(c => c.match(/^C[1-4]\.[0-9]+(
                        .[0-9]+)?$/)), // Validation format compétence
                    auteur: String(s.auteur || 'Importé').substring(0, 100),
                    date: new Date().toISOString().split('T')[0],
                    duree: String(s.duree || '2h').substring(0, 20)
                };
            });
            
            if (confirm(`Importer ${cleaned.length} scénarios ? Cela écrasera les scénarios existants.`)) {
                saveScenarios(cleaned);
                showToast(`${cleaned.length} scénarios importés avec succès !`);
                setTimeout(() => location.reload(), 1000);
            }
        } catch (err) {
            alert('Erreur lors de l\'import: ' + err.message);
        }
    };
    reader.onerror = function() {
        alert('Erreur lors de la lecture du fichier');
    };
    reader.readAsText(file);
}

function renderExportImportButtons() {
    return `
        <div class="export-import-section" style="margin: 20px 0; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px dashed #cbd5e1;">
            <h4 style="margin: 0 0 12px 0; font-size: 0.9rem; color: #64748b;">
                <span class="material-symbols-outlined" style="font-size: 16px; vertical-align: middle;">save</span>
                Sauvegarde manuelle (JSON)
            </h4>
            <p style="margin: 0 0 12px 0; font-size: 0.8rem; color: #94a3b8;">
                Si les scénarios ne persistent pas, utilisez ces boutons pour exporter/importer vos données.
            </p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="btn btn-outline btn-sm" onclick="exportScenarios()">
                    <span class="material-symbols-outlined">download</span>
                    Exporter JSON
                </button>
                <label class="btn btn-outline btn-sm" style="cursor: pointer;">
                    <span class="material-symbols-outlined">upload</span>
                    Importer JSON
                    <input type="file" accept=".json" style="display: none;" 
                        onchange="importScenarios(this.files[0])">
                </label>
            </div>
        </div>
    `;
}
