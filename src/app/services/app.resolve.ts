import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AppService } from './app.service';

@Injectable()
export class AppResolve implements Resolve<any> {
  
  constructor(private appService: AppService) {}
  
  resolve(route: ActivatedRouteSnapshot) {
    return this.appService.getContact(1);
  }
}