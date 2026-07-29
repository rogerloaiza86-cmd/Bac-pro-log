// =============================================
// EXPORT JSON - Sauvegarde locale des scénarios
// =============================================

async function exportScenarios() {
    try {
        const scenarios = await loadScenarios();
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
    } catch (err) {
        console.error('[exportScenarios] Erreur:', err);
        alert('Erreur lors de l\'export : ' + err.message);
    }
}

function renderExportImportButtons() {
    return `
        <div class="export-import-section" style="margin: 20px 0; padding: 16px; background: var(--surface-alt); border-radius: 8px; border: 1px dashed var(--border);">
            <h4 style="margin: 0 0 12px 0; font-size: 0.9rem; color: var(--text-secondary);">
                <span class="material-symbols-outlined" style="font-size: 16px; vertical-align: middle;">save</span>
                Sauvegarde locale (JSON)
            </h4>
            <p style="margin: 0 0 12px 0; font-size: 0.8rem; color: var(--text-muted);">
                Téléchargez une copie des scénarios affichés sur la plateforme.
            </p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="btn btn-outline btn-sm" data-action="export">
                    <span class="material-symbols-outlined">download</span>
                    Exporter JSON
                </button>
            </div>
        </div>
    `;
}

// Importer des scénarios est désactivé en mode Supabase pour éviter les écrasements.
// Utilisez le script scripts/migrate-scenarios.js pour alimenter la base de données.
