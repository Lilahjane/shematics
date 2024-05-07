import { Component, OnInit, inject } from '@angular/core';
//unsure
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
//unsure
import { RecipeService } from '../../recipe.service';
//RecipService is how my app is able to use my json
import { MatTableModule } from '@angular/material/table';
//displays ingredients as table
import { HttpClientModule } from '@angular/common/http';
//unsure what this does
import { Recipe } from '../../recipe';
//interface
import { CommonModule } from '@angular/common';
//unsure
import { MatButtonModule } from '@angular/material/button';
//mat component
import { Ingredient } from '../../ingredient';
//interface

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
  providers: [RecipeService],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss',
})
export class RecipeDetailsComponent implements OnInit {
  private routerParams = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(RecipeService);
  public recipe!: Recipe;
  public displayedColumns: string[] = ['name', 'quantity'];
  public dataSource: Ingredient[] = [];

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
      const allRecipes = recipes.map((item, index) => {
        return { ...item, id: index + 1 };
      });
      this.recipe = allRecipes.find((x) => x.id == id) || ({} as Recipe);
      this.dataSource = this.recipe.Ingredients;
    });
  }

  public goBack() {
    this.router.navigateByUrl('/');
  }

  public goToSite() {
    window.open(this.recipe.recipe_url, '_blank');
  }
}