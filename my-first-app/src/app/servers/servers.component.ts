import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    //selector: '[app-servers]',
    // selector: '.app-servers',  
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    //variables
    allowNewServer = false;
    serverCreationStatus = 'Henüz Servis oluşturulmadı';
    serverName = 'Test Server';
    serverCreated = false;
    servers = ['Test Server', 'TestServer 2']

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server oluşturuldu!' + ' ' + this.serverName;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
        //console.log(event);
    }

    ngOnInit() {
    }

}
