import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from './age.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [AgePipe, FilterPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
