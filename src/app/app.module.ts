import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { CharactersComponent } from './components/characters/characters.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TableCardComponent } from './shared/table-card/table-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    StudentsComponent,
    TeachersComponent,
    TableCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PipesModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
