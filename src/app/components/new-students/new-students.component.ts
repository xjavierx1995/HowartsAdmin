import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.scss']
})
export class NewStudentsComponent implements OnInit {

  typeView: string = 'table'
  students: object[] = [];

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  getStudents(){
    // this.spinner.show();
  }
}
