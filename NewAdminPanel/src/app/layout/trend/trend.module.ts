import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendComponent } from './trend.component';
import { TrendRoutingModule } from './trend-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { apiService } from '../../shared/services/index';
import { NgSlimScrollModule } from 'ngx-slimscroll';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgDatepickerModule } from '../../../ng-datepicker/module/ng-datepicker.module';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  imports: [
    CommonModule,NgSelectModule,TrendRoutingModule,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),HttpModule,ReactiveFormsModule,NgSlimScrollModule,NgDatepickerModule
  ],
  declarations: [TrendComponent],
   providers: [UserService,apiService],
})
export class TrendModule { }
