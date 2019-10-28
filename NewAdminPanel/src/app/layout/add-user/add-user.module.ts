import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './../../shared/services/user.service';
import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './add-user.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,
    AddUserRoutingModule,NgxSpinnerModule
  ],
  providers: [UserService],
  declarations: [AddUserComponent]
})
export class AddUserModule { }

