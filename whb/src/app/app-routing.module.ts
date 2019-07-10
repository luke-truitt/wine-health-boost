import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { ShopComponent } from './components/shop/shop.component';
import { GoodVineComponent } from './components/good-vine/good-vine.component';
import { EauDeVinComponent } from './components/eau-de-vin/eau-de-vin.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'shop', component: ShopComponent },
    { path: 'winehealthboost', component: GoodVineComponent},
    { path: 'eaudevin', component: EauDeVinComponent},
    { path: 'about-us', component: AboutUsComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
