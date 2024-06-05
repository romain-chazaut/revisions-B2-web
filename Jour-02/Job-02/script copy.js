const articlesArray = [
    { id: 1, title: 'Introduction to JavaScript',
    content: 'JavaScript is a versatile programming language used for web development.',
    createdAt: new Date('2024-01-01T10:00:00Z'),
    updatedAt: new Date('2024-01-02T12:00:00Z')
    },
    { id: 2, title: 'Understanding CSS',
    content: 'CSS is used to style HTML elements and make web pages look attractive.',
    createdAt: new Date('2024-01-05T14:00:00Z'),
    updatedAt: new Date('2024-01-06T16:00:00Z')
    },
    { id: 3, title: 'Getting Started with HTML',
    content: 'HTML is the standard markup language for creating web pages.',
    createdAt: new Date('2024-01-10T09:00:00Z'),
    updatedAt: new Date('2024-01-11T11:00:00Z')
    }
];

const testDiv = document.querySelector('.test');

for (let i = 0; i < articlesArray.length; i++) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';
    articleDiv.dataset.id = articlesArray[i].id;

    const title = document.createElement('h2');
    title.textContent = articlesArray[i].title + '...';
    articleDiv.appendChild(title);

    const content = document.createElement('p');
    content.textContent = articlesArray[i].content.slice(0, 10) + '...';
    articleDiv.appendChild(content);

    articleDiv.addEventListener('click', function() {
        alert(articlesArray[i].content);
    });

    testDiv.appendChild(articleDiv);
}
