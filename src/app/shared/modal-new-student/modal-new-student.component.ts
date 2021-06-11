import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-modal-new-student',
  templateUrl: './modal-new-student.component.html',
  styleUrls: ['./modal-new-student.component.scss']
})
export class ModalNewStudentComponent implements OnInit {

  validations_form: FormGroup;
  validation_messages = {
    'name': [
      { type: 'required', message: 'Este campo es requerido.' },
      { type: 'maxlength', message: 'No debe ser mayor a 255 caracteres.' },
     ],
    'patronus': [
     { type: 'required', message: 'Este campo es requerido.' },
     { type: 'maxlength', message: 'No debe ser mayor a 255 caracteres.' },
    ],
    'birthDay': [
     { type: 'required', message: 'Este campo es requerido.' },
     { type: 'maxlength', message: 'No debe ser mayor a 255 caracteres.' },
    ],
    'image': [
     { type: 'required', message: 'Este campo es requerido.' }
    ]
  };

  img: any = "https://images.squarespace-cdn.com/content/v1/54bdbaa8e4b06fad9ba682ed/1501533847974-588ZUA6ZEW2M734U2C4B/ke17ZwdGBToddI8pDm48kEO3Xd74g0bqvk55M9KUV357gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmEZprBMNaW6dUYQUrCwR2cS0Aly4N5B3QpIFZ53UruWiU8Sr9h4jG1LHLXD3lG8IY/harry+potter+avatar+for+web-01-01.jpg?format=2500w"
  fileImg: any;
  constructor(
    public dialogRef: MatDialogRef<ModalNewStudentComponent>,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.validations();
  }

  validations(){
    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(255),
      ])),
      patronus: new FormControl('', Validators.compose([
        // Validators.required,
        // Validators.maxLength(255),
      ])),
      birthDay: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(255),
      ])),
      image: new FormControl('', Validators.compose([
        Validators.required
      ])),

    });
  }

  register(form){
    form.type = 'submit';
    form.params = {
      name: form.name,
      patronus: form.patronus,
      image: this.img,
      dateOfBirth: moment(form.birthDay).format('DD-MM-yyyy')
    }
    this.dialogRef.close(form);
  }

  onNoClick(): void {
    let form = {
      type: 'close'
    };
    this.dialogRef.close(form);
  }

  onFileUpdate(e){
    let file = e.target.files[0];
    let _this = this;
    var reader = new FileReader();
    reader.onload = function(e) {
      _this.img = reader.result;
    }
    reader.readAsDataURL(file);
  }
}
