import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { NoeditComponent } from '../noedit/noedit.component';
import { ClassesComponent } from '../classes/classes.component';

@Component({
  selector: 'app-edu',
  standalone: true,
  imports: [MatTabsModule,
    NoeditComponent,
    ClassesComponent
  ],
  templateUrl: './edu.component.html',
  styleUrl: './edu.component.scss'
})
export class EduComponent {

}



