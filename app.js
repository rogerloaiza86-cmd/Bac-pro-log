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
                
                { code: 'C1.3', nom: 'Préparer l\'action de réception', desc: 'Planifier les moyens pour la réception des marchandises.' },
                { code: 'C1.3.1', nom: 'Planifier les moyens pour la réception', desc: 'Collecte des données et utilisation de planigramme.' },
                { code: 'C1.3.2', nom: 'Adapter l\'organisation de la réception selon les aléas', desc: 'Accueil conducteur, collecte et vérification des documents.' },
                { code: 'C1.4', nom: 'Traiter les opérations de réception de produits selon les procédures', desc: 'Déchargement, contrôle, réserves, gestion des déchets.' },
                { code: 'C1.4.1', nom: 'Mettre en œuvre les procédures de réception', desc: 'Contrôles quantitatifs/qualitatifs et application des protocoles.' },
                { code: 'C1.5', nom: 'Mettre en stock les produits', desc: 'Transfert et stockage en sécurité, dégroupage et reconditionnement.' },
                { code: 'C1.5.1', nom: 'Transférer et stocker les produits en sécurité', desc: 'Repérage des zones et rotation selon les critères de conservation.' },
                { code: 'C1.5.2', nom: 'Dégrouper et/ou reconditionner les produits', desc: 'Réalisation d\'activités de dégroupage ou reconditionnement.' },
                { code: 'C1.6', nom: 'Gérer le suivi des stocks', desc: 'Suivi des flux d\'information et participation aux inventaires.' },
                { code: 'C1.6.1', nom: 'Assurer le suivi des flux d\'information', desc: 'Actualisation de la base de données informatique.' },
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
                { code: 'C2.5', nom: 'Traiter les retours des supports de charges', desc: 'Suivi, traçabilité et contrôle des supports consignés.' },
                { code: 'C2.6', nom: 'Confier l\'expédition à un prestataire de transport externe', desc: 'Choisir un transporteur et échanger informations.' },
                { code: 'C2.6.1', nom: 'Choisir un transporteur dans une liste référencée', desc: 'Contrôle de l\'adéquation et identification des obligations.' },
                { code: 'C2.6.2', nom: 'Échanger informations et documents', desc: 'Transmission efficace via le moyen adapté.' },
            ]
        },
        {
            id: 'bloc3',
            nom: 'Bloc 3 — Contribuer de manière responsable à l\'efficacité des activités logistiques',
            couleur: '#10b981',
            competences: [
                { code: 'C3.1', nom: 'Adapter le processus logistique selon le type de produit ou de flux', desc: 'Prise en compte des spécificités et environnements.' },
                { code: 'C3.2', nom: 'Mettre en œuvre le processus de traçabilité', desc: 'Application des processus de traçabilité dans la chaîne.' },
                { code: 'C3.2.1', nom: 'Prendre part au processus qualité', desc: 'Contrôle de conformité et analyse de situation.' },
                { code: 'C3.2.2', nom: 'Assurer le suivi des produits à l\'aide de données', desc: 'Mise à jour des données dans un référentiel de suivi.' },
                { code: 'C3.2.3', nom: 'Identifier la procédure applicable selon le type de retour', desc: 'Caractérisation du retour et procédure adaptée.' },
                { code: 'C3.2.4', nom: 'Valoriser les déchets', desc: 'Identification des zones et tri dans les bacs dédiés.' },
                { code: 'C3.3', nom: 'Proposer des axes d\'amélioration logistique (RSE)', desc: 'Contribution à l\'amélioration sociétale et environnementale.' },
                { code: 'C3.3.1', nom: 'Analyser une situation professionnelle courante', desc: 'Diagnostic et repérage des incidences sur la chaîne.' },
                { code: 'C3.3.2', nom: 'Proposer des axes d\'amélioration', desc: 'Actions adaptées RSE pour améliorer l\'environnement.' },
                { code: 'C3.3.3', nom: 'Évaluer les impacts de l\'organisation du poste de travail', desc: 'Mesure d\'impacts et interprétation d\'indicateurs.' },
                { code: 'C3.4', nom: 'Coordonner une petite équipe logistique', desc: 'Transmission d\'infos, gestion d\'imprévus, animation.' },
                { code: 'C3.4.1', nom: 'Assurer le partage d\'informations', desc: 'Communication orale ou écrite lors de la prise de poste.' },
                { code: 'C3.4.2', nom: 'Traiter des situations imprévues', desc: 'Proposition d\'actions pour répondre aux imprévus.' },
                { code: 'C3.4.3', nom: 'Contribuer à l\'efficacité du service logistique', desc: 'Animation, suivi et prise en compte de la sécurité.' },
                { code: 'C3.4.4', nom: 'Veiller à l\'inclusion, au bien-être et à la sécurité', desc: 'Mise en place de l\'inclusion et vigilance bien-être.' },
            ]
        },
        {
            id: 'bloc4',
            nom: 'Bloc 4 — Conduire en sécurité des engins de manutention',
            couleur: '#f59e0b',
            competences: [
                { code: 'C4.1', nom: 'Mettre en service un engin de manutention en sécurité', desc: 'Vérification de l\'adéquation et du bon fonctionnement.' },
                { code: 'C4.1.1', nom: 'Vérifier l\'adéquation d\'un engin de manutention', desc: 'Identification des caractéristiques du transfert de charge.' },
                { code: 'C4.1.2', nom: 'Vérifier le bon fonctionnement des dispositifs de sécurité', desc: 'Réglages du poste et contrôle visuel de l\'engin.' },
                { code: 'C4.1.3', nom: 'Vérifier la présence et validité des documents réglementaires', desc: 'Exploitation des documents de l\'engin de manutention.' },
                { code: 'C4.2', nom: 'Conduire un engin de manutention', desc: 'Circulation à vide/charge, gestion des plans inclinés.' },
                { code: 'C4.2.1', nom: 'Circuler à vide', desc: 'Circulation en avant, arrière, virage et en allée.' },
                { code: 'C4.2.2', nom: 'Circuler en charge', desc: 'Circulation avec charge en toute sécurité.' },
                { code: 'C4.2.3', nom: 'Circuler sur un plan incliné', desc: 'Conduite en toute sécurité sur rampe d\'accès.' },
                { code: 'C4.2.4', nom: 'Respecter les règles de circulation Compréhension de la signalisation', desc: 'Compréhension de la signalisation et conduite éco.' },
                { code: 'C4.2.5', nom: 'Conduire avec assurance en sécurité Conduite sans heurts, sans chocs ou brutalité', desc: 'Conduite sans heurts, sans chocs ou brutalité.' },
                { code: 'C4.2.6', nom: 'Respecter les prescriptions en temps de l\'opération en garantissant la sécurité', desc: 'Respect des contraintes de temps garantissant la sécurité.' },
                { code: 'C4.3', nom: 'Manœuvrer un engin de manutention (1B 3 5)', desc: 'Manœuvre selon recommandations R489.' },
                { code: 'C4.3.1', nom: 'Manœuvrer un engin de catégorie 1B-R489', desc: 'Prise, déplacement et stockage jusqu\'à 2.90m.' },
                { code: 'C4.3.2', nom: 'Manœuvrer un engin de catégorie 3 –R489', desc: 'Prise, déplacement et stockage jusqu\'à 3.30m.' },
                { code: 'C4.3.3', nom: 'Manœuvrer un engin de catégorie 5 –R489', desc: 'Prise, déplacement et stockage jusqu\'à 6.00m.' },
                { code: 'C4.4', nom: 'Effectuer les opérations de fin de poste', desc: 'Stationnement, maintenance 1er niveau et compte-rendu.' },
                { code: 'C4.4.1', nom: 'Stationner l\'engin de manutention à son emplacement en sécurité', desc: 'Mise en stationnement selon le protocole.' },
                { code: 'C4.4.2', nom: 'Effectuer les opérations de maintenance de premier niveau si nécessaire', desc: 'Maintenance préventive si nécessaire.' },
                { code: 'C4.4.3', nom: 'Rendre compte des anomalies relevées', desc: 'Précision des comptes rendus sur le déroulé.' },
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

// Sample data scenarios - Progression spiralaire Bac Pro Logistique 2025
// Auteur: Roger Loaiza Soto
const SAMPLE_SCENARIOS = [
    { id: 'sc-s01', titre: "Premier jour sur le quai", entreprise: "FM Logistic (Longueil-Sainte-Marie)", niveau: "seconde", problematique: "Comment se repérer et s'intégrer dans un environnement logistique professionnel ?", description: "L'élève découvre l'organisation d'un entrepôt logistique : zones fonctionnelles, circuits de circulation, organigramme. Il doit se repérer sur un plan, identifier les zones de danger et rendre compte de ses observations à son tuteur.", competences: ['C1.1', 'C3.1'], auteur: "Roger Loaiza Soto", date: "2025-02-02", duree: "3h" },
    { id: 'sc-s02', titre: "Alerte sur le quai 7", entreprise: "Geodis (Gennevilliers)", niveau: "seconde", problematique: "Comment appliquer les protocoles de sécurité lors d'une livraison ?", description: "Une livraison de 35 palettes arrive. L'élève doit appliquer le protocole de sécurité chargement/déchargement, identifier les EPI nécessaires et repérer 3 situations dangereuses sur des photos de quai.", competences: ['C1.2'], auteur: "Roger Loaiza Soto", date: "2025-03-03", duree: "2h" },
    { id: 'sc-s03', titre: "120 colis pour demain matin", entreprise: "Amazon (Saran)", niveau: "seconde", problematique: "Comment réceptionner une livraison et contrôler sa conformité ?", description: "L'élève réceptionne une livraison de produits électroniques. Il contrôle quantitativement le BL par rapport au bon de commande, identifie des écarts simples et saisit les données dans un tableau.", competences: ['C2.1'], auteur: "Roger Loaiza Soto", date: "2025-04-04", duree: "2h" },
    { id: 'sc-s04', titre: "Le carton mouillé", entreprise: "Auchan Logistique (Villeparisis)", niveau: "seconde", problematique: "Comment détecter et signaler des anomalies qualitatives lors d'une réception ?", description: "Détection d'anomalies qualitatives (emballages détériorés). Formulation de réserves sur le BL et rédaction d'un mail simple au chef d'équipe pour signaler le problème.", competences: ['C2.1', 'C3.1'], auteur: "Roger Loaiza Soto", date: "2025-05-05", duree: "2h" },
    { id: 'sc-s05', titre: "Chaque chose à sa place", entreprise: "Leroy Merlin (Dourges)", niveau: "seconde", problematique: "Comment organiser le stockage selon les règles d'adressage ?", description: "Rangement de 15 références dans un palettier (adressage ABC). Lecture des étiquettes, utilisation du plan d'implantation et mise à jour manuelle d'un fichier de stock.", competences: ['C2.1', 'C1.1'], auteur: "Roger Loaiza Soto", date: "2025-06-06", duree: "3h" },
    { id: 'sc-s06', titre: "L'inventaire du rayon B", entreprise: "Décathlon (Lompret)", niveau: "seconde", problematique: "Comment participer à un inventaire tournant ?", description: "Participation à un inventaire tournant (40 emplacements). Comptage physique, comparaison stock théorique, consignation des écarts sur fiche d'inventaire.", competences: ['C2.1', 'C3.1'], auteur: "Roger Loaiza Soto", date: "2025-07-07", duree: "2h" },
    { id: 'sc-s07', titre: "Commande n°4521 : prête à 14h", entreprise: "Chronopost (Chilly-Mazarin)", niveau: "seconde", problematique: "Comment préparer une commande dans les délais impartis ?", description: "Préparation d'une commande simple (8 articles). Prélèvement en picking, vérification, transfert en zone d'expédition.", competences: ['C2.2'], auteur: "Roger Loaiza Soto", date: "2025-08-08", duree: "2h" },
    { id: 'sc-s08', titre: "Emballer, c'est un métier", entreprise: "Vente-privee (Saint-Vulbas)", niveau: "seconde", problematique: "Comment conditionner des produits fragiles pour l'expédition ?", description: "Conditionnement de 10 commandes fragiles. Choix des emballages, calage, apposition des étiquettes d'expédition.", competences: ['C2.2'], auteur: "Roger Loaiza Soto", date: "2025-09-09", duree: "2h" },
    { id: 'sc-s09', titre: "La palette parfaite", entreprise: "Nestlé France (Noisiel)", niveau: "seconde", problematique: "Comment constituer une palette stable et optimisée ?", description: "Constitution d'une palette homogène. Calcul du nombre de couches, filmage, vérification stabilité. Intro au calcul de surface/volume.", competences: ['C2.2', 'C1.2'], auteur: "Roger Loaiza Soto", date: "2025-10-10", duree: "2h" },
    { id: 'sc-s10', titre: "Qui livre quoi et quand ?", entreprise: "Stef (Rungis)", niveau: "seconde", problematique: "Comment comprendre et utiliser les documents de transport ?", description: "Découverte documentaire (CMR, BL, lettre de voiture). Association document/fonction, repérage d'infos clés.", competences: ['C2.3', 'C3.1'], auteur: "Roger Loaiza Soto", date: "2025-11-11", duree: "2h" },
    { id: 'sc-s11', titre: "Le frigo ne pardonne pas", entreprise: "Pomona (Nîmes)", niveau: "seconde", problematique: "Comment gérer la chaîne du froid lors d'une réception alimentaire ?", description: "Réception alimentaire sous température dirigée. Contrôle chaîne du froid, vérif DLC, application FIFO. Sensibilisation sanitaire.", competences: ['C2.1', 'C1.2'], auteur: "Roger Loaiza Soto", date: "2025-12-12", duree: "2h" },
    { id: 'sc-s12', titre: "SOS étiquette perdue", entreprise: "La Poste Colissimo (Wissous)", niveau: "seconde", problematique: "Comment gérer des colis sans étiquette ou avec erreur d'adresse ?", description: "Gestion de 3 colis sans étiquette et 1 erreur d'adresse. Application de procédure d'incident simple et MAJ informatique.", competences: ['C2.2', 'C3.2'], auteur: "Roger Loaiza Soto", date: "2025-01-13", duree: "2h" },
    { id: 'sc-s13', titre: "Mon poste, ma responsabilité", entreprise: "XPO Logistics (Réau)", niveau: "seconde", problematique: "Comment analyser les risques de son poste de travail ?", description: "Analyse risques au poste de packing (TMS, engins, bruit). Renseignement d'un document unique simplifié et 2 propositions d'amélioration ergonomiques.", competences: ['C1.2', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-02-14", duree: "3h" },
    { id: 'sc-s14', titre: "Le client attend sa commande", entreprise: "ManoMano (Beaune-la-Rolande)", niveau: "seconde", problematique: "Comment gérer plusieurs commandes simultanées avec des priorités différentes ?", description: "Gestion de 5 commandes simultanées avec priorités. Organisation du circuit, respect délais, MAJ sortie de stock. Intro productivité.", competences: ['C2.2'], auteur: "Roger Loaiza Soto", date: "2025-03-15", duree: "3h" },
    { id: 'sc-s15', titre: "Trier pour la planète", entreprise: "IKEA (Saint-Quentin-Fallavier)", niveau: "seconde", problematique: "Comment optimiser le tri sélectif et calculer le taux de valorisation ?", description: "Traitement des déchets d'emballage (cartons, plastiques). Tri sélectif (procédure RSE) et calcul du taux de valorisation.", competences: ['C1.2', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-04-16", duree: "2h" },
    { id: 'sc-s16', titre: "Parlez-vous logistique ?", entreprise: "DHL Supply Chain (Ferrières-en-Brie)", niveau: "seconde", problematique: "Comment communiquer efficacement dans un contexte international ?", description: "Appel d'un transporteur anglophone (retard). Compréhension message, transmission chef d'équipe, rédaction note interne.", competences: ['C3.1', 'C3.4'], auteur: "Roger Loaiza Soto", date: "2025-05-17", duree: "2h" },
    { id: 'sc-s17', titre: "Le BL ne colle pas", entreprise: "Metro Cash & Carry (Nanterre)", niveau: "seconde", problematique: "Comment gérer un écart entre BL et marchandises réceptionnées ?", description: "Réception 80 colis (BL à 82, 2 réfs fausses). Formalisation réserves, contact fournisseur (mail guidé), rapport réception.", competences: ['C2.1', 'C3.1'], auteur: "Roger Loaiza Soto", date: "2025-06-18", duree: "2h" },
    { id: 'sc-s18', titre: "Bilan de ma première saison", entreprise: "LogiSud (Entreprise fictive)", niveau: "seconde", problematique: "Comment se situer dans la supply chain et identifier ses compétences acquises ?", description: "Bilan des missions. L'élève se situe dans la supply chain (schéma), identifie ses compétences, rédige 150 mots et présente oralement.", competences: ['C3.3', 'C3.1'], auteur: "Roger Loaiza Soto", date: "2025-07-19", duree: "4h" },
    { id: 'sc-p01', titre: "3 camions, 2 quais, 1 heure", entreprise: "Kuehne+Nagel (Saint-Priest)", niveau: "premiere", problematique: "Comment organiser la réception simultanée de plusieurs camions ?", description: "Organisation réception simultanée. Consultation planning prévisionnel, priorisation arrivées urgentes, affectation ressources.", competences: ['C1.1', 'C2.1'], auteur: "Roger Loaiza Soto", date: "2025-02-02", duree: "3h" },
    { id: 'sc-p02', titre: "Réception sous haute tension", entreprise: "Sanofi (Val-de-Reuil)", niveau: "premiere", problematique: "Comment réceptionner des médicaments sous température contrôlée ?", description: "Lot de médicaments sous temp. contrôlée. Vérification documentaire (BL, conformité, FDS), chaîne du froid, DLC non conforme, quarantaine.", competences: ['C2.1'], auteur: "Roger Loaiza Soto", date: "2025-03-03", duree: "3h" },
    { id: 'sc-p03', titre: "Le WMS dit non", entreprise: "ID Logistics (Château-Thierry)", niveau: "premiere", problematique: "Comment gérer des refus de mise en stock par le WMS ?", description: "Mise en stock de 25 palettes, 3 refusées par WMS. Analyse alertes, recherche emplacements alternatifs, MAJ BDD.", competences: ['C2.1', 'C3.2'], auteur: "Roger Loaiza Soto", date: "2025-04-04", duree: "3h" },
    { id: 'sc-p04', titre: "Inventaire annuel : l'heure de vérité", entreprise: "Boulanger (Lesquin)", niveau: "premiere", problematique: "Comment piloter un inventaire et analyser les écarts significatifs ?", description: "Pilotage inventaire (200 réfs). Comptage, 12 écarts significatifs, analyse causes (saisie, vol, casse), rapport avec correctives.", competences: ['C2.1', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-05-05", duree: "4h" },
    { id: 'sc-p05', titre: "Commande multi-références", entreprise: "Cdiscount (Cestas)", niveau: "premiere", problematique: "Comment optimiser la préparation d'une commande complexe avec rupture de stock ?", description: "Préparation complexe (22 articles, 4 zones). Optimisation circuit, gestion rupture de stock, proposition solution client.", competences: ['C2.2'], auteur: "Roger Loaiza Soto", date: "2025-06-06", duree: "4h" },
    { id: 'sc-p06', titre: "La palette export", entreprise: "Airbus (Toulouse-Blagnac)", niveau: "premiere", problematique: "Comment préparer une palette aéronautique pour l'export international ?", description: "Palette aéronautique internationale. Optimisation poids/volume, liasse export (packing list, BL, CMR), conformité douanière.", competences: ['C2.2', 'C2.3'], auteur: "Roger Loaiza Soto", date: "2025-07-07", duree: "4h" },
    { id: 'sc-p07', titre: "Tournée du dernier kilomètre", entreprise: "Stuart DPD (Paris 19e)", niveau: "premiere", problematique: "Comment planifier une tournée urbaine optimisée ?", description: "Tournée urbaine 18 points. Outil de planification, calcul temps, contraintes d'accès urbains.", competences: ['C2.3'], auteur: "Roger Loaiza Soto", date: "2025-08-08", duree: "3h" },
    { id: 'sc-p08', titre: "Retour à l'envoyeur", entreprise: "Zalando (Moissy-Cramayel)", niveau: "premiere", problematique: "Comment traiter les retours clients et analyser les motifs ?", description: "Traitement de 30 retours clients. Contrôle état, classification, MAJ stock, compte-rendu motifs pour le service qualité.", competences: ['C2.3', 'C2.1', 'C3.2'], auteur: "Roger Loaiza Soto", date: "2025-09-09", duree: "3h" },
    { id: 'sc-p09', titre: "Produits dangereux", entreprise: "Total Energies (Dunkerque)", niveau: "premiere", problematique: "Comment réceptionner et stocker des produits chimiques conformément à l'ADR ?", description: "Réception chimique ADR. Pictogrammes, étiquetage, règles stockage, incompatibilités, registre sécurité.", competences: ['C1.2', 'C2.1'], auteur: "Roger Loaiza Soto", date: "2025-10-10", duree: "4h" },
    { id: 'sc-p10', titre: "Le chef d'équipe est absent", entreprise: "Carrefour Supply (Combs-la-Ville)", niveau: "premiere", problematique: "Comment répartir les tâches et coordonner une petite équipe ?", description: "Répartition tâches (4 opérateurs). Lecture planning, affectation selon habilitations, briefing 5 minutes.", competences: ['C3.4', 'C3.1', 'C1.1'], auteur: "Roger Loaiza Soto", date: "2025-11-11", duree: "3h" },
    { id: 'sc-p11', titre: "L'erreur de picking coûte cher", entreprise: "Leclerc (Scapalsace)", niveau: "premiere", problematique: "Comment analyser les causes d'un taux d'erreur élevé et proposer un plan d'action ?", description: "Analyse TdB perf (erreur 4,2%). Identification causes racines, calcul coût des erreurs, proposition plan d'action.", competences: ['C2.2', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-12-12", duree: "4h" },
    { id: 'sc-p12', titre: "Cross-docking express", entreprise: "Lidl (Rousset)", niveau: "premiere", problematique: "Comment gérer une opération cross-docking avec des contraintes de temps serrées ?", description: "Réception 40 palettes 6h, éclatement, chargement 8 camions avant 10h. Gestion timing et aléa (camion en retard).", competences: ['C2.1', 'C2.2', 'C2.3'], auteur: "Roger Loaiza Soto", date: "2025-01-13", duree: "4h" },
    { id: 'sc-p13', titre: "Transporteur conteste réserves", entreprise: "Bolloré Logistics (Le Havre)", niveau: "premiere", problematique: "Comment gérer un litige avec un transporteur qui refuse de signer les réserves ?", description: "Refus de signer BL avec réserves. Argumentation, cadre juridique, rédaction courrier de litige professionnel.", competences: ['C2.1', 'C3.1', 'C3.2'], auteur: "Roger Loaiza Soto", date: "2025-02-14", duree: "3h" },
    { id: 'sc-p14', titre: "Préparer Noël en octobre", entreprise: "Amazon (Brétigny-sur-Orge)", niveau: "premiere", problematique: "Comment planifier un pic d'activité de +180% en termes de ressources ?", description: "Planification pic activité (+180%). Calcul besoins intérim/matériel, proposition réaménagement des zones.", competences: ['C1.1', 'C2.1', 'C2.2'], auteur: "Roger Loaiza Soto", date: "2025-03-15", duree: "4h" },
    { id: 'sc-p15', titre: "Copacking pour une promo", entreprise: "FM Logistic (Château-Thierry)", niveau: "premiere", problematique: "Comment organiser une ligne de conditionnement pour une opération promotionnelle ?", description: "Assemblage lots promo. Organisation ligne conditionnement, contrôle conformité, calcul productivité horaire.", competences: ['C2.2'], auteur: "Roger Loaiza Soto", date: "2025-04-16", duree: "4h" },
    { id: 'sc-p16', titre: "Accident évité de justesse", entreprise: "XPO Logistics (Réau)", niveau: "premiere", problematique: "Comment analyser un presqu'accident et proposer des mesures préventives ?", description: "Analyse presqu'accident (arbre des causes). Identification manquements, rédaction fiche signalement et prévention.", competences: ['C1.2', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-05-17", duree: "3h" },
    { id: 'sc-p17', titre: "Le client appelle, mécontent", entreprise: "Rhenus Logistics (Strasbourg)", niveau: "premiere", problematique: "Comment gérer une réclamation client et proposer une solution adaptée ?", description: "Réclamation tél (livraison incomplète/endommagée). Dossier litige, traçabilité WMS, proposition solution.", competences: ['C3.1', 'C3.2'], auteur: "Roger Loaiza Soto", date: "2025-06-18", duree: "3h" },
    { id: 'sc-p18', titre: "Optimiser l'espace", entreprise: "Dachser (Ferrières-en-Brie)", niveau: "premiere", problematique: "Comment analyser et améliorer le taux d'occupation d'un entrepôt ?", description: "Analyse taux occupation (62%). Réaménagement méthode ABC, calcul gain potentiel emplacements.", competences: ['C2.1', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-07-19", duree: "4h" },
    { id: 'sc-p19', titre: "Livraison multimodale", entreprise: "Haropa Port (Gennevilliers)", niveau: "premiere", problematique: "Comment comparer les modes de transport et optimiser l'empreinte carbone ?", description: "Expédition route + fleuve. Comparaison coûts/délais, empreinte carbone, documents adaptés. Décarbonation.", competences: ['C2.3', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-08-20", duree: "4h" },
    { id: 'sc-p20', titre: "Bilan de compétences", entreprise: "NordLog (Entreprise fictive)", niveau: "premiere", problematique: "Comment réaliser un bilan de compétences et se préparer à l'oral ?", description: "Bilan PFMP, schéma supply chain, points forts/progrès, préparation présentation orale de 5 minutes.", competences: ['C3.3', 'C3.1', 'C3.4'], auteur: "Roger Loaiza Soto", date: "2025-09-21", duree: "4h" },
    { id: 'sc-t01', titre: "Lundi 6h : le planning explose", entreprise: "Geodis (Gennevilliers)", niveau: "terminale", problematique: "Comment gérer 3 aléas simultanés et réorganiser l'activité ?", description: "Gestion de 3 aléas (absent, panne, avance). Réorganisation planning, réaffectation, briefing urgence équipe.", competences: ['C1.1', 'C3.4'], auteur: "Roger Loaiza Soto", date: "2025-02-02", duree: "4h" },
    { id: 'sc-t02', titre: "Réception 40 pieds de Shanghai", entreprise: "CMA CGM Logistics (Le Havre)", niveau: "terminale", problematique: "Comment gérer une réception import maritime et sa liasse documentaire ?", description: "Conteneur import. Liasse documentaire (BL maritime, packing list, douane), contrôle, non-conformités internationales.", competences: ['C2.1', 'C2.3'], auteur: "Roger Loaiza Soto", date: "2025-03-03", duree: "4h" },
    { id: 'sc-t03', titre: "Stock mort, stock coûteux", entreprise: "Saint-Gobain Point.P", niveau: "terminale", problematique: "Comment analyser la rotation des stocks et proposer un plan de déstockage ?", description: "Analyse rotation. Identification surstock/stock mort, coûts possession, plan déstockage, rapport direction.", competences: ['C2.1', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-04-04", duree: "4h" },
    { id: 'sc-t04', titre: "Black Friday : 10 000 commandes", entreprise: "Cdiscount (Cestas)", niveau: "terminale", problematique: "Comment piloter un pic d'activité exceptionnel et prendre des décisions d'arbitrage ?", description: "Pilotage pic exceptionnel. Vagues picking, ruptures temps réel, TdB productivité, décisions d'arbitrage.", competences: ['C2.2', 'C1.1'], auteur: "Roger Loaiza Soto", date: "2025-05-05", duree: "6h" },
    { id: 'sc-t05', titre: "La palette qui ne rentre pas", entreprise: "Stef (Rungis)", niveau: "terminale", problematique: "Comment optimiser le chargement d'un camion frigo avec contraintes multiples ?", description: "Optimisation chargement camion frigo. Simulation 3D, contraintes poids/essieu, compatibilité, gestion ajout urgent.", competences: ['C2.2', 'C2.3'], auteur: "Roger Loaiza Soto", date: "2025-06-06", duree: "4h" },
    { id: 'sc-t06', titre: "Litige transporteur : 15 000 euros", entreprise: "Bolloré Logistics (Puteaux)", niveau: "terminale", problematique: "Comment gérer un litige majeur et négocier une indemnisation ?", description: "Litige majeur. Dossier complet, délais légaux, négociation écrite, calcul indemnisation barèmes.", competences: ['C2.1', 'C3.1', 'C3.2'], auteur: "Roger Loaiza Soto", date: "2025-07-07", duree: "4h" },
    { id: 'sc-t07', titre: "Transport pour 3 régions", entreprise: "Dimotrans (Lyon)", niveau: "terminale", problematique: "Comment planifier un transport multi-régions avec optimisation économique et écologique ?", description: "Planification multi-régions. Sélection modes (messagerie, affrètement), devis, empreinte carbone, planning optimisé.", competences: ['C2.3', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-08-08", duree: "4h" },
    { id: 'sc-t08', titre: "Le client menace de résilier", entreprise: "Kuehne+Nagel Automobile", niveau: "terminale", problematique: "Comment gérer une crise client et élaborer un plan d'action correctif ?", description: "Crise client (3 retards). Analyse données WMS, rapport, plan action corrective, simulation réunion.", competences: ['C3.1', 'C3.2', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-09-09", duree: "4h" },
    { id: 'sc-t09', titre: "Audit sécurité : êtes-vous prêts ?", entreprise: "ID Logistics (Château-Thierry)", niveau: "terminale", problematique: "Comment préparer et réussir un audit sécurité interne ?", description: "Préparation audit interne. Inspection, conformité (extincteurs, signalétique), matrice criticité, plan conformité.", competences: ['C1.2', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-10-10", duree: "4h" },
    { id: 'sc-t10', titre: "Inventaire fiscal : zéro erreur", entreprise: "L'Oreal (Gauchy)", niveau: "terminale", problematique: "Comment superviser un inventaire fiscal avec 500 références et analyser les écarts ?", description: "Supervision inventaire (500 réfs). Planification équipes, double comptage, analyse écarts, rapport commissaire.", competences: ['C2.1', 'C3.3', 'C3.4'], auteur: "Roger Loaiza Soto", date: "2025-11-11", duree: "6h" },
    { id: 'sc-t11', titre: "Quand le WMS plante à 8h", entreprise: "FM Logistic (Longueil)", niveau: "terminale", problematique: "Comment gérer une panne informatique de 3h et maintenir la traçabilité ?", description: "Panne 3h. Bascule mode dégradé (papier), traçabilité manuelle, ressaisie complète post-panne.", competences: ['C2.1', 'C2.2', 'C3.2'], auteur: "Roger Loaiza Soto", date: "2025-12-12", duree: "4h" },
    { id: 'sc-t12', titre: "Supply chain pharma : traçabilité", entreprise: "Sanofi (Val-de-Reuil)", niveau: "terminale", problematique: "Comment gérer la sérialisation et la traçabilité des vaccins ?", description: "Sérialisation vaccins. Vérif numéros lots, enregistreur température, BPD, gestion rappel de lot.", competences: ['C2.1', 'C2.2'], auteur: "Roger Loaiza Soto", date: "2025-01-13", duree: "4h" },
    { id: 'sc-t13', titre: "Le plan de transport ne tient plus", entreprise: "Dachser (Ferrières)", niveau: "terminale", problematique: "Comment gérer une grève des routiers et réorganiser les livraisons ?", description: "Grève routiers. Identification impacts, itinéraires alternatifs, modes substitution, infos clients, recalcul coûts.", competences: ['C2.3', 'C3.4'], auteur: "Roger Loaiza Soto", date: "2025-02-14", duree: "4h" },
    { id: 'sc-t14', titre: "Décarboner le dernier kilomètre", entreprise: "La Poste Colissimo (IDF)", niveau: "terminale", problematique: "Comment analyser et optimiser l'empreinte carbone de la livraison urbaine ?", description: "Remplacement flotte (électrique/vélo). Analyse tournées, économies CO2, contraintes, note recommandation.", competences: ['C2.3', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-03-15", duree: "4h" },
    { id: 'sc-t15', titre: "Manager une équipe de 6 intérimaires", entreprise: "XPO Logistics (Réau)", niveau: "terminale", problematique: "Comment coordonner une équipe mixte et gérer les conflits ?", description: "Coordination équipe. Accueil sécurité, missions, suivi productivité, gestion conflit, débriefing.", competences: ['C3.4', 'C1.1', 'C3.1'], auteur: "Roger Loaiza Soto", date: "2025-04-16", duree: "6h" },
    { id: 'sc-t16', titre: "Entrepôt 4.0 : robotisation", entreprise: "Ocado (Étude)", niveau: "terminale", problematique: "Comment analyser l'impact de la robotisation sur les métiers logistiques ?", description: "Analyse entrepôt automatisé (robots, IA). Comparaison, impacts métiers/compétences, note prospective.", competences: ['C1.1', 'C3.3'], auteur: "Roger Loaiza Soto", date: "2025-05-17", duree: "4h" },
    { id: 'sc-t17', titre: "Appel d'offres logistique", entreprise: "Rhenus Logistics (Strasbourg)", niveau: "terminale", problematique: "Comment répondre à un appel d'offres et chiffrer une prestation logistique ?", description: "Réponse AO. Analyse CDC, chiffrage coûts, rédaction offre opérationnelle, présentation orale.", competences: ['C3.1', 'C3.2', 'C2.3'], auteur: "Roger Loaiza Soto", date: "2025-06-18", duree: "6h" },
    { id: 'sc-t18', titre: "Retour de PFMP : analyse chaîne", entreprise: "Entreprise de l'élève", niveau: "terminale", problematique: "Comment cartographier la chaîne logistique et identifier des axes d'amélioration ?", description: "Cartographie chaîne logistique. Flux physiques/infos, dysfonctionnements, améliorations, soutenance (E31).", competences: ['C3.3', 'C1.1', 'C2.1', 'C2.2', 'C2.3', 'C3.1', 'C3.2', 'C3.4'], auteur: "Roger Loaiza Soto", date: "2025-07-19", duree: "8h" },
    { id: 'sc-t19', titre: "Scénario d'examen blanc intégré", entreprise: "TransEurLog", niveau: "terminale", problematique: "Comment préparer l'épreuve E2 avec un scénario complet ?", description: "Examen blanc (E2). Dossier combinant réception anomalies, préparation sous contrainte, expédition, aléa.", competences: ['C2.1', 'C2.2', 'C2.3', 'C3.1', 'C3.2', 'C3.3', 'C3.4'], auteur: "Roger Loaiza Soto", date: "2025-08-20", duree: "8h" },
    { id: 'sc-t20', titre: "Bilan final : mon parcours", entreprise: "Parcours de l'élève", niveau: "terminale", problematique: "Comment synthétiser son parcours et préparer son projet professionnel ?", description: "Livret compétences, bilan (schéma + 150 mots), préparation E2/E31/E32, présentation projet pro.", competences: ['C1.1', 'C1.2', 'C2.1', 'C2.2', 'C2.3', 'C3.1', 'C3.2', 'C3.3', 'C3.4'], auteur: "Roger Loaiza Soto", date: "2025-09-21", duree: "6h" },
];

// =============================================
// STATE & STORAGE
// =============================================
const STORAGE_KEY = 'logistique2025_scenarios';
const STORAGE_VERSION_KEY = 'logistique2025_version';
const CURRENT_VERSION = '5.0'; // Bump when referential data changes

// Stockage en mémoire comme fallback (si localStorage bloqué)
let MEMORY_STORAGE = null;
let LOCAL_STORAGE_AVAILABLE = true;

// Test de disponibilité du localStorage
try {
    localStorage.setItem('__test__', 'test');
    localStorage.removeItem('__test__');
    console.log('%c[Storage] localStorage disponible ✓', 'color: #10b981;');
} catch (e) {
    LOCAL_STORAGE_AVAILABLE = false;
    console.warn('%c[Storage] localStorage NON disponible - utilisation mémoire', 'background: #f59e0b; color: white; padding: 4px 8px;');
    alert('ATTENTION: Le stockage local est désactivé sur votre navigateur. Les scénarios seront stockés temporairement en mémoire et seront perdus en quittant la page. Utilisez le bouton "Exporter JSON" pour sauvegarder vos données.');
}

function loadScenarios() {
    // Utiliser le stockage mémoire si localStorage n'est pas disponible
    if (!LOCAL_STORAGE_AVAILABLE) {
        console.log('%c[loadScenarios] Utilisation du stockage mémoire', 'color: #f59e0b;');
        if (MEMORY_STORAGE === null) {
            MEMORY_STORAGE = JSON.parse(JSON.stringify(SAMPLE_SCENARIOS));
            console.log(`%c[loadScenarios] ${MEMORY_STORAGE.length} scénarios chargés (mémoire)`, 'color: #f59e0b;');
        }
        return MEMORY_STORAGE;
    }
    
    try {
        const storedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
        if (storedVersion !== CURRENT_VERSION) {
            // Referential data changed — migrer les données existantes si possible
            const existingData = localStorage.getItem(STORAGE_KEY);
            let scenarios = [];
            
            if (existingData) {
                try {
                    const parsed = JSON.parse(existingData);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        // Conserver les scénarios existants
                        scenarios = parsed;
                        console.log(`${scenarios.length} scénarios existants migrés vers la version ${CURRENT_VERSION}`);
                    }
                } catch (e) {
                    console.warn('Données existantes corrompues, utilisation des samples');
                }
            }
            
            // Si aucun scénario existant, utiliser les samples
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
            // S'assurer que c'est bien un tableau
            if (Array.isArray(parsed)) {
                console.log(`%c[loadScenarios] ${parsed.length} scénarios chargés`, 'color: #f59e0b;');
                return parsed;
            }
        }
        // First load — seed with samples
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_SCENARIOS));
        localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);
        return JSON.parse(JSON.stringify(SAMPLE_SCENARIOS));
    } catch (error) {
        console.error('Erreur lors du chargement des scénarios:', error);
        return JSON.parse(JSON.stringify(SAMPLE_SCENARIOS));
    }
}

function saveScenarios(scenarios) {
    console.log('[saveScenarios] Sauvegarde de', scenarios.length, 'scénarios');
    
    // Utiliser le stockage mémoire si localStorage n'est pas disponible
    if (!LOCAL_STORAGE_AVAILABLE) {
        MEMORY_STORAGE = [...scenarios];
        console.log('%c[saveScenarios] ✅ Sauvegardé en mémoire', 'background: #f59e0b; color: white; padding: 4px 8px;');
        return;
    }
    
    try {
        const json = JSON.stringify(scenarios);
        console.log('[saveScenarios] JSON length:', json.length, 'caractères');
        localStorage.setItem(STORAGE_KEY, json);
        localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);  // ← CORRECTION : Définir la version
        console.log('[saveScenarios] ✅ Sauvegarde réussie');
    } catch (error) {
        console.error('[saveScenarios] ❌ Erreur:', error);
        if (error.name === 'QuotaExceededError') {
            alert('Le stockage local est plein. Impossible d\'enregistrer le scénario.');
        } else {
            alert('Erreur de sauvegarde: ' + error.message);
        }
        throw error;
    }
}

function addScenario(scenario) {
    console.log('%c[addScenario] DÉBUT', 'background: #137fec; color: white; padding: 4px 8px; border-radius: 4px;', scenario);
    try {
        const scenarios = loadScenarios();
        console.log('%c[addScenario] Scénarios chargés:', 'color: #137fec;', scenarios.length);
        
        const newScenario = {
            ...scenario,
            id: 'sc-' + Date.now(),
            date: new Date().toISOString().split('T')[0],
            auteur: scenario.auteur || 'Contributeur',
            duree: scenario.duree || '2h'
        };
        console.log('%c[addScenario] Nouveau scénario:', 'color: #137fec;', newScenario);
        
        scenarios.push(newScenario);
        console.log('%c[addScenario] Scénarios après push:', 'color: #137fec;', scenarios.length);
        
        saveScenarios(scenarios);
        
        // Vérification immédiate
        let parsed;
        if (LOCAL_STORAGE_AVAILABLE) {
            const verify = localStorage.getItem(STORAGE_KEY);
            parsed = JSON.parse(verify);
        } else {
            parsed = MEMORY_STORAGE;
        }
        console.log('%c[addScenario] Vérification après sauvegarde:', 'color: #137fec;', parsed.length, 'scénarios');
        
        if (parsed.find(s => s.id === newScenario.id)) {
            console.log('%c[addScenario] ✅ SCÉNARIO CONFIRMÉ DANS LOCALSTORAGE', 'background: #10b981; color: white; padding: 4px 8px; border-radius: 4px;');
            return newScenario;
        } else {
            console.error('%c[addScenario] ❌ SCÉNARIO NON TROUVÉ APRÈS SAUVEGARDE', 'background: #ef4444; color: white; padding: 4px 8px; border-radius: 4px;');
            alert('ERREUR: Le scénario a été sauvegardé mais ne peut pas être retrouvé. Vérifiez la console.');
            return null;
        }
    } catch (error) {
        console.error('%c[addScenario] ❌ ERREUR:', 'background: #ef4444; color: white; padding: 4px 8px; border-radius: 4px;', error);
        alert('Une erreur est survenue lors de l\'enregistrement: ' + error.message);
        return null;
    }
}

function deleteScenario(id) {
    let scenarios = loadScenarios();
    scenarios = scenarios.filter(s => s.id !== id);
    saveScenarios(scenarios);
}

function getScenariosByLevel(level) {
    return loadScenarios().filter(s => s.niveau === level);
}

function searchScenarios(query) {
    const scenarios = loadScenarios();
    if (!query || query.trim() === '') return scenarios;
    
    const lowerQuery = query.toLowerCase().trim();
    return scenarios.filter(s => 
        (s.titre && s.titre.toLowerCase().includes(lowerQuery)) ||
        (s.description && s.description.toLowerCase().includes(lowerQuery)) ||
        (s.problematique && s.problematique.toLowerCase().includes(lowerQuery)) ||
        (s.miseEnSituation && s.miseEnSituation.toLowerCase().includes(lowerQuery)) ||
        (s.magasinPedagogique && s.magasinPedagogique.toLowerCase().includes(lowerQuery)) ||
        (s.entreprise && s.entreprise.toLowerCase().includes(lowerQuery)) ||
        (s.auteur && s.auteur.toLowerCase().includes(lowerQuery)) ||
        (s.competences && s.competences.some(c => c.toLowerCase().includes(lowerQuery)))
    );
}

function filterScenariosByCompetence(competenceCode) {
    const scenarios = loadScenarios();
    if (!competenceCode) return scenarios;
    return scenarios.filter(s => s.competences && s.competences.includes(competenceCode));
}

function getTopContributors(limit = 5) {
    const scenarios = loadScenarios();
    const contributors = {};
    
    scenarios.forEach(s => {
        const auteur = s.auteur || 'Anonyme';
        if (!contributors[auteur]) {
            contributors[auteur] = {
                name: auteur,
                count: 0,
                scenarios: []
            };
        }
        contributors[auteur].count++;
        contributors[auteur].scenarios.push(s);
    });
    
    return Object.values(contributors)
        .sort((a, b) => b.count - a.count)
        .slice(0, limit);
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

    // Afficher la problématique si elle existe, sinon la description
    const displayText = scenario.problematique || scenario.description || '';
    const isProblematique = !!scenario.problematique;

    return `
        <div class="card" data-scenario-id="${scenario.id}" onclick="openScenarioModal('${scenario.id}')">
            <div class="card-img" style="background-image: url('${getRandomImage()}')">
                <span class="card-img-badge" style="background:${blocColor}">${blocLabel}</span>
                <span class="card-img-time"><span class="material-symbols-outlined">schedule</span>${scenario.duree}</span>
            </div>
            <div class="card-body">
                <h4 class="card-title">${escapeHtml(scenario.titre)}</h4>
                ${isProblematique ? `<div class="card-problematique"><span class="problematique-label">Problématique :</span> ${escapeHtml(scenario.problematique)}</div>` : ''}
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
                        <button class="card-view-btn" onclick="event.stopPropagation(); openScenarioModal('${scenario.id}')" title="Ouvrir">
                            <span class="material-symbols-outlined">visibility</span>
                        </button>
                        <button class="card-delete-btn" onclick="event.stopPropagation(); handleDelete('${scenario.id}')" title="Supprimer">
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

function renderTopContributors() {
    const contributors = getTopContributors(5);
    
    if (contributors.length === 0) {
        return '';
    }
    
    const podiumColors = ['#FFD700', '#C0C0C0', '#CD7F32']; // Or, Argent, Bronze
    
    const contributorsHTML = contributors.map((c, index) => {
        const initials = c.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        const rank = index + 1;
        const medalColor = index < 3 ? podiumColors[index] : 'transparent';
        const showMedal = index < 3;
        
        return `
            <div class="contributor-item">
                <div class="contributor-rank">${showMedal ? `<span class="medal" style="background:${medalColor}">${rank}</span>` : rank}</div>
                <div class="contributor-avatar">${initials}</div>
                <div class="contributor-info">
                    <div class="contributor-name">${escapeHtml(c.name)}</div>
                    <div class="contributor-count">${c.count} scénario${c.count > 1 ? 's' : ''}</div>
                </div>
            </div>
        `;
    }).join('');
    
    return `
        <section class="contributors-section">
            <div class="contributors-inner">
                <div class="contributors-header">
                    <h2><span class="material-symbols-outlined">emoji_events</span> Meilleurs Contributeurs</h2>
                    <p>Remercions les enseignants qui enrichissent la plateforme en partageant leurs scénarios pédagogiques.</p>
                </div>
                <div class="contributors-list">
                    ${contributorsHTML}
                </div>
            </div>
        </section>
    `;
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

        <!-- Top Contributors -->
        ${renderTopContributors()}

        <!-- CTA -->
        <section class="cta-section">
            <h2>Prêt à collaborer ?</h2>
            <p>Rejoignez la communauté des enseignants et accédez dès aujourd'hui aux ressources du Bac pro métiers de la logistique.</p>
            <div class="cta-actions">
                <button class="btn btn-primary btn-lg" onclick="navigateTo('formulaire')">Ajouter un scénario</button>
                <button class="btn btn-outline btn-lg" onclick="navigateTo('seconde')">Explorer les parcours</button>
            </div>
            ${renderExportImportButtons()}
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
                                <label class="form-label" for="f-problematique">Problématique <span class="required">*</span></label>
                                <input class="form-input" type="text" id="f-problematique" placeholder="Ex : Comment optimiser la réception des marchandises en respectant les normes de sécurité ?" required />
                                <p style="font-size:0.75rem;color:var(--text-muted);margin-top:4px">La question centrale que les élèves vont devoir résoudre.</p>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="f-description">Description courte</label>
                                <textarea class="form-textarea" id="f-description" placeholder="Décrivez brièvement le contexte, les objectifs et le déroulement de la séance..." maxlength="500" oninput="updateCharCount()"></textarea>
                                <div class="form-char-count"><span id="char-count">0</span> / 500 caractères</div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="f-mise-en-situation">Mise en situation</label>
                                <textarea class="form-textarea" id="f-mise-en-situation" placeholder="Décrivez la mise en situation professionnelle : contexte, rôles des élèves, situation initiale..." maxlength="1000" oninput="updateCharCount('f-mise-en-situation', 'char-count-situation')"></textarea>
                                <div class="form-char-count"><span id="char-count-situation">0</span> / 1000 caractères</div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="f-magasin-pedagogique">Utilisation du magasin pédagogique</label>
                                <textarea class="form-textarea" id="f-magasin-pedagogique" placeholder="Décrivez les ressources du magasin pédagogique nécessaires : matériel, documents, supports, consommables..." maxlength="800" oninput="updateCharCount('f-magasin-pedagogique', 'char-count-magasin')"></textarea>
                                <div class="form-char-count"><span id="char-count-magasin">0</span> / 800 caractères</div>
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
                                <li>Décrivez le contexte professionnel de manière réaliste dans la mise en situation.</li>
                                <li>Détaillez les ressources du magasin pédagogique nécessaires (matériel, documents, supports).</li>
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
    console.log('[submitForm] Début de la soumission...');
    
    const titre = document.getElementById('f-titre')?.value.trim();
    const entreprise = document.getElementById('f-entreprise')?.value.trim();
    const niveau = document.getElementById('f-niveau')?.value;
    const auteur = document.getElementById('f-auteur')?.value.trim();
    const duree = document.getElementById('f-duree')?.value.trim();
    const problematique = document.getElementById('f-problematique')?.value.trim();
    const description = document.getElementById('f-description')?.value.trim();
    const miseEnSituation = document.getElementById('f-mise-en-situation')?.value.trim();
    const magasinPedagogique = document.getElementById('f-magasin-pedagogique')?.value.trim();
    const checkboxes = document.querySelectorAll('input[name="competences"]:checked');
    const competences = Array.from(checkboxes).map(cb => cb.value);
    
    console.log('[submitForm] Données récupérées:', { titre, niveau, auteur, problematique, competences: competences.length });

    if (!titre) { alert('Veuillez saisir un titre pour le scénario.'); return; }
    if (!niveau) { alert('Veuillez sélectionner un niveau de classe.'); return; }
    if (!auteur) { alert('Veuillez saisir votre nom.'); return; }
    if (!problematique) { alert('Veuillez saisir une problématique.'); return; }
    if (competences.length === 0) { alert('Veuillez sélectionner au moins une compétence.'); return; }

    console.log('[submitForm] Validation OK, appel de addScenario...');
    const result = addScenario({ titre, entreprise, niveau, auteur, duree: duree || '2h', problematique, description, miseEnSituation, magasinPedagogique, competences });
    
    if (result) {
        console.log('[submitForm] ✅ Scénario créé:', result.id);
        showToast('Scénario publié avec succès !');
        // Réinitialiser le formulaire avant la navigation
        resetForm();
        // Navigation après un délai pour laisser le temps au toast de s'afficher
        setTimeout(() => navigateTo(niveau), 800);
    } else {
        console.error('[submitForm] ❌ Échec de la création');
        alert('Le scénario n\'a pas pu être enregistré. Vérifiez la console pour plus de détails.');
    }
}

function resetForm() {
    const form = document.getElementById('scenario-form');
    if (form) {
        form.reset();
        updateCharCount();
    }
}

function updateCharCount(textareaId = 'f-description', counterId = 'char-count') {
    const textarea = document.getElementById(textareaId);
    const counter = document.getElementById(counterId);
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
// SCENARIO MODAL
// =============================================
function openScenarioModal(id) {
    const scenarios = loadScenarios();
    const scenario = scenarios.find(s => s.id === id);
    if (!scenario) return;
    
    // Créer ou mettre à jour la modal
    let modal = document.getElementById('scenario-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'scenario-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = renderScenarioModal(scenario);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('scenario-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

function renderScenarioModal(scenario) {
    const competencyDetails = scenario.competences.map(code => {
        const info = getCompetencyInfo(code);
        if (!info) return '';
        const color = info.bloc.couleur;
        return `
            <div class="modal-competency" style="border-left-color: ${color}">
                <div class="modal-competency-code" style="color: ${color}">${code}</div>
                <div class="modal-competency-name">${info.nom}</div>
                <div class="modal-competency-desc">${info.desc}</div>
            </div>
        `;
    }).join('');
    
    const blocInfo = getCompetencyInfo(scenario.competences[0]);
    const blocColor = blocInfo ? blocInfo.bloc.couleur : '#137fec';
    const initials = scenario.auteur.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    
    const niveauLabel = {
        'seconde': 'Seconde Bac Pro',
        'premiere': 'Première Bac Pro',
        'terminale': 'Terminale Bac Pro'
    }[scenario.niveau] || scenario.niveau;
    
    return `
        <div class="modal-overlay" onclick="closeModal()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">
                <span class="material-symbols-outlined">close</span>
            </button>
            
            <div class="modal-header" style="background: linear-gradient(135deg, ${blocColor}15, ${blocColor}05)">
                <div class="modal-badges">
                    <span class="modal-badge" style="background: ${blocColor}">
                        <span class="material-symbols-outlined">school</span>
                        ${niveauLabel}
                    </span>
                    <span class="modal-badge" style="background: rgba(107, 114, 128, 0.9)">
                        <span class="material-symbols-outlined">schedule</span>
                        ${scenario.duree}
                    </span>
                    ${scenario.entreprise ? `
                    <span class="modal-badge" style="background: rgba(147, 51, 234, 0.9)">
                        <span class="material-symbols-outlined">business</span>
                        ${escapeHtml(scenario.entreprise)}
                    </span>
                    ` : ''}
                </div>
                <h2 class="modal-title">${escapeHtml(scenario.titre)}</h2>
                <div class="modal-meta">
                    <div class="modal-author">
                        <div class="modal-author-avatar">${initials}</div>
                        <span>${escapeHtml(scenario.auteur)}</span>
                    </div>
                    <span class="modal-date">Créé le ${scenario.date}</span>
                </div>
            </div>
            
            <div class="modal-body">
                <div class="modal-section">
                    <h3><span class="material-symbols-outlined">help_outline</span> Problématique</h3>
                    <p class="modal-problematique">${escapeHtml(scenario.problematique || 'Aucune problématique définie.')}</p>
                </div>
                
                <div class="modal-section">
                    <h3><span class="material-symbols-outlined">description</span> Description</h3>
                    <p class="modal-description">${escapeHtml(scenario.description || 'Aucune description disponible.')}</p>
                </div>
                
                <div class="modal-section">
                    <h3><span class="material-symbols-outlined">theater_comedy</span> Mise en situation</h3>
                    <p class="modal-mise-en-situation">${escapeHtml(scenario.miseEnSituation || 'Aucune mise en situation définie.')}</p>
                </div>
                
                <div class="modal-section">
                    <h3><span class="material-symbols-outlined">inventory_2</span> Utilisation du magasin pédagogique</h3>
                    <p class="modal-magasin">${escapeHtml(scenario.magasinPedagogique || 'Aucune ressource du magasin pédagogique spécifiée.')}</p>
                </div>
                
                <div class="modal-section">
                    <h3><span class="material-symbols-outlined">verified</span> Compétences visées (${scenario.competences.length})</h3>
                    <div class="modal-competencies">
                        ${competencyDetails}
                    </div>
                </div>
            </div>
            
            <div class="modal-footer">
                <button class="btn btn-outline" onclick="closeModal()">Fermer</button>
                <button class="btn btn-primary" onclick="closeModal(); navigateTo('formulaire')">
                    <span class="material-symbols-outlined">add</span>
                    Créer un scénario similaire
                </button>
            </div>
        </div>
    `;
}

// Fermer la modal avec la touche Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

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
