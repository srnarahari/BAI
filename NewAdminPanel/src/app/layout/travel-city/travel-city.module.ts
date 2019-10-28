import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelCityRoutingModule } from './travel-city-routing.module';
import { TravelCityComponent } from './travel-city.component';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { apiService } from '../../shared/services/index';
import { NgSlimScrollModule } from 'ngx-slimscroll';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgDatepickerModule } from '../../../ng-datepicker/module/ng-datepicker.module';

@NgModule({
  imports: [
    CommonModule,TravelCityRoutingModule,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),HttpModule,ReactiveFormsModule,NgSlimScrollModule,NgDatepickerModule
  ],
  declarations: [TravelCityComponent],
  providers: [UserService,apiService],
})
export class TravelCityModule { }
