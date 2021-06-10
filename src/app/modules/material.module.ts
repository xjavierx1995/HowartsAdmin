import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTableModule,
    MatInputModule,
    MatCardModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTableModule,
    MatInputModule,
    MatCardModule
  ]
})
export class MaterialModule { }
