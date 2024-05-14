import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  userName: string = '';
  userMail: string = '';
  userPassword: string = '';

  responseRes: string = '';

  constructor(private registerService: RegisterService) {}

  regNewUser() {
    if(this.userName == '' || 
    this.userMail == '' || 
    this.userPassword == '') {
      this.responseRes = 'Fields are empty!';
    } else {
      this.registerService.regUser(this.userName, this.userMail, this.userPassword)
      .subscribe((response) => {
        console.log('Response received: ', response);
        this.responseRes = 'User added successfully!';
      }, (error) => {
        console.log('Response lost: ', error);
        this.responseRes = 'User failed to add!';   
      });
    }
  }

  ngOnInit(): void {
      
  }
}
