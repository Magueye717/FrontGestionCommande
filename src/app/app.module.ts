import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { RouterModule} from '@angular/router';
import { NavigationBarComponent } from './ux/navigation-bar/navigation-bar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CategorieComponent } from './categorie/categorie.component';



@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    CreateProduitComponent,
    NavigationBarComponent,
    CategorieComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, FormsModule,  NgSelectModule,
    RouterModule.forRoot([
      {
         path: 'ajouter-produit',
         component: CreateProduitComponent
      },
      {
        path: 'lister-produit',
        component: ProduitComponent
     },
     {
      path: 'lister-categorie',
      component: CategorieComponent
   }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
