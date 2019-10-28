import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-update-routing.module';
import { AccountUpdateComponent } from './account-update.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

@NgModule({
  imports: [
    CommonModule,AccountRoutingModule,FormsModule,ReactiveFormsModule,PasswordStrengthMeterModule
  ],
  providers: [UserService],
  declarations: [AccountUpdateComponent]
})
export class AccountUpdateModule { }
