import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(public http: HttpClient) { }

  getTeachers(){
    return this.http.get(environment.API_URL + `characters/staff`);
  }
}
