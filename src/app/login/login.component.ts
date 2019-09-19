import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password = "";
  username = "";
  showSpinner = false;
  loginModel: any = {};
  constructor(private _dataService: DataServiceService) { }

  ngOnInit() {
  }
  login() {
    this._dataService.getJSON().subscribe(data => {
      if (data.filter(m => m.username == this.loginModel.username && m.password === this.loginModel.password).length > 0) {
        alert('Login successfull.');
      } else {
        alert('Login failed');
      }

    });
  }

}
