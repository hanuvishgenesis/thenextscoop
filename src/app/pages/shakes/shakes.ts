import { Component } from '@angular/core';
import { Header } from '../../sections/header/header';
import { Footer } from '../../sections/footer/footer';
import { ProductCarousel } from '../../sections/product-carousel/product-carousel';

@Component({
  selector: 'app-shakes',
  imports: [Header, ProductCarousel, Footer],
  template: `
    <app-header></app-header>
    <app-product-carousel 
      category="shakes" 
      title="Our Shakes"
      subtitle="Creamy, dreamy shakes blended to perfection">
    </app-product-carousel>
    <app-footer></app-footer>
  `,
  styleUrl: './shakes.less',
})
export class Shakes {}
