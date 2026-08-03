import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about-me',
    loadComponent: () =>
      import('./features/about/about-page.component').then((m) => m.AboutPageComponent),
    title: 'About Me | Ajay Merapureddy'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about-me'
  },
  {
    path: '**',
    redirectTo: 'about-me'
  }
];
