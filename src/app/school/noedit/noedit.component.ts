import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { ITSenior } from '../itsenior';
import { HttpClientModule } from '@angular/common/http';
import { ITSeniorService } from '../itsenior.service';




@Component({
  selector: 'app-noedit',
  templateUrl: './noedit.component.html',
  styleUrl: './noedit.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatTableModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ITSeniorService]
})

export class NoeditComponent {
  private service = inject(ITSeniorService);
  public ITSenior: ITSenior[] = [];

  ngOnInit(): void {
    this.service.getAllAssignments().subscribe((IT_Seniors) => {
      
    }
  )}

  

//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
// ELEMENT_DATA: any;
}


