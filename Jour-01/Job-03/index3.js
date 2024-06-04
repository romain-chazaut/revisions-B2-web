const articles =
[
{ titre: "Article 1", utilisateur: "user1" },
{ titre: "Article 2", utilisateur: "user2" },
{ titre: "Article 3", utilisateur: "user1" },
{ titre: "Article 4", utilisateur: "user3" },
{ titre: "Article 5", utilisateur: "user2" }
];

function myLength(toCount) {
    let i = 0;
    while (toCount[i] != null) {
      i++;
    }
    return i;
}

function tri(articles, filter, newArticles, newArticlesLength)  {
    for (let i = 0;  i < myLength(articles) ; i ++) {
        if (articles[i].utilisateur == filter) {
            newArticles[newArticlesLength] = articles[i] 
            newArticlesLength += 1
        }
    }
    return newArticlesLength
}

let newArticles = []
let newArticlesLength = 0
newArticlesLength = tri(articles, "user1", newArticles, newArticlesLength)
newArticlesLength = tri(articles, "user2", newArticles, newArticlesLength)
newArticlesLength = tri(articles, "user3", newArticles, newArticlesLength)

console.log(newArticles)