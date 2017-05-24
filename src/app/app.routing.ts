
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecuredComponent } from './secured/secured.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "secured",
    component: SecuredComponent,
    children: [
      {
        path: "my-movies",
        loadChildren: "app/peliculas/peliculas.module#PeliculasModule"
      }
    ]
  }
];

export const AppRoutes:ModuleWithProviders = RouterModule.forRoot(appRoutes);
