import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "../services/storage.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public storage: StorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storage.getAuth()?.sessionTokenBck;

    const headersConfig: any = {
      'Accept': 'application/json'
    };

    if (token) {
      headersConfig["token"] = `${token}`;
    }

    request = request.clone({setHeaders: headersConfig});
    return next.handle(request);
  }
}
