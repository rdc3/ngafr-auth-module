import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCodeComponent } from './auth/auth-code/auth-code.component';
import { AuthDemoComponent } from './auth/auth-demo/auth-demo.component';


const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'code',
        component: AuthCodeComponent,
        data: { num: 1 }
      },
      {
        path: 'demo',
        component: AuthDemoComponent,
        data: { num: 2 }
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/code'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
