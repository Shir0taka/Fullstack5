import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar/navbar.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy{
  userName: string = '';
  userMail: string = '';
  userPassword: string = '';

  responseRes: string = '';

  constructor(private loginService: LoginService,
    private router: Router, 
    private navbarService: NavbarService,
  ) {}
  //Auth
  authOldUser() {
    if(this.userName == '' || 
    this.userMail == '' || 
    this.userPassword == '') {
      this.responseRes = 'Fields are empty!';
    } else {
      this.loginService.authUser(this.userName, this.userMail, this.userPassword)
        .subscribe((response: any) => {
          if (response['status'] == 'success') {
            console.log('Response received: ', response);
            this.responseRes = 'User logged successfully!';
            this.router.navigate(['/home']);
          } else {
            console.log('Response received: ', response);
            this.responseRes = 'Wrong fields!';
          }
          
        }, (error) => {
          console.log('Response lost: ', error);
          this.responseRes = "Can't log in!";   
        });
    }
  }
  //Hide navbar
  ngOnInit(): void {
    this.navbarService.hide();
  }
  //Show navbar
  ngOnDestroy(): void {
    this.navbarService.display();
  }
}
