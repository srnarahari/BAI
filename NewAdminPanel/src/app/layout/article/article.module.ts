import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AgmCoreModule } from '@agm/core';
import { apiService } from '../../shared/services/index';
@NgModule({
  imports: [
    CommonModule,NgSelectModule,NgxSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    }),
    ArticleRoutingModule,FormsModule,ReactiveFormsModule,FroalaEditorModule,FroalaViewModule
  ],
  providers: [apiService],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
