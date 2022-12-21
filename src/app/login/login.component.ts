import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Resultado } from './Resultado';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}
  email: string | undefined;
  password: string | undefined;
  login() {
    /*    console.log(this.email);
    console.log(this.password);*/

    let data = {
      user: this.email,
      password: this.password,
    };

    this.http
      /*.post('http://10.42.0.1/back/admin/login.php', data)*/
      .post('http://localhost/back/admin/login.php', data)
      .subscribe((resultado) => {
        let res: Resultado = resultado as Resultado;
        if (res.concedido === 'no') {
          alert('Error de usuario/contraseña');
        }else{

          location.href='http://localhost/php_soria/index.php';
        }
      });
  }

  ngOnInit(): void {}
}
