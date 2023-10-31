import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  _localData = ''

  constructor() { }

  setData(val: any) {
    console.log('setting a value to shared service:', val);
    this._localData = val;
  }

  getData() {
    return this._localData;
  }
}
