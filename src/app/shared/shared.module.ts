import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [NavigationComponent, FooterComponent],
  providers: [],
  exports: [CommonModule, FormsModule, NavigationComponent, FooterComponent],
})
export class SharedModule {}
