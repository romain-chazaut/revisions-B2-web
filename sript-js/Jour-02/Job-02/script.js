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
    ]

    for (let i = 0; i < articlesArray.length; i++) {
        const testDiv = document.querySelector('.test')
        testDiv.innerHTML = ''
        const user = document.createElement('h1')
        user.textContent = userArray[i].firstname + ' ' + userArray[i].lastName
        user.className = userArray[i].isActive ? 'active' : 'inactive'
        let maxContent = articlesArray[i].content.slice(0, 10);
        console.log(maxContent);
        console.log(articlesArray[i].createdAt, articlesArray[i].updatedAt);
        testDiv.appendChild(user)
    }
    
    const openPopup = (content) => {
        alert(content);
    };

    const articleClickHandler = (article) => {
        openPopup(article.content);
    };

    articles.forEach((article) => {
        article.addEventListener('click', () => {
            const articleId = article.dataset.id;
            const selectedArticle = articlesArray.find((article) => article.id === parseInt(articleId));
            articleClickHandler(selectedArticle);
        });
    });


    const articles = document.querySelectorAll('.article');
    


