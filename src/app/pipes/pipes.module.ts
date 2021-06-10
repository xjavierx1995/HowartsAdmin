import { NgModule } from '@angular/core';
import { AgePipe } from './age.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [AgePipe, FilterPipe],
  exports: [AgePipe, FilterPipe]
})
export class PipesModule { }
