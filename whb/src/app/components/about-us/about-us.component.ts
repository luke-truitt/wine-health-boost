import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  config;
  fullpage_api;
  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: ['whitesmoke', 'whitesmoke', 'whitesmoke', 'whitesmoke', 'whitesmoke'],
      anchors: ['nouveau', 'tom', 'steve', 'julie', 'amanda'],
      navigation: true,
      scrollingSpeed: 750,
      verticalCentered: false,
      touchSensitivity: 50
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef) {

    this.fullpage_api = fullPageRef;
  }

}
