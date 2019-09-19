import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password="";
  username="";
  showSpinner=false;
  loginModel:any = {};
  constructor() { }

  ngOnInit() {
  }
  login(){

  }

}
