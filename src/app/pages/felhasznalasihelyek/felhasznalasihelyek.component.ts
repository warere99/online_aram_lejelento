import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FelhasznalasiHely } from 'src/app/shared/models/FelhasznalasiHely';
import { FelhasznalasihelyService } from 'src/app/shared/services/felhasznalasihely.service';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-felhasznalasihelyek',
  templateUrl: './felhasznalasihelyek.component.html',
  styleUrls: ['./felhasznalasihelyek.component.scss']
})
export class FelhasznalasihelyekComponent implements OnInit{
  ngOnInit(): void {}

  user? : User;


  felhasznForm = new FormGroup({
    //felhasznaloi_az: new FormControl(''),
    felhasznaloihely_az: new FormControl(''),
    cim: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private router: Router, private felhasznalasihelyService: FelhasznalasihelyService, private userService: UserService){}

  createForm(model: FelhasznalasiHely){
    let formGroup = this.fb.group(model);

    formGroup.get('felhasznaloihely_az')?.addValidators([Validators.required]);
    formGroup.get('cim')?.addValidators([Validators.required]);


    return formGroup;
  }

  onSubmit(){

    const user  = JSON.parse(localStorage.getItem('user') as string ) as firebase.default.User;

    console.log(user);
    this.userService.getById(user.uid).subscribe({
      next: (data) => {this.user = data;
                      if(this.felhasznForm.valid){
                        //console.log(this.user?.felhasznalo_azonosito);
                        const felhasznalasihely: FelhasznalasiHely ={
                          felhasznalo_azonosito: this.user?.felhasznalo_azonosito as string,
                          felhasznalasi_hely_azonosito: this.felhasznForm.get('felhasznaloihely_az')?.value as string,
                          cim: this.felhasznForm.get('cim')?.value as string
                        };
                        this.felhasznalasihelyService.create(felhasznalasihely).then(_=>{
                          console.log('hely added');
                          this.router.navigateByUrl('/main');
                        }).catch(error => {
                          console.error(error);
                        });
                      }       
      },
      error: (error) => console.error(error),
    });


    
    



  }


}
