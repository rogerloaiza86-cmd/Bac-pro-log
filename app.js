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
                { code: 'C1.2.2', nom: 'Contribuer à l\'application des protocoles et procédures de sécurité', desc: 'Compréhension et capacité à appliquer les procédures de sécurité.' },
                { code: 'C1.2.3', nom: 'Prendre en compte les risques liés à une activité logistique', desc: 'Identification de situations à risques et restitution d\'informations.' },
                { code: 'C1.3', nom: 'Préparer l\'action de réception', desc: 'Planifier les moyens pour la réception des marchandises.' },
                { code: 'C1.3.1', nom: 'Planifier les moyens humains et matériels nécessaires à la réception', desc: 'Collecte des données et utilisation de planigramme.' },
                { code: 'C1.3.2', nom: 'Adapter l\'organisation de la réception selon les aléas et incidents', desc: 'Accueil conducteur, collecte et vérification des documents.' },
                { code: 'C1.4', nom: 'Traiter les opérations de réception de produits selon les procédures', desc: 'Déchargement, contrôle, réserves, gestion des déchets.' },
                { code: 'C1.4.1', nom: 'Mettre en œuvre les procédures de réception des produits', desc: 'Contrôles quantitatifs/qualitatifs et application des protocoles.' },
                { code: 'C1.4.2', nom: 'Contribuer à l\'ouverture d\'un dossier litige', desc: 'Identification de l\'objet du litige et collecte des preuves.' },
                { code: 'C1.5', nom: 'Mettre en stock les produits', desc: 'Transfert et stockage en sécurité, dégroupage et reconditionnement.' },
                { code: 'C1.5.1', nom: 'Transférer et stocker les produits en sécurité', desc: 'Repérage des zones et rotation selon les critères de conservation.' },
                { code: 'C1.5.2', nom: 'Dégrouper et/ou reconditionner les produits', desc: 'Réalisation d\'activités de dégroupage ou reconditionnement.' },
                { code: 'C1.6', nom: 'Gérer le suivi des stocks', desc: 'Suivi des flux d\'information et participation aux inventaires.' },
                { code: 'C1.6.1', nom: 'Assurer le suivi des flux d\'information associés aux flux entrants', desc: 'Actualisation de la base de données informatique.' },
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
                { code: 'C2.5', nom: 'Traiter les retours des supports de charge et/ou des contenants', desc: 'Suivi, traçabilité et contrôle des supports consignés.' },
                { code: 'C2.6', nom: 'Confier l\'expédition à un prestataire de transport externe', desc: 'Choisir un transporteur et échanger informations.' },
                { code: 'C2.6.1', nom: 'Choisir un transporteur dans une liste référencée', desc: 'Contrôle de l\'adéquation et identification des obligations.' },
                { code: 'C2.6.2', nom: 'Échanger les informations, documents et instructions', desc: 'Transmission efficace via le moyen adapté.' },
            ]
        },
        {
            id: 'bloc3',
            nom: 'Bloc 3 — Contribuer de manière responsable à l\'efficacité des activités logistiques',
            couleur: '#10b981',
            competences: [
                { code: 'C3.1', nom: 'Adapter le processus logistique selon le type de produit ou de flux', desc: 'Prise en compte des spécificités et environnements.' },
                { code: 'C3.2', nom: 'Mettre en œuvre le processus de traçabilité', desc: 'Application des processus de traçabilité dans la chaîne.' },
                { code: 'C3.2.1', nom: 'Prendre part au processus qualité lié à la manipulation du produit', desc: 'Contrôle de conformité et analyse de situation.' },
                { code: 'C3.2.2', nom: 'Assurer le suivi des produits à l\'aide de données', desc: 'Mise à jour des données dans un référentiel de suivi.' },
                { code: 'C3.2.3', nom: 'Identifier la procédure applicable selon le type de retour', desc: 'Caractérisation du retour et procédure adaptée.' },
                { code: 'C3.2.4', nom: 'Valoriser les déchets', desc: 'Identification des zones et tri dans les bacs dédiés.' },
                { code: 'C3.3', nom: 'Proposer des axes d\'amélioration dans une démarche RSE', desc: 'Contribution à l\'amélioration sociétale et environnementale.' },
                { code: 'C3.3.1', nom: 'Analyser une situation professionnelle courante', desc: 'Diagnostic et repérage des incidences sur la chaîne.' },
                { code: 'C3.3.2', nom: 'Proposer des axes d\'amélioration de la situation professionnelle', desc: 'Actions adaptées RSE pour améliorer l\'environnement.' },
                { code: 'C3.3.3', nom: 'Évaluer les impacts de l\'organisation du poste de travail', desc: 'Mesure d\'impacts et interprétation d\'indicateurs.' },
                { code: 'C3.4', nom: 'Coordonner une petite équipe logistique', desc: 'Transmission d\'infos, gestion d\'imprévus, animation.' },
                { code: 'C3.4.1', nom: 'Assurer le partage d\'informations dans l\'équipe', desc: 'Communication orale ou écrite lors de la prise de poste.' },
                { code: 'C3.4.2', nom: 'Traiter des situations imprévues', desc: 'Proposition d\'actions pour répondre aux imprévus.' },
                { code: 'C3.4.3', nom: 'Contribuer à l\'efficacité du service par l\'animation d\'équipe', desc: 'Animation, suivi et prise en compte de la sécurité.' },
                { code: 'C3.4.4', nom: 'Veiller à l\'inclusion, au bien-être et à la sécurité', desc: 'Mise en place de l\'inclusion et vigilance bien-être.' },
            ]
        },
        {
            id: 'bloc4',
            nom: 'Bloc 4 — Conduire en sécurité des engins de manutention',
            couleur: '#f59e0b',
            competences: [
                { code: 'C4.1', nom: 'Mettre en service un engin de manutention en sécurité', desc: 'Vérification de l\'adéquation et du bon fonctionnement.' },
                { code: 'C4.1.1', nom: 'Vérifier l\'adéquation d\'un engin à l\'opération envisagée', desc: 'Identification des caractéristiques du transfert de charge.' },
                { code: 'C4.1.2', nom: 'Vérifier le bon fonctionnement des dispositifs de sécurité', desc: 'Réglages du poste et contrôle visuel de l\'engin.' },
                { code: 'C4.1.3', nom: 'Vérifier la présence et la validité des documents réglementaires', desc: 'Exploitation des documents de l\'engin de manutention.' },
                { code: 'C4.2', nom: 'Conduire un engin de manutention', desc: 'Circulation à vide/charge, gestion des plans inclinés.' },
                { code: 'C4.2.1', nom: 'Circuler à vide ou en charge', desc: 'Circulation en avant, arrière, virage et en allée.' },
                { code: 'C4.2.3', nom: 'Circuler sur un plan incliné', desc: 'Conduite en toute sécurité sur rampe d\'accès.' },
                { code: 'C4.2.4', nom: 'Respecter les règles de circulation', desc: 'Compréhension de la signalisation et conduite éco.' },
                { code: 'C4.2.5', nom: 'Conduire avec assurance en sécurité', desc: 'Conduite sans heurts, sans chocs ou brutalité.' },
                { code: 'C4.2.6', nom: 'Respecter les prescriptions en temps', desc: 'Respect des contraintes de temps garantissant la sécurité.' },
                { code: 'C4.3', nom: 'Manœuvrer un engin de manutention (1B 3 5)', desc: 'Manœuvre selon recommandations R489.' },
                { code: 'C4.3.1', nom: 'Manœuvrer un engin de catégorie 1B — R489', desc: 'Prise, déplacement et stockage jusqu\'à 2.90m.' },
                { code: 'C4.3.2', nom: 'Manœuvrer un engin de catégorie 3 — R489', desc: 'Prise, déplacement et stockage jusqu\'à 3.30m.' },
                { code: 'C4.3.3', nom: 'Manœuvrer un engin de catégorie 5 — R489', desc: 'Prise, déplacement et stockage jusqu\'à 6.00m.' },
                { code: 'C4.4', nom: 'Effectuer les opérations de fin de poste', desc: 'Stationnement, maintenance 1er niveau et compte-rendu.' },
                { code: 'C4.4.1', nom: 'Stationner l\'engin de manutention à son emplacement', desc: 'Mise en stationnement selon le protocole.' },
                { code: 'C4.4.2', nom: 'Effectuer les opérations de maintenance de premier niveau', desc: 'Maintenance préventive si nécessaire.' },
                { code: 'C4.4.3', nom: 'Rendre compte des anomalies relevées', desc: 'Précision des comptes rendus sur le déroulé.' },
            ]
        },
        {
            id: 'bloc5',
            nom: 'Bloc 5 — Économie — Droit',
            couleur: '#ef4444',
            competences: [
                { code: 'C5.1', nom: 'Exploiter et analyser des documents économiques et juridiques', desc: 'Analyse de documents de nature économique et juridique.' },
                { code: 'C5.2', nom: 'Sélectionner des informations pour une réponse argumentée', desc: 'Construction d\'une réponse structurée à une problématique.' },
                { code: 'C5.3', nom: 'Mobiliser les savoirs associés et le vocabulaire spécifique', desc: 'Rdaction en utilisant le lexique adapté.' },
            ]
        },
        {
            id: 'bloc6',
            nom: 'Bloc 6 — Mathématiques',
            couleur: '#8b5cf6',
            competences: [
                { code: 'C6.1', nom: 'S’approprier : rechercher, extraire et organiser l’information', desc: 'Compréhension de l\'énoncé et des données.' },
                { code: 'C6.2', nom: 'Analyser/raisonner : choisir une méthode de résolution', desc: 'Élaboration d\'une stratégie ou d\'un algorithme.' },
                { code: 'C6.3', nom: 'Réaliser : mettre en œuvre une méthode, des algorithmes', desc: 'Calculer, expérimenter, simuler, représenter.' },
                { code: 'C6.4', nom: 'Valider : critiquer un résultat, argumenter', desc: 'Contrôler la vraisemblance et établir une conclusion.' },
                { code: 'C6.5', nom: 'Communiquer : rendre compte d’une démarche', desc: 'Explication à l\'oral ou à l\'écrit avec les outils adaptés.' },
            ]
        },
        {
            id: 'bloc7',
            nom: 'Bloc 7 — Prévention — Santé — Environnement',
            couleur: '#06b6d4',
            competences: [
                { code: 'C7.1', nom: 'Mettre en œuvre une démarche d’analyse', desc: 'Analyse d\'une situation donnée.' },
                { code: 'C7.2', nom: 'Expliquer un phénomène ou un enjeu', desc: 'Lien avec la démarche de prévention.' },
                { code: 'C7.3', nom: 'Proposer une solution pour résoudre un problème', desc: 'Réponse à une problématique de santé ou sécurité.' },
                { code: 'C7.4', nom: 'Argumenter un choix et communiquer', desc: 'Écrit clair avec un vocabulaire adapté.' },
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

// Sample data scenarios
const SAMPLE_SCENARIOS = [
    {
        id: 'sample-1', titre: 'Réception de marchandises dangereuses', entreprise: 'DHL',
        niveau: 'seconde', description: 'Scénario de mise en situation : Contrôle des documents et étiquetage ADR sur un quai de réception. Identification des pictogrammes et des risques professionnels.',
        competences: ['C1.1', 'C1.2.1', 'C1.2.3', 'C7.1'], auteur: 'M. LOAIZA SOTO', date: '2025-01-15', duree: '2h'
    },
    {
        id: 'sample-2', titre: 'Préparation de commandes vocale', entreprise: 'Decathlon',
        niveau: 'seconde', description: 'Utilisation du système Voice Picking pour une commande multi-références urgente. Constitution de l\'unité de charge et simulation 3D.',
        competences: ['C2.1.1', 'C2.2.1', 'C2.2.3', 'C6.1'], auteur: 'M. LOAIZA SOTO', date: '2025-01-20', duree: '4h'
    },
    {
        id: 'sample-3', titre: 'Inventaire tournant annuel', entreprise: 'Amazon',
        niveau: 'seconde', description: 'Procédure de comptage et de régularisation des stocks en fin d\'exercice comptable. Mise à jour des données informatiques et calculs d\'écarts.',
        competences: ['C1.6.1', 'C1.6.2', 'C6.3'], auteur: 'M. LOAIZA SOTO', date: '2025-02-01', duree: '3h'
    },
    {
        id: 'sample-4', titre: 'Gestion des stocks en flux tendu', entreprise: 'Carrefour',
        niveau: 'premiere', description: 'Analyse des flux entrants et sortants pour optimiser la rotation des produits frais. Traçabilité et suivi des données informatisées.',
        competences: ['C3.1', 'C3.2.2', 'C2.2.5'], auteur: 'M. LOAIZA SOTO', date: '2025-01-28', duree: '4h'
    },
    {
        id: 'sample-5', titre: 'Optimisation de l\'entreposage frigorifique', entreprise: 'Leclerc',
        niveau: 'premiere', description: 'Réorganisation des zones de stockage froid pour respecter la chaîne du froid. Proposition d\'axes d\'amélioration RSE.',
        competences: ['C1.5.1', 'C3.3.1', 'C3.3.2', 'C7.2', 'C5.1'], auteur: 'M. LOAIZA SOTO', date: '2025-02-05', duree: '3h'
    },
    {
        id: 'sample-6', titre: 'Traitement des litiges réception', entreprise: 'DB Schenker',
        niveau: 'premiere', description: 'Gestion d\'un litige avec un fournisseur : émission de réserves, collecte des preuves et ouverture de dossier litige, analyse juridique simple.',
        competences: ['C1.4.2', 'C2.6.2', 'C5.1', 'C5.3'], auteur: 'M. LOAIZA SOTO', date: '2025-02-10', duree: '2h'
    },
    {
        id: 'sample-7', titre: 'Organisation d\'une tournée de livraison', entreprise: 'Kuehne+Nagel',
        niveau: 'terminale', description: 'Élaboration d\'un itinéraire optimisé, constitution du dossier de transport et gestion des temps de conduite (RSE).',
        competences: ['C2.4.1', 'C2.4.2', 'C2.4.4', 'C6.2'], auteur: 'M. LOAIZA SOTO', date: '2025-02-12', duree: '4h'
    },
    {
        id: 'sample-8', titre: 'Coordination d\'équipe logistique', entreprise: 'IKEA',
        niveau: 'terminale', description: 'Animation du réveil musculaire, transmission des consignes de prise de poste et gestion d\'un imprévu logistique avec inclusion.',
        competences: ['C3.4.1', 'C3.4.2', 'C3.4.3', 'C3.4.4'], auteur: 'M. LOAIZA SOTO', date: '2025-02-08', duree: '3h'
    },
    {
        id: 'sample-9', titre: 'Conduite d\'engins CACES R489', entreprise: 'Geodis',
        niveau: 'terminale', description: 'Mise en service d\'un chariot élévateur cat. 3, vérifications de sécurité, manœuvres et opérations de fin de poste.',
        competences: ['C4.1.2', 'C4.3.2', 'C4.4.1', 'C7.3'], auteur: 'M. LOAIZA SOTO', date: '2025-02-15', duree: '4h'
    },
];

// =============================================
// STATE & STORAGE
// =============================================
const STORAGE_KEY = 'logistique2025_scenarios';
const STORAGE_VERSION_KEY = 'logistique2025_version';
const CURRENT_VERSION = '4.0'; // Bump when referential data changes

function loadScenarios() {
    const storedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
    if (storedVersion !== CURRENT_VERSION) {
        // Referential data changed — reset to new sample scenarios
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_SCENARIOS));
        localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);
        return [...SAMPLE_SCENARIOS];
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
    // First load — seed with samples
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_SCENARIOS));
    localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);
    return [...SAMPLE_SCENARIOS];
}

