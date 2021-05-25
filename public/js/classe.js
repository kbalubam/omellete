  export class Personne {
    constructor(nom, lieu, argent, mainDroite, mainGauche){
        this.nom=nom,
        this.lieu=lieu,
        this.argent=argent,
        this.mainDroite=mainDroite,
        this.mainGauche=mainGauche
    }
    seDeplacer = (lieuD, lieuA)=>{
        lieuD.personnes.splice(0,lieuD.length)
        lieuA.personnes.push(this);
        this.lieu=lieuA.nom;
    }
    payerArticle = (article) =>{

    }
    couper =(ingredient, outil) =>{
        ingredient.etat=outil.action
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
        setTimeout(()=> {this.contenu[0].etat}, 4000)
    }
}
 export class Bol {
     constructor(contenu) {
         this.contenu=contenu
    }
    melanger = (nomMelange) => {
        let newMelange = new Produits(nomMelange, "pas cuit");  
    }
 }


