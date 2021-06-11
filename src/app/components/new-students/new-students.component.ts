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
  students: object[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  getStudents(){
    // this.spinner.show();
  }

  newModal(){
    const dialogRef = this.dialog.open( ModalNewStudentComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result.type === 'submit') {
        this.spinner.show()

      }
    });
  }
}
