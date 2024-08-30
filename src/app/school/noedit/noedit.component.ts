import { Component, inject, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ITSenior } from '../itsenior';
import { HttpClientModule } from '@angular/common/http';
import { ITSeniorService } from '../itsenior.service';

@Component({
  selector: 'app-noedit',
  templateUrl: './noedit.component.html',
  styleUrls: ['./noedit.component.scss'],  // Fixed the typo from 'styleUrl' to 'styleUrls'
  standalone: true,
  imports: [
    AsyncPipe,
    MatTableModule,
    MatPaginatorModule,  // Import the MatPaginatorModule
    CommonModule,
    HttpClientModule
  ],
  providers: [ITSeniorService]
})
export class NoeditComponent implements OnInit, AfterViewInit {
  private service = inject(ITSeniorService);

  displayedColumns: string[] = ['Title', 'Due_Date', 'Due_Time', 'Max_Points', 'Course', 'Assignment_Link'];
  dataSource = new MatTableDataSource<ITSenior>();

  // ViewChild to access the paginator component
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    // Fetch data from service and assign it to the data source
    this.service.getAllAssignments().subscribe((IT_Seniors) => {
      this.dataSource.data = IT_Seniors;
    });
  }

  ngAfterViewInit(): void {
    // Assign the paginator to the MatTableDataSource after view initialization
    this.dataSource.paginator = this.paginator;
  }
}
