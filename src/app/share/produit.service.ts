import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../modele/produit';
import { Categorie } from '../modele/categorie';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private BASE_URL = 'http://localhost:8080/produits';
  private DELETE_PRODUIt_URL = 'http://localhost:8080/produits/';
  private CATEGORIE_BASE_URL = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) { }

  delete(id: number): Observable<any> {
    return this.http.delete(this.DELETE_PRODUIt_URL + id);
  }

  saveProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.BASE_URL, produit);
  }

  getAllProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.BASE_URL);
  }

  getAllCategorie(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.CATEGORIE_BASE_URL);
  
}
}
