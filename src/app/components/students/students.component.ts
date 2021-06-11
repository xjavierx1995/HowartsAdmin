import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  typeView: string = 'table'
  students: object[] = [];

  constructor(
    private studentService: StudentService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.spinner.show();
    this.studentService.getStudents().subscribe((res: object[]) => {
      this.spinner.hide();
      this.students = res;
    });

  }

}
