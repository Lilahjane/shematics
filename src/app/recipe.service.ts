import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private http = inject(HttpClient);

  public getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('assets/source.json');
  }
}