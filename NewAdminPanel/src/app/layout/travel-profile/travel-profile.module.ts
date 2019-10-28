import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelProfileComponent } from './travel-profile.component';
import { TravelProfileRoutingModule } from './travel-profile-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { apiService } from '../../shared/services/index';
import { NgSlimScrollModule } from 'ngx-slimscroll';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgDatepickerModule } from '../../../ng-datepicker/module/ng-datepicker.module';
@NgModule({
  imports: [
    CommonModule,TravelProfileRoutingModule,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),HttpModule,ReactiveFormsModule,NgSlimScrollModule,NgDatepickerModule
  ],
  declarations: [TravelProfileComponent],
   providers: [UserService,apiService],
})
export class TravelProfileModule { }
