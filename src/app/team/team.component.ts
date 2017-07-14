import { Component, OnInit } from '@angular/core';
import { Skater } from '../skater.model';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [TeamService]
})
export class TeamComponent implements OnInit {
  skaters: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private teamService: TeamService){}

  ngOnInit() {
  this.skaters = this.teamService.getSkaters();
}

  goToDetailPage(clickedSkater) {
   this.router.navigate(['team', clickedSkater.$key]);
  };

  filterByAge: string = "Everyone";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
