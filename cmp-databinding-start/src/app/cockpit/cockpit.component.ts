import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>;
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverContent
    });
  }

  onAddBlueprint() {
    this.bluebrintCreated.emit({
      blueprintName: this.newServerName,
      blueprintContent" this.newServerContent
    });
  }
}
