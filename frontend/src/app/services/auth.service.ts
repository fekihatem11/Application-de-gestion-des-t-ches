import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthSubject = new Subject<boolean>();
  isAuth = false;
  useridSubject  = new Subject<string>();
  // @ts-ignore
  userid :string;

  emitisAuthSubject() {
    this.isAuthSubject.next(this.isAuth);
  }
  emituseridSubject() {
    this.useridSubject.next(this.userid);
  }



  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            this.emitisAuthSubject();

            resolve(true);
          }, 2000
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
    this.emitisAuthSubject();
  }
}

