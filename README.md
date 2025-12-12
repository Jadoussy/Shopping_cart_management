2. Thème : Gestion du Panier d'Achat Mise en situation : Un site d'e-commerce doit retenir la liste des articles (objets) du panier même s'il n'est pas connecté.

JSON et Manipulation de Tableaux ● Ex. 1 Charger et Initialiser : Écrivez une fonction getPanier() qui charge la liste d'articles depuis le localStorage. Si rien n'existe, elle doit retourner un tableau vide ([]) pour éviter une erreur.


● Ex. 3 Vider le Panier : Créez une fonction viderPanier() qui utilise localStorage.clear() pour simuler la validation d'une commande (tout le stockage est effacé).

Promesses, Erreurs et Transactions

Préparation : Utilisez les Promesses asynchrones chargerPanierAsync() et sauvegarderPanierAsync(panier).

Simulation d'Erreur : Dans sauvegarderPanierAsync, ajoutez la condition de rejet : si le panier contient un article dont le prix est négatif, la Promesse doit reject("Erreur de prix négatif, sauvegarde annulée").

● Ex. 1 Transaction Sécurisée : Écrivez une fonction finaliserAchatAsync() qui utilise async/await et try...catch pour : 1. Charger le panier. 2. Sauvegarder le panier (appel à sauvegarderPanierAsync). 3. Si la sauvegarde réussit, effacer le panier du localStorage (avec localStorage.removeItem). 4. Afficher le succès ou l'erreur de rejet.

● Ex. 2 - Vérification et Sauvegarde : Écrivez une fonction mettreAJourArticle(id, nouvelleQte) qui : 1. Charge le panier. 2. Vérifie que la nouvelle quantité n'est pas zéro ou négative (si elle l'est, rejeter une Promesse avec Promise.reject()). 3. Si la quantité est valide, modifie l'article et sauvegarde. Tout doit être géré via async/await et try...catch.

