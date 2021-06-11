import { NgModule } from '@angular/core';
import { AgePipe } from './age.pipe';
import { FilterPipe } from './filter.pipe';
import { SafeUrlPipe } from './safe-url.pipe';



@NgModule({
  declarations: [AgePipe, FilterPipe, SafeUrlPipe],
  exports: [AgePipe, FilterPipe, SafeUrlPipe]
})
export class PipesModule { }
