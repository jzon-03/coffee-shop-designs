import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Coffee1HomeComponent } from './coffee-template-1/components/coffee-1-home/coffee-1-home.component';
import { Coffee2HomeComponent } from './coffee-template-2/components/coffee-2-home/coffee-2-home.component';
import { Coffee3HomeComponent } from './coffee-template-3/components/coffee-3-home/coffee-3-home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'coffee-template-1', pathMatch: 'full'
  },
  {
    path: 'coffee-template-1', component: Coffee1HomeComponent
  },
  {
    path: 'coffee-template-2', component: Coffee2HomeComponent
  },
  {
    path: 'coffee-template-3', component: Coffee3HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
