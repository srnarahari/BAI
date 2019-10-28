import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteConfigurationComponent } from './siteConfiguration.component';

const routes: Routes = [
    {
        path: '',
        component: SiteConfigurationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteConfigurationRoutingModule {}
