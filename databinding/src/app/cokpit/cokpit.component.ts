import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css']
})
export class CokpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    //console.log(this.serverContentInput)

    this.serverCreated.emit
      (
      { serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value }
      );
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    //console.log(this.serverContentInput)

    this.blueprintCreated.emit
      (
      { serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value }
      );
  }
}
