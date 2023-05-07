import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'regist',
    loadChildren: () => import('./pages/regist/regist.module').then(m => m.RegistModule)
  },
  {
    path: 'diktalas',
    loadChildren: () => import('./pages/diktalas/diktalas.module').then(m => m.DiktalasModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'felhasznalasihely',
    loadChildren: () => import('./pages/felhasznalasihelyek/felhasznalasihelyek.module').then(m => m.FelhasznalasihelyekModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'meroora',
    loadChildren: () => import('./pages/meroorak/meroorak.module').then(m => m.MeroorakModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ujadat',
    loadChildren: () => import('./pages/ujadat/ujadat.module').then(m => m.UjadatModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
