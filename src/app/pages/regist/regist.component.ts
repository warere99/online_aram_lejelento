import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent implements OnInit{

  registForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    felhasznalo_azonosito: new FormControl(''),
    
  });
    


  
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private userService: UserService){}
  ngOnInit():void{}

  createForm(model: User){
    let formGroup = this.fb.group(model);

    formGroup.get('name')?.addValidators([Validators.required]);
    formGroup.get('email')?.addValidators([Validators.required]);
    formGroup.get('password')?.addValidators([Validators.required, Validators.minLength(8)]);
    formGroup.get('felhasznalo_azonosito')?.addValidators([Validators.required]);
    return formGroup;
  }

  onSubmit(){
    if(this.registForm.valid){
      this.authService.regist(this.registForm.get('email')?.value as string, this.registForm.get('password')?.value as string).then(cred =>{
        console.log(cred);
        const user: User ={
          id: cred.user?.uid as string,
          name: this.registForm.get('name')?.value as string,
          email: this.registForm.get('email')?.value as string,
          felhasznalo_azonosito: this.registForm.get('felhasznalo_azonosito')?.value as string
        };
        this.userService.create(user).then(_=>{
          //console.log('user added');
          this.router.navigateByUrl('/main');
        }).catch(error => {
          console.error(error);
        });
      }).catch(error => {
        console.error(error);
      });

      
    }
  }
}
