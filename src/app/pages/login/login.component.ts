  import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  
  email = new FormControl('');
  password = new FormControl('');
  

  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(private router: Router, private loadingService: LoadingService, private authService: AuthService){}
  ngOnInit():void{}

  async login(){
    this.authService.login(this.email.value as string, this.password.value as string).then(cred =>{
        console.log(cred);
        this.router.navigateByUrl('/profile');
        this.loading = false;

    }).catch(error => {
        console.error(error);
        this.loading = false;
    });

  } 

}
