import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    public snack: MatSnackBar,
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
    this.snack.open('Solicitud registrada con exito', 'ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000
    })
  }

  editStudent(item){
    const dialogRef = this.dialog.open( ModalNewStudentComponent, {
      width: '400px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result.type === 'submit') {
        this.spinner.show()
        this.updateStudent(result);
      }
    });

  }
  deleteStudent(item){
    this.students.splice(item.index, 1);
    localStorage.setItem('students', JSON.stringify(this.students));
    this.getStudents();
    this.snack.open('Solicitud eliminada con exito', 'ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000
    })
  }

  updateStudent(item){
    this.students[item.index] = item.params;
    localStorage.setItem('students', JSON.stringify(this.students));
    this.getStudents();
    this.spinner.hide();
    this.snack.open('Solicitud editada con exito', 'ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000
    })

  }
}
