import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  showAlert = false
  alertMsg = 'Please wait! Your Account is being created.'
  alertColor = 'blue'

  login(){
    this.showAlert=true
    this.alertMsg = 'Please wait! Your are in logging.'
    this.alertColor = 'blue'
    console.log(this.credentials)
  }

}
