import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiFacultyService {
  apiURL = 'https://65ded7efff5e305f32a09deb.mockapi.io/api/users';
  constructor(private _http:HttpClient) { }
  getAll() {
    return this._http.get(this.apiURL);
  }
  getById(id: number) {
    return this._http.get(`${this.apiURL}/${id}`);
  }
  insertFaculty(form: any) {
    return this._http.post(this.apiURL, form);
  }
  deleteFaculty(id: number) {
    return this._http.delete(`${this.apiURL}/${id}`);
  }
  updateFaculty(id: number, form: any) {
    return this._http.put(`${this.apiURL}/${id}`, form);
  }
}
