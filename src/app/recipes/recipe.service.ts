import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('The test Recipe',
      'This is description',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
      [
        new Ingredient('meat', 5),
        new Ingredient('Sugar', 25),
      ]
    ),
    new Recipe('The another Recipe',
      'This is another description',
      'https://www.cookingclassy.com/wp-content/uploads/2019/05/fiesta-rice-recipe-7-768x1152.jpg',
      [
        new Ingredient('Potato', 50),
        new Ingredient('onion', 55)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }
  toAddIngredientToSoppinglist(ingredient: Ingredient[]) {
    this.slService.addIngredientstoList(ingredient);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
