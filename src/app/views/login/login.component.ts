import { Component, OnInit } from '@angular/core';

import{ FormGroup, FormControl, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service'
import { loginInt } from '../../models/login.interface'
import { RespLoginModelInt } from 'src/app/models/response.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorStatus:boolean = false;
  errorMsg:any = "";
  
  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form: loginInt){
    this.api.login(form).subscribe(data =>{
      let dataResponse:RespLoginModelInt = data;
      console.log(dataResponse);
      if(dataResponse.code == 201){
        localStorage.setItem("token",dataResponse.jwt)
        this.router.navigate(['dashboard']);
      }else if(dataResponse.code == 403){
        this.errorStatus = true;
        this.errorMsg = dataResponse.messege;
      }
    });
  }

}
