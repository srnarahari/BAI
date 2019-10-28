import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicrositeEditArtworkComponent } from './microsite-edit-artwork.component';

const routes: Routes = [
    {
        path: '',
        component: MicrositeEditArtworkComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MicrositeEditArtworkModuleRoutingModule {}
