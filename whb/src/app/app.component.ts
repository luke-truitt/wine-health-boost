import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nouv Eau';
  logo = '/assets/images/NouvEauTM.jpg';
  constructor(
    private readonly router: Router,
    public readonly authService: AuthService
  ) {

  }

  public onLogoClick() {
    this.router.navigate(['']);
  }

  public onLogin() {
    this.router.navigate(['login']);
  }
  public onLogout() {
    this.authService.doLogout().then(() => {
      this.router.navigate(['']);
    });
  }
  public onShop() {
    this.router.navigate(['shop']);
  }
  public onWHB() {
    this.router.navigate(['winehealthboost']);
  }
  public onEauDeVin() {
    this.router.navigate(['eaudevin']);
  }
  public onAboutUs() {
    this.router.navigate(['about-us']);
  }
}
