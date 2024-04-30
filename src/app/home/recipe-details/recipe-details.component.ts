import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { Recipe } from '../../recipe';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Ingredient } from '../../ingredient';
import { GroceryService } from '../../grocery.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [RecipeService, GroceryService],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  private routerParams = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(RecipeService);
  private snackBar = inject(MatSnackBar);
  public recipe!: Recipe;
  public displayedColumns: string[] = ['name', 'quantity'];
  public dataSource: Ingredient[] = [];

  @Output() ingredientAddedToGroceryList = new EventEmitter<Ingredient[]>();

  ngOnInit(): void {
    this.getRouteParams();
  }

  private getRouteParams() {
    this.routerParams.params.subscribe((data) => {
      this.getRecipeById(+data['id']);
    });
  }

  private getRecipeById(id: number) {
    this.service.getAllRecipes().subscribe((recipes) => {
      this.recipe = recipes.find((x) => x.id == id) || ({} as Recipe);
      this.dataSource = this.recipe.Ingredients;
    });
  }

  public goBack() {
    this.router.navigateByUrl('/');
  }

  public goToSite() {
    window.open(this.recipe.recipe_url, '_blank');
  }

  public addIngredientsToGroceryList() {
    if (this.recipe && this.recipe.Ingredients) {
      const ingredientsToSend = this.recipe.Ingredients.slice();
      // Optional: Emit to GroceryService
      // this.groceryService.addIngredients(ingredientsToSend);

      // Emit to GroceryListComponent for potential local update
      this.ingredientAddedToGroceryList.emit(ingredientsToSend);
      this.showSnackbar();
    }
  }

  private showSnackbar() {
    const snackBarRef = this.snackBar.open(
      `${this.recipe.recipe_name} added to grocery list`,
      'Dismiss',
      {
        duration: 3000, // Milliseconds
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      }
    );
  }
}

// I want to be able to add ingredients to grocery list