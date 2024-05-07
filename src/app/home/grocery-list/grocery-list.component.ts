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
export class GroceryListComponent {
  // @Input() ingredients: Ingredient[] = [];

}

  //so this is me trying to come up with a way to connect grocerylist too view because the add button is supposed to display a snackbar THE ONLY THING THAT WORKS RIGHT NOW saying {{Recipe.recipe_name}} has been added which it does 
  

