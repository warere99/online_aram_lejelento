import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Diktalas } from 'src/app/shared/models/Diktalas';
import { DiktalasService } from '../../shared/services/diktalas.service';

@Component({
  selector: 'app-diktalas',
  templateUrl: './diktalas.component.html',
  styleUrls: ['./diktalas.component.scss']
})
export class DiktalasComponent implements OnInit{
  ngOnInit(): void {}

  constructor(private fb: FormBuilder, private router: Router, private diktalasService: DiktalasService){}
  

  diktalasForm = new FormGroup({
    oraallas: new FormControl(''),
    meroora_azonosito: new FormControl(''),
  });

  onSubmit(){
    if(this.diktalasForm.valid){
      const diktalas: Diktalas ={
        meroora_azonosito: this.diktalasForm.get('meroora_azonosito')?.value as string,
        datum: new Date(),
        oraallas: this.diktalasForm.get('oraallas')?.value as string
      };
      this.diktalasService.create(diktalas).then(_=>{
        console.log('hely added');
        this.router.navigateByUrl('/profile');
      }).catch(error => {
        console.error(error);
      });
    }
  }
}   

