import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChange = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChange.next(this.ingredients.slice());
  }
  addIngredientstoList(ingd: Ingredient[]) {
    // for (let ing of ingd) {
    //   this.addIngredients(ingd);
    // }

    this.ingredients.push(...ingd);
    this.ingredientChange.next(this.ingredients.slice());
  }

}
