import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../modele/produit';
import { Categorie } from '../modele/categorie';
import { ProduitService } from '../share/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  listeProduit;
  produits: Produit []= [];
  categories: Categorie [] = [];
  

  constructor(private http: HttpClient,  private produitservice: ProduitService) { }

  ngOnInit() {
    /* this.http.get("http://localhost:8080/produits").
    subscribe(data=>{this.listeProduit=data;
    },error=>console.log(error)
     ) */
     this.getAllProduit()
    }


    getAllProduit() {
      this.produitservice.getAllProduit().subscribe(
        res => {
          this.produits = res;
        },
        err => {
          alert('erreur lors du chargement des produit');
        }
      );
    }

  

    deleteProduit(prods: Produit) {
      if (confirm('Etes vous sur de vouloir supprimer ce produit')) {
        this.produitservice.delete(prods.idProduit).subscribe(
          res => {
            const indexOfNotebook = this.produits.indexOf(prods);
            this.produits.splice(indexOfNotebook, 1);
          },
          err => {
            alert('supression echouée');
          }
        );
      }
    }

    
}
