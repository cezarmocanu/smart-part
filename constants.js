import { v4 as uuidv4 } from 'uuid';

export const findOne = (db, id) => {
    const entity = db.find(entity => entity.id === id);
    if (entity === undefined) {
        return {};
    }

    return entity;
};

export const ARTICLES_DB = [
    {
        id: 1,
        title: '5 Motive pentru care este importanta digitalizarea afacerii tale',
        image: '/assets/blog/radiant-phone.jpg',
        paragraphs: [
            {
                title: 'Paragraph 1',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sunt enim ipsa. Fugiat laboriosam perspiciatis atque quas facilis at voluptate ut iure labore magni, pariatur voluptatem fugit eaque, culpa soluta!'
            },
            {
                title: 'Paragraph 2',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sunt enim ipsa. Fugiat laboriosam perspiciatis atque quas facilis at voluptate ut iure labore magni, pariatur voluptatem fugit eaque, culpa soluta!'
            },
            {
                title: 'Paragraph 3',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sunt enim ipsa. Fugiat laboriosam perspiciatis atque quas facilis at voluptate ut iure labore magni, pariatur voluptatem fugit eaque, culpa soluta!'
            }
        ]
    },
    {
        id: 2,
        title: 'Alte 5 motive pentru care e important sa digitalizezi',
        image: '/assets/blog/radiant-phone.jpg',
        paragraphs: [
            {
                title: 'Paragraph 1',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sunt enim ipsa. Fugiat laboriosam perspiciatis atque quas facilis at voluptate ut iure labore magni, pariatur voluptatem fugit eaque, culpa soluta!'
            },
            {
                title: 'Paragraph 2',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sunt enim ipsa. Fugiat laboriosam perspiciatis atque quas facilis at voluptate ut iure labore magni, pariatur voluptatem fugit eaque, culpa soluta!'
            },
            {
                title: 'Paragraph 3',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sunt enim ipsa. Fugiat laboriosam perspiciatis atque quas facilis at voluptate ut iure labore magni, pariatur voluptatem fugit eaque, culpa soluta!'
            }
        ]
    }
];