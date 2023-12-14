import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userData } from './userData';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
url : string ="http://localhost:3000";
  constructor(private http: HttpClient) { }
//error handler
  errorHandler(error: HttpErrorResponse): any{
    // let errorMessage='';
    // if(error.error instanceof ErrorEvent){
      
    //   //client side error
    //   errorMessage = Error: ${error.error.message};
    //   window.alert(errorMessage);
    // }
    // else{
    //   errorMessage =Error: ${error.status}\nMessage${error.message} ;
    //   window.alert(errorMessage);
    // }
throwError(error)
  }

  addUserData(userData: userData){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(this.url+'/userData',userData,httpOptions )

  }

  getUserDataInfo(userId: any, password: any) : Observable<any> {
    return this.http.get(this.url +'/userData', { params: { userId: userId, password: password}, responseType: 'json'}, ).pipe(catchError(this.errorHandler))
  }
  getCardData(): Observable<any>{
return this.http.get(this.url+ '/card', {responseType: 'json'}).pipe(catchError(this.errorHandler))
  }
  getCardDatainfo(id: any): Observable<any>{
    return this.http.get(this.url+ '/card?id='+id, {responseType: 'json'})
      }

      //search by category
      public search = new BehaviorSubject<String>("");
}
