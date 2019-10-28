import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ArtworkRoutingModule } from './artwork-routing.module';
import { ArtworkComponent } from './artwork.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,NgSelectModule,NgxSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    }),
    ArtworkRoutingModule,FormsModule,ReactiveFormsModule,FroalaEditorModule,FroalaViewModule
  ],
  declarations: [ArtworkComponent]
})
export class ArtworkModule { }
