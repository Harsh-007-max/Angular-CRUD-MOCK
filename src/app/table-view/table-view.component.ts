import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css',
})
export class TableViewComponent {
  constructor(private _apiFaculty:ApiFacultyService) { }
  faculties: any = [];
  ngOnInit() {
    this._apiFaculty.getAll().subscribe((res: any) => {
      this.faculties = res;
    });
  }
}
