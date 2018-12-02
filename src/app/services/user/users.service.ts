import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserData} from '../../model/UserData';
import {User} from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  private baseUrl = 'http://localhost:8080/api/v1/users';

  getUser(id: number): Observable<HttpResponse<User>> {
    return this.http.get<User>(this.baseUrl + '/' + id, {observe: 'response'});
  }

  createUser(user: Object): Observable<Object> {
    // const httpOptions = {
    //   headers: new HttpHeaders({'Content-Type': 'application/json'})
    // };
    return this.http.post(this.baseUrl + '/create/', user);
  }

  updateUser(id: string, value: User): Observable<UserData> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put<any>(this.baseUrl + '/update/' + id, JSON.stringify(value), httpOptions);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id, {responseType: 'text'});
  }

  getUserList(): Observable<HttpResponse<UserData>> {
    return this.http.get<UserData>(this.baseUrl , {observe: 'response'});
  }

}
