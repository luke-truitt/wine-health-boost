import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eau-de-vin',
  templateUrl: './eau-de-vin.component.html',
  styleUrls: ['./eau-de-vin.component.scss']
})
export class EauDeVinComponent implements OnInit {
  config;
  fullpage_api;
  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: ['#fff'],
      anchors: [''],
      navigation: true,
      scrollSpeed: 100
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef) {

    this.fullpage_api = fullPageRef;
  }

}
