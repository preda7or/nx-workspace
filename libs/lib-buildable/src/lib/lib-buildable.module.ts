import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Lib1ExampleComponent } from './lib1-example/lib1-example.component';

@NgModule({
  imports: [CommonModule, Lib1ExampleComponent],
  exports: [Lib1ExampleComponent],
})
export class LibBuildableModule {}
