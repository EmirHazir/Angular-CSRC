import { Component, OnInit } from '@angular/core';
import { Moive } from '../../classes/moive';
import { MoivesService } from '../../services/moives.service';

@Component({
  selector: 'app-moive-list',
  templateUrl: './moive-list.component.html',
  styleUrls: ['./moive-list.component.css'],
  providers:[MoivesService]
})
export class MoiveListComponent implements OnInit {

 moives:Moive[];

  constructor(private moivesService : MoivesService) { }

  getMoives():void{
    this.moivesService.getMoives()
    .then(moives => this.moives = moives);
  }

  ngOnInit() {
    this.getMoives();
  }

}
