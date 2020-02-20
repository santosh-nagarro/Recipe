import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChange = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5)
  ];

  constructor() { }

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChange.emit(this.ingredients.slice());
  }
  addIngredientstoList(ingd: Ingredient[]) {
    // for (let ing of ingd) {
    //   this.addIngredients(ing);
    // }

    this.ingredients.push(...ingd);
    this.ingredientChange.emit(this.ingredients.slice())
  }

}
