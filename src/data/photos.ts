export interface Photo {
    id: string;
    title: string;
    description: string;
    category: 'Nature' | 'Portraits' | 'Street' | 'Travel';
    imageUrl: string;
    price: number;
    featured?: boolean;
}

export const photos: Photo[] = [
    {
        id: '1',
        title: 'Solitude in Peaks',
        description: 'A lone hiker stands atop a misty mountain peak in the Alps.',
        category: 'Nature',
        imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070',
        price: 120,
        featured: true
    },
    {
        id: '2',
        title: 'Urban Echoes',
        description: 'The late night neon lights of Tokyo reflecting in the rain.',
        category: 'Street',
        imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=2070',
        price: 85,
        featured: true
    },
    {
        id: '3',
        title: 'Gaze of Time',
        description: 'A portrait capturing the wisdom of an elderly artisan.',
        category: 'Portraits',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2070',
        price: 150,
        featured: true
    },
    {
        id: '4',
        title: 'Desert Mirage',
        description: 'Vast dunes of the Sahara at golden hour.',
        category: 'Travel',
        imageUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=2076',
        price: 95,
        featured: true
    },
    {
        id: '5',
        title: 'Emerald Forest',
        description: 'Deep morning light filtering through ancient Redwoods.',
        category: 'Nature',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2071',
        price: 110,
        featured: false
    },
    {
        id: '6',
        title: 'Hidden Alley',
        description: 'A narrow cobblestone street in Florence.',
        category: 'Travel',
        imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=2070',
        price: 75,
        featured: false
    }
];
