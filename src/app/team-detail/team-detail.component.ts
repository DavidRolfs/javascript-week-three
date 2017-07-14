import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Skater } from '../skater.model';
import { TeamService } from '../team.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
  providers: [TeamService]
})
export class TeamDetailComponent implements OnInit {
  skaterId: string;
  skaterToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private teamService: TeamService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.skaterId = urlParameters['id'];
  });
    this.skaterToDisplay = this.teamService.getSkaterById(this.skaterId);
  }


}
