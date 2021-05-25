import{Personne, Lieu, Outil, Produits, Panier, Poele, Bol, Epicerie} from "./classe.js";
let maison = new Lieu("Maison", []);

let pannier1 = new Panier("pannier1", []);

let pannier2 = new Panier("pannier2", []);

let pannier3 = new Panier("pannier3", []);

let epicerie = new Epicerie ("Epicerie", [], [pannier1,pannier2,pannier3]);

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

console.log(epicerie);
epicerie.paniers.splice(0,1); 



console.log(`${marco.nom} a pris un  ${marco.mainDroite} dans sa main droite`);

let listeCourse = [oignons, fromage, epice, lait, oeuf];

// prises des articles dans le magasin

for (let i = 0; i < listeCourse.length; i++){
    pannier1.contenu.push(listeCourse[i])
    console.log(`${marco.nom} a pris l'article : ${listeCourse[i].nom}`)
}
console.log(pannier1.contenu);

// paiement des articles

for (let j =0; j < pannier1.contenu.length; j++){
    marco.payerArticle(pannier1.contenu[j]);
}
console.log(`Il reste à ${marco.nom} la somme de ${marco.argent} euros`);

// suppression des articles du pannier

pannier1.contenu.splice(0,pannier1.contenu.length)

console.log(`il reste ${marco.argent} euros dans le portefeuil de ${marco.nom}`);

//rentrer à la maison cuisiner

marco.seDeplacer(epicerie, maison);
console.log(epicerie);
console.log(maison);
 
//mise dans le bol

for (let k =0; k < listeCourse.length; k++){
    recipient.contenu.push(listeCourse[k]);
    console.log(`${marco.nom} a mis l'ingrédient : ${recipient.contenu[k].nom} dans le bol`)
}



//remise du panier au magasin

marco.seDeplacer(maison, epicerie);

console.log(`${marco.nom} retourne a l'${marco.lieu} pour remttre le panier qu'il a oublié`);

marco.mainDroite.splice(0,marco.mainDroite.length);

epicerie.paniers.push(pannier1); 

// rentre à nouveau chez lui 

marco.seDeplacer(epicerie, maison);

console.log(`${marco.nom} est à nouveau à la ${marco.lieu}`);

//decoupage des ingredients

for ( let l = 0; l < recipient.contenu.length; l++){
    if(recipient.contenu[l].etat=="entier"){
        marco.couper(recipient.contenu[l], couteau);
    }
}

 
//melange dans le bos

 recipient.melanger("omelette");
 console.log(recipient);
 Tefal.contenu.push(recipient.contenu[0]);
 recipient.contenu.splice(0,recipient.contenu.length);

// cuisson 

 Tefal.cuir(Tefal.contenu[0]);
 console.log(Tefal.contenu);
 console.log("apres un temps de cuisson de 5 min  notre omelette est cuite");









