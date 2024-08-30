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

  isplayedColumns: string[] = ['Title', 'Due_Date', 'Due_Time', 'Max_Points', 'Course', 'Assignment_Link',];

  dataSource = New ;MatTableDataSource<IT_Seniors>();

  ngOnInit(): void{
    this.service.getAllAssignments().subscribe((IT_Seniors) => {
      this.dataSource.data = IT_Seniors;
    });
  }

//   displayedColumns: string[] = ['Title', 'Due_Date', 'Due_Time', 'Max_Points', 'Course', 'Assignment_link',];
//   dataSource = ELEMENT_DATA;
// ELEMENT_DATA: any;
}


