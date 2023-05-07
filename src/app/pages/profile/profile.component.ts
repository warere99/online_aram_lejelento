import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';
import { FelhasznalasihelyService } from '../../shared/services/felhasznalasihely.service';
import { Router } from '@angular/router';
import { MerooraService } from '../../shared/services/meroora.service';
import { FelhasznalasiHely } from '../../shared/models/FelhasznalasiHely';
import { Meroora } from '../../shared/models/Meroora';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  user? : User;
  helyek?: FelhasznalasiHely[];

  id?: string;


  profileForm = new FormGroup({
    name: new FormControl(''  ),
    email: new FormControl(''),
    felhasznalo_azonosito: new FormControl(''),
  });

  constructor(private userService: UserService, private router: Router, private merooraService: MerooraService, private felhasznalasihelyService: FelhasznalasihelyService){}

  ngOnInit(): void {
    const user  = JSON.parse(localStorage.getItem('user') as string ) as firebase.default.User;
    
    
    //console.log(user);

    this.profileForm.get('name')?.disable();
    this.profileForm.get('email')?.disable();
    this.profileForm.get('felhasznalo_azonosito')?.disable();


    this.userService.getById(user.uid).subscribe({
      next: (data) => {this.user = data;
                      //console.log(this.user)
                      this.profileForm.get('name')?.setValue(this.user?.name as string)
                      this.profileForm.get('email')?.setValue(this.user?.email as string)
                      this.profileForm.get('felhasznalo_azonosito')?.setValue(this.user?.felhasznalo_azonosito as string)},                
      error: (error) => console.error(error),
    })

      console.log(user);
  
      this. userService.getById(user.uid).subscribe({
        next: (data) => {this.user = data;
          console.log(this.user);
          this.felhasznalasihelyService.getByFelhasznaloAz(this.user?.felhasznalo_azonosito as string).subscribe({
            next: (data) => {this.helyek = data
              console.log(this.helyek)
              for(let i = 0; i < this.helyek.length; i++){
                console.log(this.helyek[i].felhasznalasi_hely_azonosito);
                
                /*this. merooraService.getByFelhasznalasihelyAz(this.helyek[i].felhasznalasi_hely_azonosito).subscribe({
                  next: (data) => {this.helyek[i].felhasznalasi_hely_azonosito as string = data;

                  }
                  });*/

              }
              
            }
            });
          }
  
    });
  
    

  }

onButtonClick(x: string): void {
  const data =  x;
  console.log("aaaaa:"+data);
  this.router.navigate(['/list',{id:data}]);
}


}


