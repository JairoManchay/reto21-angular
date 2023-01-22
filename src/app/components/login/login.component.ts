import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private  authentication: AutenticacionService, private route: Router){}


  redireccion='';

  login(){
    this.authentication.login();
    this.redireccion = this.authentication.urlUSuarioIntentandoAcceder;
    this.authentication.urlUSuarioIntentandoAcceder = '';
    this.route.navigate([this.redireccion]);
  }
}
