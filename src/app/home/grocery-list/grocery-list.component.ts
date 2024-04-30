import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { GroceryService } from '../../grocery.service';
import { Ingredient } from '../../ingredient';
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [MatListModule, MatCardModule, CommonModule],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.scss',
  providers: [GroceryService]
})
export class GroceryListComponent implements OnInit {
  @Input() ingredients: Ingredient[] = [];

  constructor(private groceryService: GroceryService) {}

    ngOnInit() {
      this.recipeDetailsComponent.ingredientAddedToGroceryList.subscribe(ingredients => {
        this.ingredients = ingredients;
      });
    }
    
  }

