import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  public nomApplication: string = "DEMO"

  public listeArticle: Article[] = []

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.http
      .get("http://localhost:8080/liste-article")
      .subscribe(listeArticle => this.listeArticle = listeArticle as Article[])
    //.subscribe((listeArticle : any) => this.listeArticle = listeArticle)


    // fetch("http://localhost:8080/liste-article")
    //   .then(resultat => resultat.json())
    //   .then(listeArticle => console.log(listeArticle))
  }

  onClickDeleteArticle(idArticle: number | undefined): void {
    if (idArticle != undefined) {

      if (confirm("Voulez-vous vraiment supprimer cet article")) {
        this.http.delete("http://localhost:8080/article/" + idArticle)
          .subscribe({
            next: (article: any) => {

              this.snackBar.open(
                'L\'article "' + article.titre + '" a bien été supprimé',
                "OK",
                {
                  duration: 5000
                })

              this.refresh()
            },
            error: resultat => alert("Erreur")
          })
      }
    }
  }

}
