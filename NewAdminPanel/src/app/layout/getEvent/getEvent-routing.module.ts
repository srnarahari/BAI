import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetEventComponent } from './getEvent.component';

const routes: Routes = [
    {
        path: '',
        component: GetEventComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GetEventRoutingModule {}
