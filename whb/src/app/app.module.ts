import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShopComponent } from './components/shop/shop.component';
import { GoodVineComponent } from './components/good-vine/good-vine.component';
import { EauDeVinComponent } from './components/eau-de-vin/eau-de-vin.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AngularFullpageModule} from '@fullpage/angular-fullpage';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ShopComponent,
    GoodVineComponent,
    EauDeVinComponent,
    AboutUsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    // Angular Material Modules
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFullpageModule
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
