import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TandilautomotoresAboutComponent } from './tandilautomotores-about/tandilautomotores-about.component';
import { TandilautomotoresRepuestosComponent } from './tandilautomotores-repuestos/tandilautomotores-repuestos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repuestos',
    pathMatch:'full'
  },
  {
    path: 'repuestos',
    component: TandilautomotoresRepuestosComponent
  },
  {
    path: 'about',
    component: TandilautomotoresAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
