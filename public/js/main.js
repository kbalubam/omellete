import{Personne, Lieu, Outil, Produits, Panier} from "./classe.js";
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

let lait = new Produits("Lait", "entier", 2);
 
let oeuf = new Produits("Oeufs", "entier", 3);





console.log(marco.lieu);
marco.seDeplacer(maison, epicerie); 
console.log(marco.nom + " est actuellement à la " + marco.lieu);
marco.mainDroite.push(pannier1.type);
// epicerie.paniers.splice(0,1);
console.log(marco.mainDroite);
console.log(epicerie.paniers);
console.log(`${marco.nom} a pris un ${marco.mainDroite}`);
let listeCourse = [oignons.nom, fromages.nom, epice.nom, lait.nom, oeuf.nom];

for (let i =0; i < listeCourse.length; i++){
    listeCourse
}







