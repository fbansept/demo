import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  public nomApplication: string = "DEMO"

  constructor(private http: HttpClient) { }

  public listeArticle: Article[] = []

  ngOnInit() {
    this.http
      .get("http://localhost:8080/liste-article")
      .subscribe(listeArticle => this.listeArticle = listeArticle as Article[])
      //.subscribe((listeArticle : any) => this.listeArticle = listeArticle)


    // fetch("http://localhost:8080/liste-article")
    //   .then(resultat => resultat.json())
    //   .then(listeArticle => console.log(listeArticle))
  }

}
