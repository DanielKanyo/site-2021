export const NAVIGATION_ITEMS = ['home', 'about me', 'skills', 'projects', 'hobbies', 'contact'];

export const SOCIALS = {
    GITHUB: 'github',
    TWITTER: 'twitter',
    FACEBOOK: 'facebook',
    INSTAGRAM: 'instagram'
};

export const SOCIAL_LINKS = [
    {
        id: SOCIALS.GITHUB,
        url: 'https://github.com/DanielKanyo'
    },
    {
        id: SOCIALS.TWITTER,
        url: 'https://twitter.com/DanielKanyo'
    },
    {
        id: SOCIALS.FACEBOOK,
        url: 'https://www.facebook.com/kanyo.daniel'
    },
    {
        id: SOCIALS.INSTAGRAM,
        url: 'https://www.instagram.com/daniel_kanyo/?hl=hu'
    },
];

export const SKILL_CATEGORIES = {
    BACKEND: 'backend',
    FRONTEND: 'frontend',
    OTHER: 'other'
};

export const SKILLS = [
    {
        category: SKILL_CATEGORIES.BACKEND,
        items: [
            {
                name: 'Java',
                level: 90
            },
            {
                name: 'Spring Boot',
                level: 90
            },
            {
                name: 'Node.js',
                level: 40
            },
            {
                name: 'Firebase',
                level: 80
            },
            {
                name: 'Php',
                level: 20
            }
        ]
    },
    {
        category: SKILL_CATEGORIES.FRONTEND,
        items: [
            {
                name: 'HTML5',
                level: 95
            },
            {
                name: 'CSS3',
                level: 95
            },
            {
                name: 'Java Script',
                level: 90
            },
            {
                name: 'Angular',
                level: 85
            },
            {
                name: 'React.js',
                level: 75
            },
            {
                name: 'Polymer',
                level: 85
            },
            {
                name: 'd3.js',
                level: 50
            },
            {
                name: 'Three.js',
                level: 10
            },
            {
                name: 'Redux',
                level: 60
            },
            {
                name: 'JQuery',
                level: 85
            },
            {
                name: 'React Native',
                level: 45
            },
            {
                name: 'Bootstrap',
                level: 90
            }
        ]
    },
    {
        category: SKILL_CATEGORIES.OTHER,
        items: [
            {
                name: 'Linux',
                level: 60
            },
            {
                name: 'Git',
                level: 70
            },
            {
                name: 'Adobe Photoshop',
                level: 90
            },
            {
                name: 'MongoDB',
                level: 10
            },
            {
                name: 'Docker',
                level: 10
            },
            {
                name: 'Jenkins',
                level: 30
            },
            {
                name: 'UX',
                level: 90
            },
            {
                name: 'Non-Smoking'
            },
            {
                name: 'Driving Licence',
                level: 100
            }
        ]
    }
];