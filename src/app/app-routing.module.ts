import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  {
    path: 'miscellaneous',
    loadChildren: () => import('./pages/miscellaneous/miscellaneous.module')
      .then(m => m.MiscellaneousModule)
  },
  { path: 'evaluation', loadChildren: () => import('./pages/evaluation/evaluation.module').then(m => m.EvaluationModule) },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
