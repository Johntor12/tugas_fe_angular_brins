import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.sass']
})
export class PricingCardComponent {
  @Input() index: number = 0;  // Indeks untuk menentukan warna card
  @Input() title: string = "";
  @Input() price: string = "";
  @Input() descItems: number = 0;
  @Input() desc: Array<string> = [];  

  getCardContainerColor(index: number): string {
    return index % 2 === 1 ? 'card-color-odd' : 'card-color-even'
  }


  getCardTitleColor(index: number): string {
    return index % 2 === 1 ? 'card-title-odd' : 'card-title-even';
  }

  getCardPriceColor(index: number): string {
    return index % 2 === 1 ? 'card-desc-price-caption-odd' : 'card-desc-caption-even'
  }

  isOdd(index: number): boolean {
    return index % 2 === 1 ? true : false
  }
}
