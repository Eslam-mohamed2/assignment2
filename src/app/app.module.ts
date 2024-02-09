import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartFramworkComponent } from './start-framwork/start-framwork.component';
import { AboutComponent } from './about/about.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeadingComponent } from './heading/heading.component';
import { AnimationbarComponent } from './animationbar/animationbar.component';

@NgModule({
  declarations: [
    AppComponent,
    StartFramworkComponent,
    AboutComponent,
    ProtfolioComponent,
    ContactComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    HeadingComponent,
    AnimationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
