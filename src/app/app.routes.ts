import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeDetailsComponent } from './home/recipe-details/recipe-details.component';
import { GroceryListComponent } from './home/grocery-list/grocery-list.component';

export const routes: Routes = [
    {
        path: 'grocery-list',
        component: GroceryListComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'recipe-details/:id',
        component: RecipeDetailsComponent,
      }
    
];
