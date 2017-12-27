import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs';

let contacts = [
  { id: 1, name: 'Pascal Precht', twitter: '@PascalPrecht' },
  { id: 2, name: 'Christoph Burgdorf', twitter: '@cburgdorf' },
  { id: 3, name: 'Thomas Burleson', twitter: '@thomasburleson' },
  { id: 4, name: 'Dominic Elm', twitter: '@elmd_' }
];

@Injectable()
export class AppService {

  //private myHeaders = new HttpHeaders();
  constructor(private http: HttpClient){

  }

  getToken(): Observable<any> {
    //this.myHeaders.append('Authorization', btoa('username:password'));
    //this.myHeaders.set('Content-Type', 'application/json');
    return this.http.get('http://httpbin.org/get');
  }

  
  getContacts() {
    return Observable.create(observer => {
      observer.next(contacts);
    })
  }
  
  getContact(id) {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(contacts.find((contact) => contact.id == id))
        observer.complete();
      }, 3000);
    });
  }
}