import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared/guard/auth.guard';
import { ArticleComponent } from './article/article.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { AuthorComponent } from './author/author.component';
import { EntityLocationProfileComponent } from './entityLocationProfile/entityLocationProfile.component';
import { EventsComponent } from './events/events.component';
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
import { FormComponent } from './form/form.component';
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
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
 // { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: '',
        component: LayoutComponent,
        children: [
           { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule',canActivate: [AuthGuard] },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule',canActivate: [AuthGuard] },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule',canActivate: [AuthGuard] },
            { path: 'forms', component:FormComponent,canActivate: [AuthGuard] },
            { path: 'forms/:articleId', component:FormComponent ,canActivate: [AuthGuard] },
            { path: 'author', component:AuthorComponent ,canActivate: [AuthGuard] },
            { path: 'artist', component:ArticleComponent, canActivate: [AuthGuard] },
            { path: 'artist/:artistId', component:ArticleComponent, canActivate: [AuthGuard] },
            { path: 'get-artist', component:GetArtistComponent,canActivate: [AuthGuard] },
            { path: 'artwork', component:ArtworkComponent, canActivate: [AuthGuard] },
            { path: 'artwork/:artworkId', component:ArtworkComponent ,canActivate: [AuthGuard] },
            { path: 'administration', component:AdministrationComponent,canActivate: [AuthGuard],data: { role: ['admin'] } },
            { path: 'getarticles', component:GetarticlesComponent,canActivate: [AuthGuard]},
            { path: 'account-update', loadChildren: './account-update/account-update.module#AccountUpdateModule',canActivate: [AuthGuard] },
            { path: 'events',component:EventsComponent ,canActivate: [AuthGuard] },
            { path: 'events/:eventId', component:EventsComponent ,canActivate: [AuthGuard] },
            { path: 'travel-city',component:TravelCityComponent ,canActivate: [AuthGuard] },
            { path: 'travel-profile', component:TravelProfileComponent,canActivate: [AuthGuard] },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule',canActivate: [AuthGuard] },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule',canActivate: [AuthGuard] },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule',canActivate: [AuthGuard] },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule',canActivate: [AuthGuard] },
            { path: 'entity-Location', component:EntityLocationProfileComponent ,canActivate: [AuthGuard] },
            { path: 'entity-Location/:EntityId', component:EntityLocationProfileComponent ,canActivate: [AuthGuard] },
            { path: 'slide-show', component:SlideShowComponent ,canActivate: [AuthGuard] },
            { path: 'slide-show/:slideShowId', component:SlideShowComponent ,canActivate: [AuthGuard] },
            { path: 'get-slide-show', component:GetSlideShowComponent ,canActivate: [AuthGuard] },
            { path: 'site-configuration', component:SiteConfigurationComponent ,canActivate: [AuthGuard] },
            { path: 'trend', component:TrendComponent ,canActivate: [AuthGuard] },
            { path: 'trending-configuration', component:TrendingConfigurationComponent ,canActivate: [AuthGuard] },
            { path: 'popular-slideshow', component:PopularSlideshowComponent ,canActivate: [AuthGuard] },
            { path: 'top-global-stories', component:TopGlobalStoriesComponent ,canActivate: [AuthGuard] },
            { path: 'features', component:FeaturesComponent ,canActivate: [AuthGuard] },
            { path: 'getArtwork', component:GetArtworkComponent ,canActivate: [AuthGuard]},
            { path: 'getEntityLocation', component:GetEntityLocationComponent ,canActivate: [AuthGuard]},
            { path: 'getEvent', component:GetEventComponent ,canActivate: [AuthGuard]},
            { path: 'microsite-events/:micrositeEventId', component:MicrositeEventsComponent, canActivate: [AuthGuard] },

            { path: 'microsite', component:MicrositeComponent,canActivate: [AuthGuard]},
            { path: 'microsite-events', component:MicrositeEventsComponent,canActivate: [AuthGuard]},
            { path: 'microsite-artworks', component:MicrositeArtworksComponent,canActivate: [AuthGuard]},
            { path: 'microsite-artworks/:micrositeArtworkId', component:MicrositeArtworksComponent ,canActivate: [AuthGuard] },
            { path: 'microsite-edit', component:MicrositeEditComponent ,canActivate: [AuthGuard]},
            { path: 'microsite-edit-artwork', component:MicrositeEditArtworkComponent,canActivate: [AuthGuard]},
            { path: 'microsite-edit-events', component:MicrositeEditEventsComponent,canActivate: [AuthGuard]},
            { path: 'homepage', component:HomepageComponent,canActivate: [AuthGuard]},
            { path: 'add-user', component:AddUserComponent,canActivate: [AuthGuard]},
       
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
