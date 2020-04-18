import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username: string = ''

  constructor(private router: Router, private userService: userService) { }

  ngOnInit(): void {
  }

  doSignup() {
    if (this.username.length === 0) return
    this.userService.signUp(this.username)
    this.router.navigate([`/`])
  }
}
