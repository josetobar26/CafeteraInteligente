import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Usuario } from '../../modelos/usuario';
import 'rxjs/add/operator/map'


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class AuthServiceProvider {

  currentUser:Usuario;
  private usuariosUrl = 'http://localhost:8084/ServidorCafetera/proyectoCafetera/Usuario';
  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }
  public login(credentials) {
    const  url = `${this.usuariosUrl}/autentificacion`;
    return this.http.post<any>(url, credentials,httpOptions)
    .map(usuario => {
        // login successful if there's a jwt token in the response
        if (usuario) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(usuario));
        }

        return usuario;
    }); 
  }
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
  public getUserInfo() : Usuario {
    return this.currentUser;
  }
 
  public logout() {
  
      localStorage.removeItem('currentUser');
 
  }

}
