import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModuleRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { apiService } from '../../shared/services/index';
import { NgSlimScrollModule } from 'ngx-slimscroll';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgDatepickerModule } from '../../../ng-datepicker/module/ng-datepicker.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,NgSelectModule,NgbModule,HomepageModuleRoutingModule,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),HttpModule,ReactiveFormsModule,NgSlimScrollModule,NgDatepickerModule 
  ],
  declarations: [HomepageComponent],
  providers: [UserService,apiService],
})
export class HomepageModule { }
