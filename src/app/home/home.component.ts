import { RecipeService } from './../recipe.service';
import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Recipe,} from '../recipe';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers:[RecipeService]
})


export class HomeComponent implements OnInit {
  private service = inject(RecipeService);
  private router = inject(Router);
  private recipesPerPage: number = 12;
  private totalPages!: number;
  public recipes: Recipe[] = [];
  public visibleRecipes: Recipe[] = [];
  public activePage: number = 1;

  ngOnInit(): void {
    this.gerRecipes();
  }

  private gerRecipes(): void {
    this.service.getAllRecipes().subscribe((recipes) => {
      this.initPagination(recipes);
      this.setRecipes(recipes);
      this.setPagination();
    });
  }

  private initPagination(recipes: Recipe[]) {
    this.totalPages = Math.ceil(recipes.length / this.recipesPerPage);
  }

  private setRecipes(recipes: Recipe[]) {
    this.recipes = recipes.map((item, index) => {
      return { ...item, id: index + 1 };
    });
  }

  private setPagination() {
    const startIndex = (this.activePage - 1) * this.recipesPerPage;
    const endIndex = startIndex + this.recipesPerPage;
    this.visibleRecipes = this.recipes.slice(startIndex, endIndex);
  }

  public handlePageChange(event: any) { // Handle page change event from paginator
    this.activePage = event.pageIndex + 1; // Adjust for 1-based indexing
    this.setPagination();
  }

  public viewRecipe(recipe: Recipe) {
    this.router.navigateByUrl(`recipe-details/${recipe.id}`);
  }
}

// export class HomeComponent implements OnInit {
//   private service = inject(RecipeService);
//   private router = inject(Router);
//   private recipesPerPage: number = 12;
//   private totalPages!: number;
//   private recipes: Recipe[] = [];
//   public pages: number[] = [];
//   public activePage: number = 1;
//   public visibleRecipes: Recipe[] = [];

//   ngOnInit(): void {
//     this.gerRecipes();
//   }

//   private gerRecipes(): void {
//     this.service.getAllRecipes().subscribe((recipes) => {
//       this.initPagination(recipes);
//       this.setRecipes(recipes);
//       this.setPagination();
//     });
//   }

//   private initPagination(recipes: Recipe[]) {
//     this.totalPages = Math.ceil(recipes.length / this.recipesPerPage);
//     if (this.totalPages > 0) {
//       this.pages = [...Array(this.totalPages).keys()].map((i) => i + 1);
//     }
//   }

//   private setRecipes(recipes: Recipe[]) {
//     this.recipes = recipes.map((item, index) => {
//       return { ...item, id: index + 1 };
//     });
//   }

//   private setPagination() {
//     const paginationStart = (this.activePage - 1) * this.recipesPerPage;
//     const paginationEnd = paginationStart + this.recipesPerPage;
//     this.visibleRecipes = this.recipes.slice(paginationStart, paginationEnd);

//     this.setInvisibleGridItemsIfNeeded(paginationEnd);
//   }

//   private setInvisibleGridItemsIfNeeded(paginationEnd: number) {
//     const diff = paginationEnd - this.recipes.length;
//     if (diff > 0) {
//       for (let i = 0; i < diff; i++) {
//         this.visibleRecipes.push({ class: 'invisible' } as Recipe);
//       }
//     }
//   }

//   public goToPage(pageIndex: number) {
//     this.activePage = pageIndex;
//     this.setPagination();
//   }

//   public viewRecipe(recipe: Recipe) {
//     this.router.navigateByUrl(`recipe-details/${recipe.id}`);
//   }
// }