import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-classcards',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './classcards.component.html',
  styleUrl: './classcards.component.scss'
})
export class ClasscardsComponent {

}
