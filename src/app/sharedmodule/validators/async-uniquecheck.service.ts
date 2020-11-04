import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApplicationError, BadRequestError, ConflictError, InternalServerError } from '../global errors/applicationerrors';

@Injectable({
  providedIn: 'root'
})
export class AsyncUniquecheckService {
  constructor(private http: HttpClient) { }
  uniqueNameCheck(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      const obj = {uniqueID: control.value};
      const $response = this.http.post('https://vinayakatradergroup.herokuapp.com/authentication/signup/uniquecheck', obj, {responseType: 'text'});
      return $response.pipe(map((response) => {
        // console.log(response);
        if (response.includes('200')) { return null; }
      }), catchError((error) => {
          if (error instanceof BadRequestError) { return of({uniqueID: 'duplicateID'}); }
          if (error instanceof ConflictError) { return of({uniqueID: 'duplicateID'}); }
          if (error instanceof InternalServerError) { return of({serverError: 'serverError'}); }
          if (error instanceof ApplicationError) { return of({serverError: 'serverError'}); }
      }));
    };
  }

}
