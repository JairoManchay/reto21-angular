import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaGetComponent } from './components/vista-get/vista-get.component';
import { CanActivateGuard } from './can-activate.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'vista', component: VistaGetComponent, canActivate:[CanActivateGuard]},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
