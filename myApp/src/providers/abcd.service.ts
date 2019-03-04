import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AbcdService {

  constructor(private fdb: AngularFireDatabase) { }
  Add(list) {
    
    this.fdb.list('todolist').push(list);
  }


  findAll() {
    console.log("Find all");
  return this.fdb.list('todolist').snapshotChanges().pipe(
    map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()}))));
  }
  Deleteitem(id) {
    return this.fdb.object('/todolist/'+id.id).remove();
  }

  Updateitem(id) {
    return this.fdb.object('/todolist/'+id.id).update({itemName: id.itemName, description: id.description, iconlabel: id.iconlabel, completeStatus: id.completeStatus});
  }

  UpdateStatus(id) {
    return this.fdb.object('/todolist/'+id.id).update({completeStatus: id.completeStatus});
  }

  // findAll() {
  //   console.log("Find all");
    
  //   return this.fdb.list('favourites').valueChanges().subscribe(data => {
  //     console.log('====================================');
  //     console.log('this is data :', data);
  //     console.log('====================================');

     
  //   })
     
  // }
}
