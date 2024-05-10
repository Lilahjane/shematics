import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ingredient } from './ingredient';

export interface GroceryList {
  recipeName: string;
  ingredients: Ingredient[];
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private groceryListSource = new BehaviorSubject<GroceryList | null>(null);
  currentGroceryList = this.groceryListSource.asObservable();

  // Method to emit (send) the grocery list data
  emitGroceryList(groceryList: GroceryList) {
    this.groceryListSource.next(groceryList);
  }
}
