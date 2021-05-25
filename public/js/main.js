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
marco.seDeplacer(maison, epicerie); 
console.log(marco.nom + " est actuellement à la " + marco.lieu);
marco.mainDroite.push(pannier1.type);
// epicerie.paniers.splice(0,1); // soucis
console.log(marco.mainDroite);
// console.log(epicerie.paniers); // soucis
console.log(`${marco.nom} a pris un ${marco.mainDroite}`);
let listeCourse = [oignons, fromage, epice, lait, oeuf];

for (let i =0; i < listeCourse.length; i++){
    pannier1.contenu.push(listeCourse[i])
    console.log(`${marco.nom} a pris l'article : ${listeCourse[i].nom}`)
}
console.log(pannier1.contenu);
for (let j =0; j < pannier1.contenu.length; j++){
    marco.payerArticle(pannier1.contenu[j]);
   
    
}
pannier1.contenu.splice(0,pannier1.contenu.length)
console.log(marco.mainGauche);
console.log(pannier1.contenu);
console.log(`il reste ${marco.argent} euros dans le portefeuil de ${marco.nom}`);
marco.seDeplacer(epicerie, maison);

for (let k =0; k < listeCourse.length; k++){
    recipient.contenu.push(listeCourse[k]);
}
console.log(recipient.contenu);
marco.seDeplacer(maison, epicerie);
marco.mainDroite.splice(0,marco.mainDroite.length);
// epicerie.paniers.push(pannier1); 
// afficher message 
console.log(marco.mainDroite);
marco.seDeplacer(epicerie, maison);
console.log(`${marco.nom} est de retour à la  ${marco.lieu}`);

for ( let l = 0; l < recipient.contenu.length; l++){
    if(recipient.contenu[l].nom=="entier"){
        couper(recipient.contenu[l], couteau);
    }

}
recipient.melanger("omelette");
Tefal.contenu.push(recipient.contenu[0]);
console.log(Tefal.contenu);
Tefal.cuir(Tefal.contenu[0]);
console.log(Tefal.contenu);








