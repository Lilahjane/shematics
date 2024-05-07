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
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatSliderModule} from '@angular/material/slider';


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
    MatPaginatorModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatSliderModule
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
  panelOpenState = false;


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
