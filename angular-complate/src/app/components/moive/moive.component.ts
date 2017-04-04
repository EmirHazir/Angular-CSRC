import { Component, OnInit, Input } from '@angular/core';
import { Moive } from '../../classes/moive';

@Component({
  selector: 'app-moive',
  templateUrl: './moive.component.html',
  styleUrls: ['./moive.component.css']
})
export class MoiveComponent implements OnInit {

@Input()
moive = Moive;

  constructor() { }

  ngOnInit() {
  }

}
