import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onInquire(type: string) {
    if (type === 'LearnMore') {
      window.location.href = 'mailto:questions@truittluke.com?subject=I\'m interested in learning more about your Apps';
    } else {
      window.location.href = 'mailto:' + type.toLocaleLowerCase() +
      'apps@truittluke.com?subject=I\'m interested in learning more about your ' + type + ' Apps';
    }
  }
}
