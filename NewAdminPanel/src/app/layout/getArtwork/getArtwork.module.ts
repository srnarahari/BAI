import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetArtworkRoutingModule } from './getArtwork-routing.module';
import { GetArtworkComponent } from './getArtwork.component';
import { HttpModule } from '@angular/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/services/user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { apiService } from '../../shared/services/index';
import { NgxSpinnerModule } from 'ngx-spinner';
import {DataFilterPipe} from "./data-filter.pipe";

@NgModule({
 imports: [
    CommonModule,NgxSpinnerModule,ReactiveFormsModule,FormsModule,GetArtworkRoutingModule,HttpModule,NgSelectModule,NgbModule.forRoot(),
  ],
  declarations: [GetArtworkComponent,DataFilterPipe],
  providers: [UserService,apiService],
  exports:[]
})
export class GetArtworkModule { }
