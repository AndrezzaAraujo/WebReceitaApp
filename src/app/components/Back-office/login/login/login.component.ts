import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Constants } from 'src/app/Utils/constants';
import{MessageService} from 'primeng/api';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {






  user:User= {
    id: 0,
    email: "",
    DateBirth: "",
    password: "",
    isUser: true,
    isLogin: true,
    confirmPassword: "",
  };

  emailLogin;
  emailRegister;


  constructor(private userService:UserService, private route: Router, private message: MessageService) {}

  confirmPassword: string;

  ngOnInit() {
  }


  setEmail(event){
    this.user.email= event.target.value;
  }

  setDateBirth(event){
    this.user.DateBirth= event.target.value;
  }

  setPassword(event){
    this.user.password= event.target.value;
  }

  setConfirmPassword(event){
    this.confirmPassword= event.target.value;
  }


  login() {
      this.userService.login(this.user).subscribe(response=> {
      if(response != null) {
        Constants.isLogin =true;

      }else{
        this.message.add({severity:'error', summary:'Error Login', detail: 'Error Login!'});
      }

    });
  }

  register() {
    this.userService.register(this.user).subscribe(response=> {
      if(response != null) {
        this.message.add({severity:'success', summary:'Success Register', detail: 'Success Register!'});
      }else{
        this.message.add({severity:'error', summary:'Error Register', detail: 'Error Register!'});

      }

    });
  }
}
