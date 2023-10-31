import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { fromEvent } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-microfrontend',
  templateUrl: './microfrontend.component.html',
  styleUrls: ['./microfrontend.component.scss']
})
export class MicrofrontendComponent implements OnInit, OnDestroy {
  data = '';

  constructor(private sharedService: SharedService) {
    fromEvent(window, 'eventFromShell').subscribe((event: any) => {
      this.sharedService.setData(event.detail);
    });

    fromEvent(window, 'eventFromMFE2').subscribe((event: any) => {
      this.sharedService.setData(event.detail);
    });
  }

  ngOnInit(): void {
    fromEvent(window, 'eventFromShell').subscribe((event: any) => {
      this.sharedService.setData(event.detail);
    });

    fromEvent(window, 'eventFromMFE2').subscribe((event: any) => {
      this.sharedService.setData(event.detail);
    });
  }

  isDataExists() {
    return (this.sharedService.getData() !== null && this.sharedService.getData() !== '' && this.sharedService.getData() !== undefined)
  }

  getData() {
    console.log(this.sharedService.getData());

    return this.sharedService.getData();
  }

  ngOnDestroy(): void {}

}
