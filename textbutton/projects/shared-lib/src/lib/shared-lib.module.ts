import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { ButtonComponent } from './button/button.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [SharedLibComponent, ButtonComponent, DisplayComponent],
  imports: [],
  exports: [SharedLibComponent, ButtonComponent, DisplayComponent],
})
export class SharedLibModule {}
