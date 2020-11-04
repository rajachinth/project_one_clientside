import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class  UserService {
  constructor(private http: HttpClient) { }

  getDefaultUserService() {
    return this.http.get('https://vinayakatradergroup.herokuapp.com/authentication/login/defaultUser', {responseType: 'text'});
  }

  userSignupService(signupData) {
    // console.log(signupData);
    return this.http.post('https://vinayakatradergroup.herokuapp.com/authentication/signup', signupData, {responseType: 'text'});
  }
  userPostService(loginData) {
    return this.http.post('https://vinayakatradergroup.herokuapp.com/authentication/login', loginData, {responseType: 'text'});
  }
  userQueriesService(queryData) {
    return this.http.post('https://vinayakatradergroup.herokuapp.com/userqueries', queryData, {responseType: 'text'});
  }
}
