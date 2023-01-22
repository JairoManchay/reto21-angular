import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { VistaGetComponent } from './vista-get/vista-get.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    VistaGetComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    LoginComponent,
    MenuComponent,
    VistaGetComponent
  ]
})
export class ComponentsModule { }
