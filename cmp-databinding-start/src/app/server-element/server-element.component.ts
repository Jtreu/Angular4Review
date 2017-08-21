import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // We declare a variable 'element' that is of type object w/ 3 properties.
  // The parameter in '@Input' is the alias for our property 'element'
  // This will be used in the html when binding to this property.
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }
}
