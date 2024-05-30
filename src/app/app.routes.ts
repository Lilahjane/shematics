import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NoeditComponent } from '../noedit/noedit.component';

export const routes: Routes = [
    {
        path: 'landingpage',
        component: LandingPageComponent
    },
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
      },
      {
        path: 'testing',
        component: NoeditComponent
    },
    
];
