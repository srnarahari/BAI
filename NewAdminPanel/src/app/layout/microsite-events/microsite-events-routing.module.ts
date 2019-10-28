import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicrositeEventsComponent } from './microsite-events.component';

const routes: Routes = [
    {
        path: '',
        component: MicrositeEventsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MicrositeEventsModuleRoutingModule {}
