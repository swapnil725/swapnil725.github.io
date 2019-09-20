import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerModel: any = {};
  showSpinner = false;
  formGroup: FormGroup;
  constructor(private _dataService: DataServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      'fullName': ['', Validators.required],
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'confimPassword': ['', Validators.required],
    });
  }
  register(regModel) {
    this._dataService.getJSON().subscribe(data => {
      const user: any = {};
      user.id = data.length + 1;
      user.fullName = regModel.fullName;
      user.username = regModel.username;
      user.password = regModel.password;
      user.role = "user";
      data.push(user);
      this._dataService.writeJSON(data).subscribe(res => {
        alert(' User added in the system');
      });

    });


  }
  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      case 'fullName':
        if (this.formGroup.get('fullName').hasError('required')) {
          return 'Full name required';
        }
        break;
      case 'confimPassword':
        if (this.formGroup.get('confimPassword').hasError('required')) {
          return 'Confirm Password required';
        }
        break;
      default:
        return '';
    }
  }

}
