import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityLocationProfileComponent } from './entityLocationProfile.component';

const routes: Routes = [
    {
        path: '', component: EntityLocationProfileComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityLocationProfileRoutingModule { }
