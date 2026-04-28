const STORAGE = 'https://storage.yandexcloud.net/zhurzh/articles/main';

/**
 * Listing cards: `image` / `imageMobile` may differ; mobile falls back to desktop when omitted.
 */
export const articlesListing = [
    {
        id: 'whoAreThey',
        title: 'ГЛУБОКОВОДНЫЕ ВИВЕРНЫ',
        description:
            'Общая характеристика, внешность, устройство жизни, обитание.',
        image: `${STORAGE}/who%20are%20they.png`,
        imageMobile: `${STORAGE}/who%20are%20they.png`,
        path: '/articles/whoAreThey',
        textColor: '#94DFFF',
        titleGlow: '0 0 28px #0033ff',
        textAlign: 'left',
    },
    {
        id: 'physiology',
        title: 'ФИЗИОЛОГИЯ ВИВЕРН',
        description:
            'Строение тела, дыхательная система, органы чувств и психика.',
        image: `${STORAGE}/physiology.png`,
        imageMobile: `${STORAGE}/physiology.png`,
        path: '/articles/physiology',
        textColor: '#E2D4C1',
        titleGlow: '0 0 28px #FF0004',
        textAlign: 'right',
    },
    {
        id: 'reproduction',
        title: 'РАЗМНОЖЕНИЕ И СЕМЬЯ',
        description:
            'Поиск партнера, гнезда, рождение потомства, воспитание иерархий.',
        image: `${STORAGE}/reproductive.png`,
        imageMobile: `${STORAGE}/reproductive.png`,
        path: '/articles/reproduction',
        textColor: '#C3BDFF',
        titleGlow: '0 0 28px #3700FF',
        textAlign: 'left',
    },
    {
        id: 'names',
        title: 'ПРОИСХОЖДЕНИЕ ИМЕН ВИВЕРН',
        description:
            'Как виверны выбирают имя, и что оно значит для них и их культуры.',
        image: `${STORAGE}/names.png`,
        imageMobile: `${STORAGE}/names.png`,
        path: '/articles/names',
        textColor: '#E2D4C1',
        titleGlow: '0 0 28px #0051FF',
        textAlign: 'right',
    },
    {
        id: 'growth',
        title: 'ЭТАПЫ РОСТА И ВЗРОСЛЕНИЕ',
        description:
            'сколько живут виверны и что происходит на этапах взросления.',
        image: `${STORAGE}/growth.png`,
        imageMobile: `${STORAGE}/growth.png`,
        path: '/articles/growth',
        textColor: '#E2D4C1',
        titleGlow: '0 0 28px #FF0004',
        textAlign: 'left',
    },
    {
        id: 'community',
        title: 'УСТРОЙСТВО ОБЩИН ВИВЕРН',
        description:
            'структура вивернового сообщества, законы и диалекты мира.',
        image: `${STORAGE}/communities.png`,
        imageMobile: `${STORAGE}/communities.png`,
        path: '/articles/community',
        textColor: '#E2D4C1',
        titleGlow: '0 0 28px #0051FF',
        textAlign: 'right',
    },
    {
        id: 'oceanDangers',
        title: 'ОПАСНОСТИ ОКЕАНА',
        description: '[В РАЗРАБОТКЕ]',
        image: `${STORAGE}/dangerous.png`,
        imageMobile: `${STORAGE}/dangerous.png`,
        path: '/articles/ocean-dangers',
        textColor: '#E2D4C1',
        titleGlow: '0 0 28px #FF0004',
        textAlign: 'left',
    },
    {
        id: 'virpulis',
        title: 'ВИРПУЛИС И СЕКРЕТ ВИВЕРН',
        description: '[В РАЗРАБОТКЕ]',
        image: `${STORAGE}/virpulis.png`,
        imageMobile: `${STORAGE}/virpulis.png`,
        path: '/articles/virpulis',
        textColor: '#E2D4C1',
        titleGlow: '0 0 28px #FF0004',
        textAlign: 'right',
    },
];
