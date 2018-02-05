import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [NavigationComponent],
  providers: [],
  exports: [CommonModule, FormsModule, NavigationComponent],
})
export class SharedModule {}
