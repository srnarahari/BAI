import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopGlobalStoriesComponent } from './top-global-stories.component';

const routes: Routes = [
    {
        path: '',
        component: TopGlobalStoriesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TopGlobalStoriesRoutingModule {}
