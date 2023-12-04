import { IntregavelComponent } from './intregavel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
// Remove the duplicate import statement
// import { IntregavelComponent } from './intregavel.component';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'colors',
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors',
        },
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography',
        },
      },
      {
        path: 'intregavel',
        component: IntregavelComponent,
        data: {
          title: 'intregavel',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
