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

  constructor(public afAuth: AngularFireAuth, private readonly router: Router){}

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

  public onEauDeVin() {
    this.router.navigate(['eaudevin']);
  }

  public onGoodVine() {
    this.router.navigate(['goodvine']);
  }

  public onIosInquire() {
    window.location.href = 'mailto:iosapps@truittluke.com?subject=I\'m interested in learning more about your iOS Apps';
  }
}
