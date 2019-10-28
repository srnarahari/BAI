import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountUpdateComponent } from './account-update.component';

const routes: Routes = [
    {
        path: '', component: AccountUpdateComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
