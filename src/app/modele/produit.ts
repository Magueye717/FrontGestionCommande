import { Categorie } from "./categorie";

  export interface Produit {
    idProduit?: number
    nomProduit : string
    quantite : number
    prix : number
    categorie?: Categorie;
  }