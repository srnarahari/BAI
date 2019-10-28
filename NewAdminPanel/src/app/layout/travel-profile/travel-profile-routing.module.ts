import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelProfileComponent } from './travel-profile.component';

const routes: Routes = [
    {
        path: '',
        component: TravelProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TravelProfileRoutingModule {}
