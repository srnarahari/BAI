import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkComponent } from './artwork.component';

const routes: Routes = [
    {
        path: '', component: ArtworkComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtworkRoutingModule { }
