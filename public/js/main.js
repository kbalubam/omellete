import{Personne, Lieu, Outil, Produits, Panier, Poele, Bol} from "./classe.js";
let maison = new Lieu("Maison", []);

let pannier1 = new Panier("pannier", []);

let pannier2 = new Panier("pannier", []);

let pannier3 = new Panier("pannier", []);

let epicerie = new Lieu ("Epicerie", [], [pannier1,pannier2,pannier3]);

let marco = new Personne("Marco", maison.nom, 100, [], []);

let couteau = new Outil ("couteau","coupé")

let oignons = new Produits("Oignons", "entier", 2);

let fromage = new Produits("Fromage", "entier", 3);

let epice = new Produits("epice", "moulu", 1);

let lait = new Produits("Lait", "liquide", 2);
 
let oeuf = new Produits("Oeufs", "entier", 3);
 

let Tefal = new Poele ( []);

let recipient = new Bol ([])



console.log(marco.lieu);
console.log(marco.nom + " est actuellement à la " + marco.lieu);
marco.seDeplacer(maison, epicerie); 
marco.mainDroite.push(pannier1.type);
// epicerie.paniers.splice(0,1); // soucis

console.log(epicerie.paniers); // soucis

console.log(`${marco.nom} a pris un  ${marco.mainDroite} dans sa main droite`);

let listeCourse = [oignons, fromage, epice, lait, oeuf];

// prises des articles dans le magasin

for (let i =0; i < listeCourse.length; i++){
    pannier1.contenu.push(listeCourse[i])
    console.log(`${marco.nom} a pris l'article : ${listeCourse[i].nom}`)
}
console.log(pannier1.contenu);

// paiement des articles

for (let j =0; j < pannier1.contenu.length; j++){
    marco.payerArticle(pannier1.contenu[j]);
}

// suppression des articles du pannier

pannier1.contenu.splice(0,pannier1.contenu.length)

console.log(`il reste ${marco.argent} euros dans le portefeuil de ${marco.nom}`);
marco.seDeplacer(epicerie, maison);

for (let k =0; k < listeCourse.length; k++){
    recipient.contenu.push(listeCourse[k]);
    console.log(`${marco.nom} a mis l'ingrédient : ${recipient.contenu[k].nom} dans le bol`)
}
console.log(recipient.contenu);
marco.seDeplacer(maison, epicerie);

//remise du panier au magasin

marco.mainDroite.splice(0,marco.mainDroite.length);

// epicerie.paniers.push(pannier1); 

console.log(`Marco a remis le panier`);

marco.seDeplacer(epicerie, maison);

console.log(`${marco.nom} est de retour à la  ${marco.lieu}`);

//decoupage des ingredients

for ( let l = 0; l < recipient.contenu.length; l++){
    if(recipient.contenu[l].etat=="entier"){
        marco.couper(recipient.contenu[l], couteau);
    }
}
 
//melange dans le bos

recipient.melanger("omelette");
Tefal.contenu.push(recipient.contenu[0]);
recipient.contenu.splice(0,recipient.contenu.length);

// cuisson 

Tefal.cuir(Tefal.contenu[0]);
console.log(Tefal.contenu);
console.log("l'omelette est cuite");
Tefal.contenu.splice(0,Tefal.contenu.length);








