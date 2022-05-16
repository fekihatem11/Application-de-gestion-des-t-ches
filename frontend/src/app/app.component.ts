import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class  AppComponent implements OnInit{

  // @ts-ignore
  authStatusSubscription: Subscription ;
  // @ts-ignore
  authStatus: boolean ;

  // @ts-ignore
  iduserSubscription : Subscription;

  // @ts-ignore
  iduser:string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatusSubscription = this.authService.isAuthSubject.subscribe(
      (authStatus: boolean) => {
        this.authStatus= authStatus;
      }
    );

    this.iduserSubscription = this.authService.useridSubject.subscribe(
      (iduser: string) => {
        this.iduser= iduser;
      }
    );

    this.authService.emituseridSubject();


    this.authService.emitisAuthSubject();
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }
}
