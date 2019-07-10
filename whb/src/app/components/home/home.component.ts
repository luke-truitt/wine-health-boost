import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  config;
  fullpage_api;

  constructor(public afAuth: AngularFireAuth, private readonly router: Router){
    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: ['#fff', 'whitesmoke'],
      anchors: ['', 'products'],
      navigation: true,
      scrollSpeed: 100
    };
  }

  ngOnInit() {
  }
  getRef(fullPageRef) {

    this.fullpage_api = fullPageRef;
  }
  public onInquire(type: string) {
    if (type === 'LearnMore') {
      window.location.href = 'mailto:questions@nouv-eau.com?subject=I\'m interested in learning more about your Products';
    } else {
      window.location.href = 'mailto:' + type.toLocaleLowerCase() +
      'apps@truittluke.com?subject=I\'m interested in learning more about your ' + type + ' Apps';
    }
  }

  public onEauDeVin() {
    this.router.navigate(['eaudevin']);
  }

  public onWHB() {
    this.router.navigate(['winehealthboost']);
  }
}
