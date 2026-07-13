import { Component } from '@angular/core';
import { Header } from '../../sections/header/header';
import { Footer } from '../../sections/footer/footer';
import { ProductCarousel } from '../../sections/product-carousel/product-carousel';

@Component({
  selector: 'app-cakes',
  imports: [Header, ProductCarousel, Footer],
  template: `
    <app-header></app-header>
    <app-product-carousel 
      category="cakes" 
      title="Our Cakes"
      subtitle="Decadent ice cream cakes for every celebration">
    </app-product-carousel>
    <app-footer></app-footer>
  `,
  styleUrl: './cakes.less',
})
export class Cakes {}
