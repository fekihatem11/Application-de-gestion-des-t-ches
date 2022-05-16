import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {User} from "../../models/User.model";
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  userForm: FormGroup;
  // @ts-ignore
  erreur: String;



  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [  '', Validators.compose([
        Validators.minLength(5),
        Validators.required]) ]

    });

  }

  onSubmitForm() {
    const formValue = this.userForm.value;

   const email = formValue['email'];
   const password = formValue['password'];

    this.userService.login(email,password).subscribe(
      ( data) => {
        const obj =JSON.parse(JSON.stringify((data)))  ;
        const id = obj.id;

        this.authService.signIn().then(
          () => {
            this.authService.userid=id;
            this.authService.emituseridSubject();

            console.log('Sign in successful!');
            this.router.navigate(['home/'+id]);
          }
        );


      },
      (error) => {
        console.log('Erreur ! : ' + error);
        this.erreur='mdp ou email incorrect';

      }
    );
  }
}
