import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../modele/produit';
import { Categorie } from '../modele/categorie';
import { ProduitService } from '../share/produit.service';
import { CategorieComponent } from '../categorie/categorie.component';




@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {

  produit :Produit = {
      nomProduit : '',
      quantite :  null,
      prix : null,
      categorie: null,
  } 
  categorie:Categorie=new Categorie();

  listeCategorie;
  produits: Produit[]=[];
  categories:Categorie[]=[];

  constructor(private http: HttpClient, private produitservice: ProduitService) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/categories").
    subscribe(data=>{this.listeCategorie=data;
    },error=>console.log(error));
  }

  sendProduit() {
    console.log("categorie selectionné",this.produit);      
    this.produitservice.saveProduit(this.produit).subscribe(
      res => {
         location.reload()
      },
      err => {
          console.log("erreur cote serveur",err);
            }
    );
  }
  getCategorie(event){
    let cat = event.target.value;
    console.log("id categorie",event)
    this.categorie.idCategorie = cat;
    this.produit.categorie = this.categorie;
  }

}