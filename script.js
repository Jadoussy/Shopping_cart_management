// --------------------------------------------------------------------
//                 2. THEME : GESTION DU PANIER D'ACHAT
//
//          Un site d'e-commerce doit retenir la liste des 
//      articles (objets) du panier même s'il n'est pas connecté.
// --------------------------------------------------------------------

// Fonction getPanier() qui charge la liste d'articles depuis le localStorage. 
// Si rien n'existe, elle retourne un tableau vide ([]) pour éviter une erreur
function getPanier() {
    const panierStock = localStorage.getItem("myPanier");

    if (panierStock === null || localStorage.length === 0 || localStorage === null ) {
        return []; 
    } else {      
        //console.log("panierStock : ",JSON.parse(panierStock));  
        return JSON.parse(panierStock);
    }
}
getPanier(); // Appel de la fonction

// Exemple de Panier (objet) rempli par un utilisateur : 
const testpanier = [
    { id: 1, title: "chaussettes du pere noel", price: 25,  amount:1, edition:"noel-2025"   },
    { id: 2, title: "wig",                      price: 99,  amount:1, edition:"limited"     },
    { id: 3, title: "pull de noel",             price: 15,  amount:1, edition:"noel-2025"   },
    { id: 4, title: "nails de noel",            price: 5,   amount:2, edition:"noel-2025"   },
    { id: 5, title: "t shirt de noel",          price: 19,  amount:1, edition:"noel-2025"   }
];
// Mise en place de l'objet testpanier dans le LocalStorage 
localStorage.setItem("myPanier", JSON.stringify(testpanier));


// Fonction ajouterArticle(article) qui charge le panier existant,
// ajoute le nouvel article au tableau,
// puis sauvegarde le nouveau tableau (format JSON) dans le localStorage.
function ajouterArticle(article) {
    
    // Ajout du nouvel article dans tableau (reprennant le contenu du localStorage)
    let monPanierActuel = getPanier();

    // Ajout de l'article à la fin du tableau
    monPanierActuel.push(article);

    // sauvegarde le nouveau tableau converti en JSON dans le localStorage
    localStorage.setItem('myPanier', JSON.stringify(monPanierActuel));

    console.log("L'élément à bien été ajouté :",article.title); 
}
console.log("Panier avant les changements :",getPanier());

// Appel de la fonction et ajout de l'objet au myPanier
ajouterArticle( { id: 6,  title: "barbe de noel", price: 14, amount:1, edition:"noel-2025" } );

console.log("Panier après les changements :",getPanier());


// Fonction viderPanier() qui utilise localStorage.clear() pour simuler la validation de la commande
function viderPanier() {
    // Alerte sur la page avec le choix entre "OK" et "Annuler"
    let alerteValidation = confirm('Voulez vous vider votre panier ?');

    if (alerteValidation) { // Si l'utlisateur a cliqué sur OK, on vide
        localStorage.clear();
        console.log("Le panier a été vidé : myPanier",getPanier());
    }
    else { // Si l'utlisateur a cliqué sur Annuler, on fait rien
        console.log("Votre panier n'a pas été vidé");
    }
}

// Ajout du bouton avec l'évement de clic pour déclencher quand je veux la fonction viderPanier() (éviter d'avoir l'alerte confirm à chaque refresh)
const ButtonTrigger = document.getElementById("clearConfirmAlertButton");

ButtonTrigger.addEventListener("click", () => {
    viderPanier(); // Appel de la fonction
});






