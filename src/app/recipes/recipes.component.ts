import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeService } from './recipe.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe;
      })
  }

}
