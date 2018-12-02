import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../../model/Contact';
import {ContactData} from '../../model/ContactData';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'http://localhost:8080/api/v1/contacts';

  getContact(id: number): Observable<HttpResponse<Contact>> {
    return this.http.get<Contact>(this.baseUrl + '/' + id, {observe: 'response'});
  }

  createContact(user: Object): Observable<Object> {
    // const httpOptions = {
    //   headers: new HttpHeaders({'Content-Type': 'application/json'})
    // };
    return this.http.post(this.baseUrl + '/create/', user);
  }

  updateContact(id: string, value: Contact): Observable<ContactData> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put<any>(this.baseUrl + '/update/' + id, JSON.stringify(value), httpOptions);
  }

  deleteContact(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id, {responseType: 'text'});
  }

  getContactList(): Observable<HttpResponse<ContactData>> {
    return this.http.get<ContactData>(this.baseUrl, {observe: 'response'});
  }
}
