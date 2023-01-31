import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-edition-article',
  templateUrl: './page-edition-article.component.html',
  styleUrls: ['./page-edition-article.component.scss']
})
export class PageEditionArticleComponent {

  public formArticle: FormGroup = this.formBuilder.group(
    {
      "titre": ["", [Validators.required]],

      "auteur": ["", [Validators.maxLength(50)]],

      "contenu": ["", [Validators.required]]
    })

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  onSubmit(): void {

    if (this.formArticle?.valid) {
      alert("Le formulaire a été envoyé...")
      this.router.navigateByUrl("/accueil")
    }
  }
}
