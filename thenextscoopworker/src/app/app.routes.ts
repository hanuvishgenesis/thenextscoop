import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'ice-creams',
    loadComponent: () => import('./pages/ice-creams/ice-creams').then((m) => m.IceCreams),
  },
  {
    path: 'shakes',
    loadComponent: () => import('./pages/shakes/shakes').then((m) => m.Shakes),
  },
  {
    path: 'mojitos',
    loadComponent: () => import('./pages/mojitos/mojitos').then((m) => m.Mojitos),
  },
  {
    path: 'cakes',
    loadComponent: () => import('./pages/cakes/cakes').then((m) => m.Cakes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
