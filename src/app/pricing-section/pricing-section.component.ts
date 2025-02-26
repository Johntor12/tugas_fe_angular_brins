import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pricing-section',
  templateUrl: './pricing-section.component.html',
  styleUrls: ['./pricing-section.component.sass']
})
export class PricingSectionComponent {
  pricingPlans: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('../../assets/pricingPlans.json').subscribe(data => {
      this.pricingPlans = data;
    });
  }
}
