import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { GroceryService } from '../grocery.service';
import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [MatListModule, MatCardModule, CommonModule, JsonPipe],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.scss',
})


export class GroceryListComponent {
  public serviceG = inject(GroceryService);

}

 
