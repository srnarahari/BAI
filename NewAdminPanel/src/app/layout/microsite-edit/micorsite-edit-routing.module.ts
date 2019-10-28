import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicrositeEditComponent } from './microsite-edit.component';

const routes: Routes = [
    {
        path: '',
        component: MicrositeEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MicrositeEditModuleRoutingModule {}
