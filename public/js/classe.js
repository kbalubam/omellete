  export class Personne {
    constructor(nom, lieu, argent, mainDroite, mainGauche){
        this.nom=nom,
        this.lieu=lieu,
        this.argent=argent,
        this.mainDroite=mainDroite,
        this.mainGauche=mainGauche
    }
    seDeplacer = (lieuD, lieuA)=>{
        lieuD.personnes.splice(0,1)
        lieuA.personnes.push(this);
        this.lieu=lieuA.nom;
    }
    payerArticle = (article) =>{
        this.argent-=article.prix;
    }
    couper =(ingredient, outil) =>{
       if(ingredient.etat=="entier" && ingredient.nom!=="Oeufs"){
        ingredient.etat=outil.action  
       } 
    }
}

 export class Lieu {
    constructor(nom,personnes){
        this.nom=nom,
        this.personnes=personnes
    }
}

 export class Epicerie extends Lieu{
    constructor(nom, personnes, paniers) {
        super(nom, personnes),
        this.paniers=paniers
    }
 }

export class Panier {
    constructor(type, contenu){
        this.type=type,
        this.contenu=contenu
    }
} 

export class Outil {
    constructor(nom,action){
        this.nom=nom,
        this.action=action
       
    }
    
}

 export class Produits {
    constructor(nom, etat, prix ){
        this.nom=nom,
        this.etat=etat,
        this.prix=prix
    }
}

export class Poele {
    constructor(contenu) {
        this.contenu=contenu
    }
    cuir = ()=>{
        setTimeout(()=> {this.contenu[0].etat="cuit"}, 4000)
        
    }
}
 export class Bol {
     constructor(contenu) {
         this.contenu=contenu
    }
    melanger = (nomMelange) => {
        let newMelange = new Produits(nomMelange, "pas cuit");
        console.log(`apres avoir melangé le tout nous avons le debut d'une ${newMelange.nom}`);
        this.contenu.splice(0,this.contenu.length);
        this.contenu.push(newMelange); 
        
    }
 }
 


