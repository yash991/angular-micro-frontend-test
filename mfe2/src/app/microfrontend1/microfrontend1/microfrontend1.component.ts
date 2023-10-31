import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-microfrontend1',
  templateUrl: './microfrontend1.component.html',
  styleUrls: ['./microfrontend1.component.scss']
})
export class Microfrontend1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fromEvent(window, 'eventFromShell').subscribe((event: any) => {
      console.log(event.detail);
    });
  }

  sendCustomEvent() {
    // const data ={
    //   description: 'Hello Iam from the MFE2'
    // };

    const event = new CustomEvent('eventFromMFE2', {detail: 'Hello Iam from the MFE2'});
    dispatchEvent(event);
  }

}
