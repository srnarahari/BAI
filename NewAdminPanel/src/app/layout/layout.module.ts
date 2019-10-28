import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserService } from './../shared/services/user.service';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpModule } from '@angular/http';
import { AuthGuard } from '../shared';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { ArticleComponent } from './article/article.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { AuthorComponent } from './author/author.component';
import { EntityLocationProfileComponent } from './entityLocationProfile/entityLocationProfile.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgDatepickerModule } from '../../ng-datepicker/module/ng-datepicker.module';
import { EventsComponent } from './events/events.component';
import { NgSlimScrollModule } from 'ngx-slimscroll';
import { GetEventComponent } from './getEvent/getEvent.component';
import { GetArtworkComponent } from './getArtwork/getArtwork.component';
import { GetEntityLocationComponent } from './getEntityLocation/getEntityLocation.component';
import { GetarticlesComponent } from './getarticles/getarticles.component';
import { FeaturesComponent } from './features/features.component';
import { TopGlobalStoriesComponent } from './top-global-stories/top-global-stories.component';
import { PopularSlideshowComponent } from './popular-slideshow/popular-slideshow.component';
import { TrendingConfigurationComponent } from './trending-configuration/trending-configuration.component';
import { TrendComponent } from './trend/trend.component';
import { SiteConfigurationComponent } from './siteConfiguration/siteConfiguration.component';
import { SlideShowComponent } from './slideShow/slideShow.component';
import { DataFilterPipe } from './top-global-stories/data-filter.pipe';
import {DataTableModule} from "angular-6-datatable";
import { FileSelectDirective } from 'ng2-file-upload';
import { ENgxFileUploadDirective } from './../filinput.directive';
import { FormComponent } from './form/form.component';
import { PageHeaderModule } from './../shared';
import { AdministrationComponent } from './administration/administration.component';
import { TravelCityComponent } from './travel-city/travel-city.component';
import { TravelProfileComponent } from './travel-profile/travel-profile.component';

import { MicrositeComponent } from './microsite/microsite.component';
import { MicrositeArtworksComponent } from './microsite-artworks/microsite-artworks.component';
import { MicrositeEventsComponent } from './microsite-events/microsite-events.component';
import { MicrositeEditComponent } from "./microsite-edit/microsite-edit.component";
import { MicrositeEditArtworkComponent } from "./microsite-edit-artwork/microsite-edit-artwork.component";
import { MicrositeEditEventsComponent } from "./microsite-edit-events/microsite-edit-events.component";
import { GetArtistComponent } from './get-artist/get-artist.component';
import { GetSlideShowComponent } from './get-slide-show/get-slide-show.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AgmCoreModule } from '@agm/core';
import { AddUserComponent } from './add-user/add-user.component';
import { ArticleFilterPipe } from "./getarticles/data-filter.pipe";

@NgModule({
    imports: [
        CommonModule, HttpModule, DataTableModule,
        CKEditorModule,
        NgbModule,
        FormsModule, ReactiveFormsModule,
        LayoutRoutingModule, NgxSpinnerModule,
        TranslateModule,
        FroalaEditorModule, FroalaViewModule,
        NgbDropdownModule.forRoot(),
        NgSelectModule, NgDatepickerModule,
        NgSlimScrollModule,
        PageHeaderModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC6aKiYyUj_ZhKNKZ856PyCzcBh-hDXodU',
            libraries: ["places"]
          }),

    ],

    providers:[AuthGuard,UserService],
    declarations: [LayoutComponent,
        MicrositeComponent,
        MicrositeArtworksComponent,
        MicrositeEventsComponent,
        MicrositeEditComponent,
        MicrositeEditArtworkComponent,
        MicrositeEditEventsComponent,
        TravelCityComponent,
        TravelProfileComponent,
        AdministrationComponent,
        FormComponent,
        TopGlobalStoriesComponent,
        PopularSlideshowComponent,
        TrendingConfigurationComponent,
        TrendComponent,
        SiteConfigurationComponent,
        SlideShowComponent,
        GetarticlesComponent,
        FeaturesComponent,
        GetEntityLocationComponent,
        GetArtworkComponent,
        GetEventComponent,
        SidebarComponent,
        HeaderComponent,
        ArticleComponent,
        ArtworkComponent,
        AuthorComponent,
        EntityLocationProfileComponent,
        EventsComponent, DataFilterPipe,
        FileSelectDirective,
        ENgxFileUploadDirective,
        GetArtistComponent,
        GetSlideShowComponent,
        HomepageComponent,
        AddUserComponent, ArticleFilterPipe],
    entryComponents:[
        FormComponent
    ]
})
export class LayoutModule {}
