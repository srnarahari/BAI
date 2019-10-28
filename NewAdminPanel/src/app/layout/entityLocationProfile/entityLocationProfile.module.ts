import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { EntityLocationProfileRoutingModule } from './entityLocationProfile-routing.module';
import { EntityLocationProfileComponent } from './entityLocationProfile.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,NgSelectModule,NgxSpinnerModule,NgbModule,
    EntityLocationProfileRoutingModule,FormsModule,ReactiveFormsModule,FroalaEditorModule,FroalaViewModule
  ],
  declarations: [EntityLocationProfileComponent]
})
export class EntityLocationProfileModule { }
