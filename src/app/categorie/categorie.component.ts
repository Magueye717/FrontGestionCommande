import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../modele/categorie';
import { ProduitService } from '../share/produit.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  listeCategorie;
  categories : Categorie[]=[];

  constructor(private produitservice:ProduitService ) { }

  ngOnInit() {
   /*  this.http.get("http://localhost:8080/categories").
    subscribe(data=>{this.listeCategorie=data;
    },error=>console.log(error)); */
    this.getAllCategories()
  }

  getAllCategories() {
    this.produitservice.getAllCategorie().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        alert('erreur lors du chargement des catégories.');
      }
    );
  }

}
