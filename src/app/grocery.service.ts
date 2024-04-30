import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private ingredientList = new BehaviorSubject<Ingredient[]>([]);
  public currentIngredients: Observable<Ingredient[]> = this.ingredientList.asObservable();

  constructor() { }

  addIngredients(ingredients: Ingredient[]) {
    // Logic to update the ingredient list
    this.ingredientList.next(ingredients);
  }

  // ... other methods for managing ingredients (optional)
}
