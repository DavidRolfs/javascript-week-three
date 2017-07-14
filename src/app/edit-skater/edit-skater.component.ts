import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-edit-skater',
  templateUrl: './edit-skater.component.html',
  styleUrls: ['./edit-skater.component.css'],
  providers: [TeamService]
})
export class EditSkaterComponent implements OnInit {
  @Input() selectedSkater;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  beginUpdatingSkater(skaterToUpdate){
    this.teamService.updateSkater(skaterToUpdate);
  }

  beginDeletingSkater(skaterToDelete){
  if(confirm("Are you sure you want to delete this skater from the team?")){
    this.teamService.deleteSkater(skaterToDelete);
  }
}

}
