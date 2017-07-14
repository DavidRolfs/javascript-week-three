import { Component } from '@angular/core';
import { TeamService } from '../team.service';
import { Skater } from '../skater.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [TeamService]
})
export class AdminComponent {

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, location: string, sponsors: string, description: string) {
  var newSkater: Skater = new Skater(name, age, location, sponsors, description);
  this.teamService.addSkater(newSkater);
}

}
