import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetarticlesComponent } from './getarticles.component';

const routes: Routes = [
    {
        path: '',
        component: GetarticlesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GetArticlesRoutingModule {}
