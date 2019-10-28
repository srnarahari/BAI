import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,NgxSpinnerModule,
    AuthorRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [AuthorComponent]
})
export class AuthorModule { }
