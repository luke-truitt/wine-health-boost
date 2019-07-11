import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-vine',
  templateUrl: './good-vine.component.html',
  styleUrls: ['./good-vine.component.scss']
})
export class GoodVineComponent implements OnInit {
  config;
  fullpage_api;
  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: ['#CACFB2', 'whitesmoke', 'whitesmoke', 'whitesmoke'],
      anchors: ['wine-health-boost', 'product', 'details', 'enhanced-content'],
      navigation: true,
      scrollingSpeed: 1000
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef) {

    this.fullpage_api = fullPageRef;
  }

}
