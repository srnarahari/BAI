import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicrositeArtworksComponent } from './microsite-artworks.component';

const routes: Routes = [
    {
        path: '',
        component: MicrositeArtworksComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MicrositeArtworksModuleRoutingModule {}
