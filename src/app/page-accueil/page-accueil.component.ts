import { Component } from '@angular/core';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent {

  public nomApplication: string = "DEMO"

  public listeArticle: Article[] = [
    {
      titre: "Article 1",
      contenu: "Contenu article 1",
      auteur: "Franck"
    },
    {
      titre: "Article 2",
      contenu: "Contenu article 2"
    },
    {
      titre: "Article 3",
      contenu: "Contenu article 3"
    },

  ]

  onClickBouton(): void {
    this.nomApplication = "Autre nom"
  }

}
