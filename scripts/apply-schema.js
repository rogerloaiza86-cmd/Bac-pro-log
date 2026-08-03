#!/usr/bin/env node
/**
 * Applique le schéma SQL (supabase/schema.sql) sur la base distante.
 * Utilise DATABASE_URL depuis les variables d'environnement.
 */

require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    console.error('Erreur : DATABASE_URL est requis dans les variables d\'environnement.');
    process.exit(1);
}

const schemaPath = path.join(__dirname, '..', 'supabase', 'schema.sql');
const sql = fs.readFileSync(schemaPath, 'utf8');

async function applySchema() {
    const client = new Client({ connectionString: databaseUrl, ssl: { rejectUnauthorized: false } });
    try {
        await client.connect();
        await client.query(sql);
        console.log('Schéma appliqué avec succès sur le projet Supabase.');
    } catch (err) {
        console.error('Erreur lors de l\'application du schéma :', err.message);
        process.exit(1);
    } finally {
        await client.end();
    }
}

applySchema();
