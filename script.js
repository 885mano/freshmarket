function acheter(produit) {
    let confirmation = confirm("Voulez-vous acheter " + produit + " ?");
    
    if (confirmation) {
        alert("Commande envoyée !");
    }
}