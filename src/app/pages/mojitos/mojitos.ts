import { Component } from '@angular/core';
import { Header } from '../../sections/header/header';
import { Footer } from '../../sections/footer/footer';
import { ProductCarousel } from '../../sections/product-carousel/product-carousel';

@Component({
  selector: 'app-mojitos',
  imports: [Header, ProductCarousel, Footer],
  template: `
    <app-header></app-header>
    <app-product-carousel 
      category="mojitos" 
      title="Our Mojitos"
      subtitle="Refreshing mojito-inspired ice cream cocktails">
    </app-product-carousel>
    <app-footer></app-footer>
  `,
  styleUrl: './mojitos.less',
})
export class Mojitos {}
