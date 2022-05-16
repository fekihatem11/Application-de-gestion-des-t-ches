import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  userHome:string;


  constructor(private route: ActivatedRoute,private userService: UserService) { }

  ngOnInit(): void {

    this.getuserHome();

    const id = this.route.snapshot.params['id'];
  }

  getuserHome()   {
    this.userService.getName(this.route.snapshot.params['id']).subscribe(
      data =>{
        const obj =JSON.parse(JSON.stringify((data)))  ;
        const id = obj.username;
        this.userHome= id;
      },
      error => {
        console.log('Erreur ! : ' + error);
      }
    )







  }
}
