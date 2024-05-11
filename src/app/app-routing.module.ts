import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/landing/landing.module').then((m) => m.LandingModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./components/item-collection-modules/basic/basic.module').then((m) => m.BasicModule)
      },
      {
        path: 'luxury',
        loadChildren: () => import('./components/item-collection-modules/luxury/luxury.module').then((m) => m.LuxuryModule)
      },
      {
        path: 'fancy',
        loadChildren: () => import('./components/item-collection-modules/fancy/fancy.module').then((m) => m.FancyModule)
      },
      {
        path: 'embroided',
        loadChildren: () => import('./components/item-collection-modules/embroided/embroided.module').then((m) => m.EmbroidedModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'access-denied',
    loadChildren: () => import('./components/access/access.module').then((m) => m.AccessModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./components/error/error.module').then((m) => m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
