import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private _apiFaculty:ApiFacultyService) { }
  facultyModel = {
    name: '',
    url: '',
    description: '',
    id: '',
  };
  clearModel() {
    this.facultyModel = {
      name: '',
      url: '',
      description: '',
      id: '',
    };
  }
  idToUpdate = -1;

  faculties: any = [];
  ngOnInit() {
    this._apiFaculty.getAll().subscribe((res: any) => {
      this.faculties = res;
    });
  }
  insertFaculty(form: any) {
    this._apiFaculty.insertFaculty(form).subscribe((res: any) => {
      this.clearModel();
      this.ngOnInit();
    });
  }
  deleteFaculty(id: number) {
    this._apiFaculty.deleteFaculty(id).subscribe((res: any) => {
      this.ngOnInit();
    });
  }
  selectFaculty(id: number) {
    this.idToUpdate = id;
    this._apiFaculty.getById(id).subscribe((res: any) => {
      this.facultyModel = { ...res };
    });
  }
  updateFaculty(id: string) {
    this._apiFaculty
      .updateFaculty(Number(id), this.facultyModel)
      .subscribe((res:any) => {
        this.ngOnInit();
      });
  }
}
