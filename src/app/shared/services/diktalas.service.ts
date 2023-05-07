import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Diktalas } from '../models/Diktalas';

@Injectable({
  providedIn: 'root'
})
export class DiktalasService {

  collectionName = 'Diktalas';

  constructor(private afs: AngularFirestore) { }

  create(diktalas: Diktalas){
    diktalas.id = this.afs.createId();
    return this.afs.collection<Diktalas>(this.collectionName).doc(diktalas.id).set(diktalas);
  }

  getAll(){
    return this.afs.collection<Diktalas>(this.collectionName).valueChanges();
  }

  getById(id: string){
    console.log(id);
    return this.afs.collection<Diktalas>(this.collectionName).doc(id).valueChanges();
  }

  update(diktalas: Diktalas){
    return this.afs.collection<Diktalas>(this.collectionName).doc(diktalas.id).set(diktalas)
  }

  delete(id: string){
    console.log(id);
    return this.afs.collection<Diktalas>(this.collectionName).doc(id).delete();
  }

  getByMerooraAz(id: string){
      console.log(id);
      return this.afs.collection<Diktalas>(this.collectionName, ref => ref.where('meroora_azonosito', '==', id)).valueChanges();
    }


}

  
