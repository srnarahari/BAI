import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apiService } from '../../shared/services/index';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { ENgxFileUploadDirective } from '../../filinput.directive';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { FileUploadModule } from '@iplab/ngx-file-upload';
@NgModule({
    imports: [CommonModule,NgSelectModule,BrowserModule, FormsModule,ReactiveFormsModule, HttpClientModule, FormRoutingModule, PageHeaderModule,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),NgbModule],
    providers: [apiService],
    declarations: [FormComponent,ENgxFileUploadDirective, FileSelectDirective],
    exports: [ENgxFileUploadDirective ]
    

})
export class FormModule {}


