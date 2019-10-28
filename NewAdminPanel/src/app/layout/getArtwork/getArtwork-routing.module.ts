import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetArtworkComponent } from './getArtwork.component';

const routes: Routes = [
    {
        path: '',
        component: GetArtworkComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GetArtworkRoutingModule {}
