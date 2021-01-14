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
        items: ['Java', 'Spring Boot', 'Node.js', 'Firebase', 'Php']
    },
    {
        category: SKILL_CATEGORIES.FRONTEND,
        items: ['HTML5', 'CSS3', 'Java Script', 'Angular', 'React.js', 'Polymer', 'd3.js', 'Three.js', 'Redux', 'JQuery', 'React Native', 'Bootstrap']
    },
    {
        category: SKILL_CATEGORIES.OTHER,
        items: ['Linux', 'Git', 'MongoDB', 'Docker', 'Jenkins', 'UX', 'Non-Smoking', 'Driving Licence']
    }
];