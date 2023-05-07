import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { FelhasznalasiHely } from '../../shared/models/FelhasznalasiHely';
import { Meroora } from '../../shared/models/Meroora';
import { User } from '../../shared/models/User';
import { MerooraService } from '../../shared/services/meroora.service';
import { FelhasznalasihelyService } from '../../shared/services/felhasznalasihely.service';

@Component({
  selector: 'app-meroorak',
  templateUrl: './meroorak.component.html',
  styleUrls: ['./meroorak.component.scss']
})
export class MeroorakComponent implements OnInit{
  user?: User;
  felhasznalasihely?: FelhasznalasiHely;


  helyek?: FelhasznalasiHely[];
  selectedHely?: FelhasznalasiHely;


  



  ngOnInit(): void {
  }

  merooraForm = new FormGroup({
    felhasznalasi_hely_azonosito: new FormControl(''),
    meroora_az: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private router: Router, private merooraService: MerooraService, private userService: UserService, private felhasznalasihelyService: FelhasznalasihelyService){}

  createForm(model: FelhasznalasiHely){
    let formGroup = this.fb.group(model);

    formGroup.get('felhasznalasi_hely_azonosito')?.addValidators([Validators.required]);
    formGroup.get('meroora_az')?.addValidators([Validators.required]);

    return formGroup;
  }

  onSubmit(){
    if(this.merooraForm.valid){
      const meroora: Meroora ={
        felhasznalasi_hely_azonosito: this.merooraForm.get('felhasznalasi_hely_azonosito')?.value as string,
        meroora_azonosito: this.merooraForm.get('meroora_az')?.value as string,
      };
      this.merooraService.create(meroora).then(_=>{
        console.log('meroora added');
        console.log(this.merooraForm.get('felhasznalasi_hely_azonosito')?.value as string);
        this.router.navigateByUrl('/main');
      }).catch(error => {
        console.error(error);
      });
    }
  }
}

