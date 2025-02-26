import { Component, NgModule } from '@angular/core';
import { ApplicationConfig, BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaLinkComponent } from './social-media-link/social-media-link.component';
import { HeroComponent } from './hero/hero.component';
import { PricingCardComponent } from './pricing-section/pricing-card/pricing-card.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { HttpClientModule } from "@angular/common/http"
import { provideRouter, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SocialMediaLinkComponent,
    HeroComponent,
    PricingCardComponent,
    PricingSectionComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
