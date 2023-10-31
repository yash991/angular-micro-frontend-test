import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  title = 'mfe1';

  ngOnInit() {
    fromEvent(window, 'eventFromMFE2').subscribe((event: any) => {
      console.log(event);
    });
  }
  
  ngOnChanges(changes: SimpleChanges) {

    fromEvent(window, 'event').subscribe((event: any) => {
      console.log(event);
    });

    window.addEventListener('event', this.customEventListener, true);
    window.addEventListener('event', this.customEventListener, true);
  }

  customEventListener(event: any) {
    console.log('Receiving Data to MFA-1:', event.detail);
  }

  ngOnDestroy() {
    window.removeEventListener('shell-data', this.customEventListener, true);
  }
}
