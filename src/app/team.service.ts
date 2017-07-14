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
    return this.database.object('/skaters/' + skaterId);
  }

  updateSkater(localUpdatedSkater){
    var skaterEntryInFirebase = this.getSkaterById(localUpdatedSkater.$key);
    skaterEntryInFirebase.update({name: localUpdatedSkater.name, age: localUpdatedSkater.age, location: localUpdatedSkater.location, sponsors: localUpdatedSkater.sponsors, description: localUpdatedSkater.description});
    }

  deleteSkater(localSkaterToDelete){
    var skaterEntryInFirebase = this.getSkaterById(localSkaterToDelete.$key);
    skaterEntryInFirebase.remove();
  }

}
