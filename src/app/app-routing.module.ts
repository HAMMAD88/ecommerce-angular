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
