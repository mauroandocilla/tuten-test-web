import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Auth} from "../models/Auth";
import {User} from "../models/User";

const TUTEN_API_SERVER = "https://dev.tuten.cl/TutenREST/rest/user/";

@Injectable({
  providedIn: 'root'
})
export class TutenService {
  constructor(private http: HttpClient) {
  }

  login(auth: Auth): Observable<any> {
    let headers = new HttpHeaders()
      .set("password", auth.pass)
      .set("app", auth.app);

    return this.http.put<User>(`${TUTEN_API_SERVER}${auth.user}`, null, {headers}).pipe(
      catchError(this.handleError)
    );
  }

  getBookings(adminEmail: string, email: string, app: string, current: boolean = true): Observable<any> {
    let headers = new HttpHeaders()
      .set("adminemail", adminEmail)
      .set("app", app);

    return this.http.get<any>(`${TUTEN_API_SERVER}${email}/bookings?current=${current}`, {headers}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `code ${error.status}, ` +
        `body: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
