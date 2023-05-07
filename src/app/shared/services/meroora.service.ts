import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Meroora } from '../models/Meroora';

@Injectable({
  providedIn: 'root'
})
export class MerooraService {

  collectionName = 'Meroora';

  constructor(private afs: AngularFirestore) { }


  create(meroora: Meroora){
    meroora.id = this.afs.createId();
    return this.afs.collection<Meroora>(this.collectionName).doc(meroora.id).set(meroora);
  }

  getAll(){
    return this.afs.collection<Meroora>(this.collectionName).valueChanges();
  }

  getById(id: string){
    console.log(id);
    return this.afs.collection<Meroora>(this.collectionName).doc(id).valueChanges();
  }

  update(meroora: Meroora){
    return this.afs.collection<Meroora>(this.collectionName).doc(meroora.id).set(meroora)
  }

  delete(id: string){
    return this.afs.collection<Meroora>(this.collectionName).doc(id).delete();
  }

  getByFelhasznalasihelyAz(id: string){
    console.log(id);
    return this.afs.collection<Meroora>(this.collectionName, ref => ref.where('felhasznalasi_hely_azonosito', '==', id)).valueChanges();
  }
}

