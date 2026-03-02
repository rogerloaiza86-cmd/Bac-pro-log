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
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (Array.isArray(imported)) {
                if (confirm(`Importer ${imported.length} scénarios ? Cela écrasera les scénarios existants.`)) {
                    saveScenarios(imported);
                    showToast(`${imported.length} scénarios importés avec succès !`);
                    setTimeout(() => location.reload(), 1000);
                }
            } else {
                alert('Format de fichier invalide');
            }
        } catch (err) {
            alert('Erreur lors de l\'import: ' + err.message);
        }
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