function saveScenarios(scenarios) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scenarios));
}

function addScenario(scenario) {
    const scenarios = loadScenarios();
    scenario.id = 'sc-' + Date.now();
    scenario.date = new Date().toISOString().split('T')[0];
    scenario.auteur = scenario.auteur || 'Contributeur';
    scenario.duree = scenario.duree || '2h';
    scenarios.push(scenario);
    saveScenarios(scenarios);
    return scenario;
}

function deleteScenario(id) {
    let scenarios = loadScenarios();
    scenarios = scenarios.filter(s => s.id !== id);
    saveScenarios(scenarios);
}

function getScenariosByLevel(level) {
    return loadScenarios().filter(s => s.niveau === level);
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
    toast.innerHTML = `<span class="material-symbols-outlined">check_circle</span>${message}`;
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
        // Utilisation de la couleur du bloc dynamiquement
        const color = info.bloc.couleur;
        return `<span class="tag" style="background: ${color}10; color: ${color}; border-color: ${color}30;">${code}</span>`;
    }).join('');

    const blocInfo = getCompetencyInfo(scenario.competences[0]);
    const blocLabel = blocInfo ? blocInfo.bloc.nom.split('—')[0].trim() : '';
    const blocColor = blocInfo ? blocInfo.bloc.couleur : '#137fec';
    const initials = scenario.auteur.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    return `
        <div class="card" data-scenario-id="${scenario.id}">
            <div class="card-img" style="background-image: url('${getRandomImage()}')">
                <span class="card-img-badge" style="background:${blocColor}">${blocLabel}</span>
                <span class="card-img-time"><span class="material-symbols-outlined">schedule</span>${scenario.duree}</span>
            </div>
            <div class="card-body">
                <h4 class="card-title">${escapeHtml(scenario.titre)}</h4>
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
                        <button class="card-delete-btn" onclick="handleDelete('${scenario.id}')" title="Supprimer">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderStats(level) {
    const all = loadScenarios();
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

// =============================================
// PAGE RENDERERS
// =============================================

function renderAccueil() {
    const totalScenarios = loadScenarios().length;
    const coveredCodes = new Set();
    loadScenarios().forEach(s => s.competences.forEach(c => coveredCodes.add(c)));
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
                    <button class="btn btn-primary btn-lg" onclick="navigateTo('formulaire')">
                        <span class="material-symbols-outlined">add_circle</span>
                        Contribuer un scénario
                    </button>
                    <button class="btn btn-glass btn-lg" onclick="navigateTo('seconde')">
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

        <!-- CTA -->
        <section class="cta-section">
            <h2>Prêt à collaborer ?</h2>
            <p>Rejoignez la communauté des enseignants et accédez dès aujourd'hui aux ressources du Bac pro métiers de la logistique.</p>
            <div class="cta-actions">
                <button class="btn btn-primary btn-lg" onclick="navigateTo('formulaire')">Ajouter un scénario</button>
                <button class="btn btn-outline btn-lg" onclick="navigateTo('seconde')">Explorer les parcours</button>
            </div>
        </section>
    </div>
    `;
}

