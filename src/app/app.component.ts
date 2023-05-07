import { Component } from '@angular/core';
import { user } from '@angular/fire/auth';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  page = 'main';

  loggedInUser?: firebase.default.User | null;



  constructor(private router: Router, private authService: AuthService ){}

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

  changePage(selectedPage: string){
    // this.page = selectedPage;
    this.router.navigateByUrl(selectedPage)
  }

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav){
    if (event === true){
      sidenav.close();
    }
  }


  logout(_?: boolean){
      this.authService.logout();/*.then(() => {
        console.log('logged out succesfully');
      }).catch(error =>{
        console.error(error);
      });*/
  }

}
