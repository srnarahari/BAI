import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelCityComponent } from './travel-city.component';

const routes: Routes = [
    {
        path: '',
        component: TravelCityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TravelCityRoutingModule {}
