export const matches = [
    {
        type: 'upcoming',
        opponent: 'Nairobi Queens',
        competition: 'Regional Women Zone 1',
        date: 'Jan 25, 2026',
        time: '15:00',
        venue: 'Ngong Road Grounds',
        home: true,
    },
    {
        type: 'recent',
        opponent: 'KIBERA Soccer',
        competition: 'BingwaFest Nairobi',
        result: '2 - 1',
        status: 'W',
        date: 'Jan 15, 2026',
        home: false,
    },
    {
        type: 'recent',
        opponent: 'Makadara Ladies',
        competition: 'Regional Zone 1',
        result: '1 - 1',
        status: 'D',
        date: 'Jan 08, 2026',
        home: true,
    },
    {
        type: 'recent',
        opponent: 'Ulinzi Starlets',
        competition: 'Friendly',
        result: '0 - 2',
        status: 'L',
        date: 'Dec 12, 2025',
        home: false,
    },
];

export const standings = [
    { pos: 1, team: 'Vipawa Ladies FC', played: 12, won: 9, drawn: 2, lost: 1, points: 29 },
    { pos: 2, team: 'Nairobi Queens', played: 12, won: 8, drawn: 3, lost: 1, points: 27 },
    { pos: 3, team: 'Kibera Soccer', played: 11, won: 7, drawn: 2, lost: 2, points: 23 },
    { pos: 4, team: 'Makadara Ladies', played: 12, won: 6, drawn: 4, lost: 2, points: 22 },
    { pos: 5, team: 'Kayole Starlets', played: 12, won: 5, drawn: 4, lost: 3, points: 19 },
];

export const organization = {
    leadership: [
        { name: 'Sarah M.', role: 'Chairperson', image: '/images/gallery/gallery-5.jpeg' },
        { name: 'Brenda K.', role: 'Brand Ambassador', image: '/images/gallery/gallery-4.jpeg' },
    ],
    management: [
        { name: 'David O.', role: 'Technical Director', image: '/images/gallery/gallery-3.jpeg' },
    ],
    technical: [
        { name: 'Coach Juma', role: 'Head Coach', image: '/images/gallery/gallery-1.jpeg' },
        { name: 'Coach Anita', role: 'Assistant Coach', image: '/images/gallery/gallery-2.jpeg' },
    ],
    squad: [
        { id: 1, name: 'Faith N.', number: 1, position: 'GK', image: '/images/gallery/gallery-1.jpeg' },
        { id: 2, name: 'Rose A.', number: 18, position: 'GK', image: '/images/gallery/gallery-2.jpeg' },
        { id: 3, name: 'Mercy O.', number: 2, position: 'DEF', image: '/images/gallery/gallery-3.jpeg' },
        { id: 4, name: 'Alice W.', number: 4, position: 'DEF', image: '/images/gallery/gallery-4.jpeg' },
        { id: 5, name: 'Purity K.', number: 5, position: 'DEF', image: '/images/gallery/gallery-5.jpeg' },
        { id: 6, name: 'Joy M.', number: 12, position: 'DEF', image: '/images/gallery/gallery-1.jpeg' },
        { id: 7, name: 'Grace M.', number: 6, position: 'MID', image: '/images/gallery/gallery-2.jpeg' },
        { id: 8, name: 'Lilian A.', number: 8, position: 'MID', image: '/images/gallery/gallery-3.jpeg' },
        { id: 9, name: 'Beatrice N.', number: 10, position: 'MID', image: '/images/gallery/gallery-4.jpeg' },
        { id: 10, name: 'Cynthia W.', number: 14, position: 'FWD', image: '/images/gallery/gallery-5.jpeg' },
        { id: 11, name: 'Violet O.', number: 7, position: 'FWD', image: '/images/gallery/gallery-1.jpeg' },
        { id: 12, name: 'Sharon K.', number: 9, position: 'FWD', image: '/images/gallery/gallery-2.jpeg' },
        { id: 13, name: 'Esther M.', number: 11, position: 'FWD', image: '/images/gallery/gallery-3.jpeg' },
        { id: 14, name: 'Mary J.', number: 19, position: 'FWD', image: '/images/gallery/gallery-4.jpeg' },
    ]
};

export const news = [
    {
        id: 1,
        title: 'Vipawa Secures Semifinal Spot in BingwaFest Nairobi',
        category: 'Match Report',
        date: 'Jan 18, 2026',
        image: '/images/gallery/gallery-4.jpeg',
        summary: 'A thrilling 2-1 victory over Kibera Soccer sees Vipawa Ladies advance to the semis.'
    },
    {
        id: 2,
        title: 'New Scholarship Program Launched for Youth Team',
        category: 'Community',
        date: 'Jan 12, 2026',
        image: '/images/gallery/gallery-5.jpeg',
        summary: 'Partnering with local schools to ensure our players excel both on and off the pitch.'
    },
    {
        id: 3,
        title: 'Vipawa Ladies Welcomes 5 New Players',
        category: 'Transfer',
        date: 'Jan 05, 2026',
        image: '/images/gallery/gallery-2.jpeg',
        summary: 'Strengthening the squad for the second leg of the Regional Zone 1 league.'
    }
];
