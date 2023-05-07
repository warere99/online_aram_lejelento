import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { FelhasznalasihelyService } from '../../shared/services/felhasznalasihely.service';
import { Router } from '@angular/router';
import { MerooraService } from '../../shared/services/meroora.service';
import { User } from '../../shared/models/User';
import { FelhasznalasiHely } from '../../shared/models/FelhasznalasiHely';
import { Meroora } from '../../shared/models/Meroora';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DiktalasService } from '../../shared/services/diktalas.service';
import { Diktalas } from 'src/app/shared/models/Diktalas';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor( private diktalasService: DiktalasService, private route: ActivatedRoute, private router: Router, private merooraService: MerooraService, private userService: UserService, private felhasznalasihelyService: FelhasznalasihelyService){}

  user?: User;
  felhasznalasihely?: FelhasznalasiHely;
  hely?: FelhasznalasiHely;
  data: any;
  felhasznalasihely_az?: string;


  helyek?: FelhasznalasiHely[];

  meroora?: Meroora[];

  oraallas?: Diktalas[];

  ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.felhasznalasihely_az= params['id'];
  console.log(params['id']);
  
      this.merooraService.getByFelhasznalasihelyAz(this.felhasznalasihely_az as string).subscribe({
        next: (data) => {this.meroora = data;
          console.log(this.meroora);

          for(let i = 0; i < this.meroora.length; i++){
            this.diktalasService.getByMerooraAz(this.meroora[i].meroora_azonosito).subscribe({
            next: (data) => {this.oraallas = data;
              console.log(this.oraallas);
            }
            });
          }
        }
        });
  }
  )

  }

  onDelete(id: any): void{
    this.diktalasService.delete(id).then(_=>{
      console.log('törölve');
      
      //this.router.navigateByUrl('/main');
    }).catch(error => {
      console.error(error);
    });

  }

}
