import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FelhasznalasiHely } from '../models/FelhasznalasiHely';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class FelhasznalasihelyService {

  collectionName = 'FelhasznalasiHely';
  user?: User;

  constructor(private afs: AngularFirestore) { }

  create(felhasznalasihely: FelhasznalasiHely){
    felhasznalasihely.id = this.afs.createId();
    return this.afs.collection<FelhasznalasiHely>(this.collectionName).doc(felhasznalasihely.id).set(felhasznalasihely);
  }

  getAll(){
    return this.afs.collection<FelhasznalasiHely>(this.collectionName).valueChanges();
  }

  getById(id: string){
    console.log(id);
    return this.afs.collection<FelhasznalasiHely>(this.collectionName).doc(id).valueChanges();
  }

  getByFelhasznaloAz(id: string){
    console.log(id);
    return this.afs.collection<FelhasznalasiHely>(this.collectionName, ref => ref.where('felhasznalo_azonosito', '==', id)).valueChanges();
  }

  update(felhasznalasihely: FelhasznalasiHely){
    return this.afs.collection<FelhasznalasiHely>(this.collectionName).doc(felhasznalasihely.id).set(felhasznalasihely)
  }

  delete(id: string){
    return this.afs.collection<FelhasznalasiHely>(this.collectionName).doc(id).delete();
  }

}
