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
        console.log("panierStock : ",JSON.parse(panierStock));  
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








