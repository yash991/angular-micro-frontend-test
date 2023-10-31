import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Sending the data when the shell load also.
    this.sendCustomEvent();
  }

  // Send Data from Shell to MFE's
  sendCustomEvent() {
    const event = new CustomEvent('eventFromShell', {detail: 'Hello Iam from the shell'});
    dispatchEvent(event);
  }

}