function renderParcours(level) {
    const labels = { seconde: 'Seconde', premiere: 'Première', terminale: 'Terminale' };
    const descriptions = {
        seconde: 'Découverte des métiers de la logistique. Premiers scénarios de mise en situation professionnelle.',
        premiere: 'Approfondissement des compétences opérationnelles. Scénarios de spécialisation et co-intervention.',
        terminale: 'Préparation intensive à l\'examen. Scénarios complexes et transversaux, validation des compétences terminales.'
    };
    const scenarios = getScenariosByLevel(level);
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

            ${renderStats(level)}

            <div class="section-toolbar">
                <h3>Scénarios Disponibles <span class="tag tag-primary">${scenarios.length}</span></h3>
                <button class="btn btn-primary btn-sm" onclick="navigateTo('formulaire')">
                    <span class="material-symbols-outlined">add</span>
                    Nouveau Scénario
                </button>
            </div>

            <div class="scenarios-grid">
                ${scenarioCards}
                <div class="card-add" onclick="navigateTo('formulaire')">
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
                    <button class="btn btn-primary" onclick="navigateTo('formulaire')">Ajouter un scénario</button>
                </div>
            ` : ''}
        </div>
    </div>
    `;
}

function renderFormulaire() {
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
                    <button class="btn btn-outline btn-sm" onclick="resetForm()">Réinitialiser</button>
                    <button class="btn btn-primary btn-sm" onclick="submitForm()">
                        <span class="material-symbols-outlined">publish</span>
                        Publier
                    </button>
                </div>
            </div>

            <form id="scenario-form" onsubmit="return false;">
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
                                    <label class="form-label" for="f-auteur">Votre nom <span class="required">*</span></label>
                                    <div class="form-input-icon">
                                        <span class="material-symbols-outlined">person</span>
                                        <input class="form-input" type="text" id="f-auteur" placeholder="Ex : M. Dupont" required />
                                    </div>
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
                                <label class="form-label" for="f-description">Description courte</label>
                                <textarea class="form-textarea" id="f-description" placeholder="Décrivez brièvement le contexte, les objectifs et le déroulement de la séance..." maxlength="500" oninput="updateCharCount()"></textarea>
                                <div class="form-char-count"><span id="char-count">0</span> / 500 caractères</div>
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
                                <li>Décrivez le contexte professionnel de manière réaliste.</li>
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
function submitForm() {
    const titre = document.getElementById('f-titre').value.trim();
    const entreprise = document.getElementById('f-entreprise').value.trim();
    const niveau = document.getElementById('f-niveau').value;
    const auteur = document.getElementById('f-auteur').value.trim();
    const duree = document.getElementById('f-duree').value.trim();
    const description = document.getElementById('f-description').value.trim();
    const checkboxes = document.querySelectorAll('input[name="competences"]:checked');
    const competences = Array.from(checkboxes).map(cb => cb.value);

    if (!titre) { alert('Veuillez saisir un titre pour le scénario.'); return; }
    if (!niveau) { alert('Veuillez sélectionner un niveau de classe.'); return; }
    if (!auteur) { alert('Veuillez saisir votre nom.'); return; }
    if (competences.length === 0) { alert('Veuillez sélectionner au moins une compétence.'); return; }

    addScenario({ titre, entreprise, niveau, auteur, duree: duree || '2h', description, competences });
    showToast('Scénario publié avec succès !');
    setTimeout(() => navigateTo(niveau), 500);
}

function resetForm() {
    const form = document.getElementById('scenario-form');
    if (form) {
        form.reset();
        updateCharCount();
    }
}

function updateCharCount() {
    const textarea = document.getElementById('f-description');
    const counter = document.getElementById('char-count');
    if (textarea && counter) {
        counter.textContent = textarea.value.length;
    }
}

function handleDelete(id) {
    if (confirm('Supprimer ce scénario ?')) {
        deleteScenario(id);
        renderPage();
        showToast('Scénario supprimé.');
    }
}

// =============================================
// MAIN ROUTER
// =============================================
function renderPage() {
    const page = getPage();
    const container = document.getElementById('page-container');

    switch (page) {
        case 'accueil':
            container.innerHTML = renderAccueil();
            break;
        case 'seconde':
            container.innerHTML = renderParcours('seconde');
            break;
        case 'premiere':
            container.innerHTML = renderParcours('premiere');
            break;
        case 'terminale':
            container.innerHTML = renderParcours('terminale');
            break;
        case 'formulaire':
            container.innerHTML = renderFormulaire();
            break;
        default:
            container.innerHTML = renderAccueil();
    }

    updateActiveNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =============================================
// EVENT LISTENERS
// =============================================
window.addEventListener('hashchange', renderPage);
window.addEventListener('DOMContentLoaded', () => {
    renderPage();

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
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
});
