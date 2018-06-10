import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 
import { Usuario} from '../../modelos/usuario';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class UsuarioService {

    private usuariosUrl = 'http://localhost:8084/ServidorCafetera/proyectoCafetera/Usuario';
    constructor(private http: HttpClient) { }
 
    getAll() {
        return this.http.get<Usuario[]>('/api/usuarios');
    }
 
    getById(id: number) {
        return this.http.get('/api/usuarios/' + id);
    }
 
    create(Usuario: Usuario) {
        return this.http.post<Usuario>(this.usuariosUrl, Usuario, httpOptions).pipe(
            tap((Usuario: Usuario)  => this.log(`added hero w/ id=${Usuario.idUsuario}`)),
            catchError(this.handleError<Usuario>('createUsuario'))
        );
    }
    /*
    update(Usuario: Usuario) {
        return this.http.put('/api/usuarios/' + Usuario.idUsuario, Usuario);
    }
    */
   
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
    };
}

private log(message: string) {
    console.log(message);
}
 
    delete(id: number) {
        return this.http.delete('/api/usuarios/' + id);
    }



    

}