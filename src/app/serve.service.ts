import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userData } from './userData';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrordialogueComponent } from './errordialogue/errordialogue.component';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
url : string ="http://localhost:300";
  constructor(private http: HttpClient, public matdialogue:MatDialog) { }
//error handler
  
  addUserData(userData: userData){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(this.url+'/userData',userData,httpOptions )

  }

  getUserDataInfo(userId: any, password: any) : Observable<any> {
    return this.http.get(this.url +'/userData', { params: { userId: userId, password: password}})
  }
  getCardData(): Observable<any>{
return this.http.get(this.url+ '/card', {responseType: 'json'})
  }
  getCardDatainfo(id: any): Observable<any>{
    return this.http.get(this.url+ '/card?id='+id, {responseType: 'json'})
      }

      //search by category
      public search = new BehaviorSubject<String>("");

      errorMethod(message: any){
this.matdialogue.open(ErrordialogueComponent,{
  width: '300px', 
  data: {
message: message
  }
})
      }
}
