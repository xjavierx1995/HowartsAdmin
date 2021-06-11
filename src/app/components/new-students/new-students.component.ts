import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalNewStudentComponent } from 'src/app/shared/modal-new-student/modal-new-student.component';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.scss']
})
export class NewStudentsComponent implements OnInit {

  typeView: string = 'table'
  students: any[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getStudents()
  }

  getStudents(){
    this.spinner.show();

    let studentStorage: any = JSON.parse(localStorage.getItem('students'));
    this.students = studentStorage ? studentStorage : this.students;
    this.spinner.hide();
  }

  newModal(){
    const dialogRef = this.dialog.open( ModalNewStudentComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result.type === 'submit') {
        this.spinner.show()
        this.storeStudents(result.params);
      }
    });
  }

  storeStudents(params){
    this.students.push(params);
    localStorage.setItem('students', JSON.stringify(this.students));
    this.getStudents();
    this.spinner.hide();
  }
}
