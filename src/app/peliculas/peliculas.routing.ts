
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
import { PeliculasCreateComponent } from './components/peliculas-create/peliculas-create.component';

const routes: Routes = [
  { path: "",
    children: [
      {
        path: "",
        component: PeliculasListComponent
      },
      {
        path: "create",
        component: PeliculasCreateComponent
      }
    ]

  },
];

export const PeliculasRoutes: ModuleWithProviders = RouterModule.forChild(routes);
