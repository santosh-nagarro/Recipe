import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
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
        new Ingredient('meat', 5),
        new Ingredient('Sugar', 25)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipe() {
    return this.recipes.slice();
  }

  toAddIngredientToSoppinglist(ingredient: Ingredient[]) {
    this.slService.addIngredientstoList(ingredient);
  }
}
