import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetEntityLocationComponent } from './getEntityLocation.component';

const routes: Routes = [
    {
        path: '',
        component: GetEntityLocationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GetEntityLocationRoutingModule {}
