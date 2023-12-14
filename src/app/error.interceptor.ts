// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { Observable, catchError, throwError } from 'rxjs';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {


//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
//    return next.handle(request).pipe(
//     catchError((error:HttpErrorResponse)=>{
//       let errorMessage :any= '';
//       console.log(error.error)
//       if (error.error instanceof ErrorEvent) {
//         console.log(error.error);
//         errorMessage = error.error.message
//       }
//       else {
//         errorMessage = error.error.message
//       return throwError(() => new Error(errorMessage));
//     }
//   }))
   
//   }
// }
