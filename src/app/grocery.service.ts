import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from './ingredient';
import { Recipe } from './recipe';

export interface GroceryList {
  recipe_name: string;
  Ingredients: Ingredient[];
  id: number;
}

@Injectable({
  providedIn: 'root',
  
})
export class GroceryService {
  private groceryListSource = new BehaviorSubject<GroceryList[]>([]);
  currentGroceryList = this.groceryListSource.asObservable();

  additems(groceryList: GroceryList) {
    const getfood = [...this.groceryListSource.value,groceryList]
    this.groceryListSource.next(getfood);
  }
}
