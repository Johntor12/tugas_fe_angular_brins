import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { PricingSectionComponent } from "./pricing-section/pricing-section.component";
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'pricing', component: PricingSectionComponent },
  { path: 'services', component: ServicesComponent}
]

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes), RouterLink
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
