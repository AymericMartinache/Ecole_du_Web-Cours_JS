const projects = [
    {
        number: 1,
        name: 'Application Prêt Bancaire',
        icon: '💰',
        description:
            'Calculateur de prêt avec simulation des mensualités et coûts totaux',
        folder: '1.Application-pret-bancaire',
    },
    {
        number: 2,
        name: 'Application Météo',
        icon: '🌤️',
        description:
            'Consultation de la météo en temps réel via API avec géolocalisation',
        folder: '2.Application-meteo',
    },
    {
        number: 3,
        name: 'Quizz',
        icon: '❓',
        description:
            'Jeu de questions-réponses interactif avec score et chronomètre',
        folder: '3.Quizz',
    },
    {
        number: 4,
        name: 'WikiApp',
        icon: '📚',
        description:
            'Moteur de recherche Wikipedia avec affichage des résultats',
        folder: '4.WikiApp',
    },
    {
        number: 5,
        name: 'Cookies',
        icon: '🍪',
        description:
            'Gestion des cookies avec bannière de consentement personnalisable',
        folder: '5.Cookies',
    },
    {
        number: 6,
        name: 'Générateur de Dégradés',
        icon: '🎨',
        description:
            'Créateur de dégradés CSS avec aperçu en direct et copie du code',
        folder: '6.Generateur-de-degrades',
    },
    {
        number: 7,
        name: 'Slider',
        icon: '🖼️',
        description:
            "Carrousel d'images avec navigation automatique et manuelle",
        folder: '7.Slider',
    },
    {
        number: 8,
        name: 'Validation Formulaire',
        icon: '✅',
        description:
            "Formulaire avec validation en temps réel et messages d'erreur",
        folder: '8.Validation-formulaire',
    },
    {
        number: 9,
        name: 'Jeu des Cartes Mémoires',
        icon: '🃏',
        description: 'Memory game avec cartes à retourner et compteur de coups',
        folder: '9.Jeu-des-cartes-memoires',
    },
    {
        number: 10,
        name: 'Scroll Infini',
        icon: '♾️',
        description: 'Chargement dynamique de contenu au défilement de la page',
        folder: '10.Scroll-infini',
    },
    {
        number: 11,
        name: 'Pomodoro',
        icon: '⏲️',
        description: 'Timer de productivité avec sessions de travail et pauses',
        folder: '11.Pomodoro',
    },
    {
        number: 12,
        name: 'Générateur de Mot de Passe',
        icon: '🔐',
        description:
            'Création de mots de passe sécurisés avec options personnalisables',
        folder: '12.Generateur-de-mot-de-passe',
    },
    {
        number: 13,
        name: 'Liste Filtrable',
        icon: '📋',
        description: "Liste d'éléments avec recherche et filtres en temps réel",
        folder: '13.Liste-filtrable',
    },
    {
        number: 14,
        name: 'Lecteur Vidéo',
        icon: '🎬',
        description:
            'Lecteur vidéo personnalisé avec contrôles et barre de progression',
        folder: '14.Lecteur-video',
    },
    {
        number: 15,
        name: 'Jeu du Morpion',
        icon: '⭕',
        description:
            'Tic-tac-toe classique pour deux joueurs avec détection de victoire',
        folder: '15.Jeu-du-morpion',
    },
    {
        number: 16,
        name: 'Particules',
        icon: '✨',
        description:
            'Animation de particules sur canvas avec effets interactifs',
        folder: '16.Particules',
    },
    {
        number: 17,
        name: 'Animations',
        icon: '🎭',
        description:
            "Galerie d'animations CSS et JavaScript avec effets visuels",
        folder: '17.Animations',
    },
    {
        number: 18,
        name: 'Typing Game',
        icon: '⌨️',
        description:
            'Jeu de vitesse de frappe avec chronomètre et score de précision',
        folder: '18.TypingGame',
    },
    {
        number: 19,
        name: 'Lecteur Audio',
        icon: '🎵',
        description:
            'Lecteur de musique avec playlist et contrôles personnalisés',
        folder: '19.Lecteur-audio',
    },
    {
        number: 20,
        name: 'Calculatrice',
        icon: '🔢',
        description:
            'Calculatrice fonctionnelle avec opérations mathématiques de base',
        folder: '20.Calculatrice',
    },
];

function createProjectCard(project, index) {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = `./${project.folder}/1.Essai/index.html`;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
        <div class="project-header">
            <div class="project-icon">${project.icon}</div>
            <div class="project-number">Projet ${project.number
                .toString()
                .padStart(2, '0')}</div>
        </div>
        <div class="project-content">
            <h2 class="project-title">${project.name}</h2>
            <p class="project-description">${project.description}</p>
        </div>
        <div class="project-footer">
            <span class="project-link">Découvrir</span>
            <span class="project-arrow">→</span>
        </div>
    `;

    return card;
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    projects.forEach((project, index) => {
        const card = createProjectCard(project, index);
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderProjects);
