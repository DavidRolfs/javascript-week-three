import { Injectable } from '@angular/core';
import { Skater } from './skater.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class TeamService {
  skaters: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.skaters = database.list('skaters');
}

  getSkaters(){
    return this.skaters;
  }

  addSkater(newSkater: Skater){
    this.skaters.push(newSkater);
  }

  getSkaterById(skaterId: string){
    return this.database.object('skaters/' + skaterId);
  }

}
