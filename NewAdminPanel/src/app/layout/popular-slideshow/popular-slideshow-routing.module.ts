import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularSlideshowComponent } from './popular-slideshow.component';

const routes: Routes = [
    {
        path: '',
        component: PopularSlideshowComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PopularSlideShowRoutingModule {}
