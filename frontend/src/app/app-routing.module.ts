import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadosPageComponent } from './pages/certificados-page/certificados-page.component';
import { FramePageComponent } from './pages/frame-page/frame-page.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: SobreMimComponent },     
    ]
  },
  {
    path: 'certificados',
    component: FramePageComponent,
    children: [
      { path: '', component: CertificadosPageComponent },     
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
