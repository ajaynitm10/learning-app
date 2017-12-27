import { Injectable, OnInit } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Injectable()
export class NoopInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({ headers: req.headers.set('Authorization', btoa('username:password')) });
        req = req.clone({ headers: req.headers.set('Accept', '*/*') });
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        const started = Date.now();
        return next
            .handle(req)
            .do(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    const statisticks = `Request for ${req.urlWithParams} took ${elapsed} ms.`;
                    console.log('%c LATENCY INFO !!! ', 'background: #5bc0de; color: #FFF', statisticks);
                }
            });
    }
}
