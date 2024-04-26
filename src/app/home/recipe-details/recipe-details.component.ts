import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { Recipe } from '../../recipe';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Ingredient } from '../../ingredient';

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
