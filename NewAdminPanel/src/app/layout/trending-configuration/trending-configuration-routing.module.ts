import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingConfigurationComponent } from './trending-configuration.component';

const routes: Routes = [
    {
        path: '',
        component: TrendingConfigurationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrendingConfigurationRoutingModule {}
