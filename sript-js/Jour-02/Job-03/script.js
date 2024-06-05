const articles = [
  { titre: "Article 1", utilisateur: "user1" },
  { titre: "Article 2", utilisateur: "user2" },
  { titre: "Article 3", utilisateur: "user1" },
  { titre: "Article 4", utilisateur: "user3" },
  { titre: "Article 5", utilisateur: "user2" }
];

// Fonction pour compter la longueur d'un tableau
function myLength(toCount) {
  let i = 0;
  while (toCount[i] != null) { // Continue tant que l'élément à l'index i n'est pas null
      i++;
  }
  return i; // Retourne la longueur du tableau
}

// Fonction pour trier les articles par utilisateur et les ajouter à newArticles
function tri(articles, filter, newArticles, newArticlesLength) {
  for (let i = 0; i < myLength(articles); i++) { // Parcourt chaque article
      if (articles[i].utilisateur == filter) { // Vérifie si l'utilisateur de l'article correspond au filtre
          newArticles[newArticlesLength] = articles[i]; // Ajoute l'article filtré à newArticles
          newArticlesLength += 1; // Incrémente la longueur de newArticles
      }
  }
  return newArticlesLength; // Retourne la nouvelle longueur de newArticles
}

let newArticles = []; // Tableau pour stocker les articles triés
let newArticlesLength = 0; // Longueur de newArticles
let users = []; // Tableau pour stocker les utilisateurs uniques

// Parcourt chaque article pour identifier les utilisateurs uniques
articles.forEach(article => {
  if (!users.includes(article.utilisateur)) { // Si l'utilisateur n'est pas déjà dans users
      users.push(article.utilisateur); // Ajoute l'utilisateur à users
  }
});

// Trie les articles par utilisateur
users.forEach(user => {
  newArticlesLength = tri(articles, user, newArticles, newArticlesLength); // Trie les articles pour chaque utilisateur et met à jour newArticles
});

console.log(newArticles); // Affiche les articles triés
console.log(users); // Affiche la liste des utilisateurs uniques

// Attend que le DOM soit chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", () => {
  const userList = document.querySelector(".user-list"); // Sélectionne l'élément qui contiendra la liste des utilisateurs
  const articleList = document.querySelector(".article-list"); // Sélectionne l'élément qui contiendra la liste des articles

  // Crée un élément div pour chaque utilisateur
  users.forEach(user => {
      const userItem = document.createElement("div"); // Crée un div pour l'utilisateur
      userItem.classList.add("user-item"); // Ajoute une classe au div
      userItem.innerHTML = user; // Met le nom de l'utilisateur dans le div
      userItem.addEventListener("click", () => toggle(user)); // Ajoute un gestionnaire d'événements pour le clic
      userList.appendChild(userItem); // Ajoute le div à la liste des utilisateurs
  });

  // Crée un élément div pour chaque article
  articles.forEach(article => {
      const articleItem = document.createElement("div"); // Crée un div pour l'article
      articleItem.classList.add("article-item"); // Ajoute une classe au div
      articleItem.classList.add(article.utilisateur); // Ajoute une classe spécifique à l'utilisateur de l'article
      articleItem.innerHTML = article.titre; // Met le titre de l'article dans le div
      articleItem.style.display = "none"; // Masque l'article par défaut
      articleList.appendChild(articleItem); // Ajoute le div à la liste des articles
  });
});

// Fonction pour afficher/masquer les articles d'un utilisateur spécifique
function toggle(user) {
  const articles = document.querySelectorAll(`.article-item.${user}`); // Sélectionne tous les articles de l'utilisateur
  articles.forEach(article => { // Parcourt chaque article
      if (article.style.display === "none") { // Si l'article est masqué
          article.style.display = "block"; // Affiche l'article
      } else { // Sinon
          article.style.display = "none"; // Masque l'article
      }
  });
}
