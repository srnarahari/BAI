import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicrositeEditEventsComponent } from './microsite-edit-events.component';

const routes: Routes = [
    {
        path: '',
        component: MicrositeEditEventsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MicrositeEventsModuleRoutingModule {}
