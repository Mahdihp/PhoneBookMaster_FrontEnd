import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { UserData } from '../model/UserData'
import { User } from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/user';

  getUser(id: number): Observable<HttpResponse<User>> {
    return this.http.get<User>(this.baseUrl + "/" + id, { observe: 'response' });
  }
  createUser(user: Object): Observable<Object> {
    return this.http.post(this.baseUrl + "/create", user);
  }
  updateUser(id: string, value: any): Observable<UserData> {
    return this.http.put<UserData>(this.baseUrl + "/" + id, { observe: 'response' });
  }
  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/delete/" + id, { responseType: 'text' });
  }
  getUserList(): Observable<HttpResponse<UserData>> {
    return this.http.get<UserData>(this.baseUrl + "/users", { observe: 'response' });
  }

}
