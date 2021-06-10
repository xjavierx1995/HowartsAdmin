import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  typeView: string = 'table'
  teachers: object[] = [];

  constructor(
    private teacherService: TeacherService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(){
    this.spinner.show();
    this.teacherService.getTeachers().subscribe((res: object[]) => {
      this.spinner.hide();
      this.teachers = res;
    });

  }

}
