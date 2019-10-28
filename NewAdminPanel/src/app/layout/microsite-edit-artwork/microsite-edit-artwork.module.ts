import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicrositeEditArtworkModuleRoutingModule } from './microsite-edit-artwork-routing.module';
import { MicrositeEditArtworkComponent } from './microsite-edit-artwork.component';
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
    CommonModule,NgSelectModule,MicrositeEditArtworkModuleRoutingModule,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),HttpModule,ReactiveFormsModule,NgSlimScrollModule,NgDatepickerModule 
  ],
  declarations: [MicrositeEditArtworkComponent],
  providers: [UserService,apiService],
})
export class MicrositeEditArtworkModule { }
