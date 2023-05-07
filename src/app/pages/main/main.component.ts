import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  loggedInUser?: firebase.default.User | null;


  constructor(private authService: AuthService) { }

  ngOnInit(){
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      console.log(user);
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }
}
