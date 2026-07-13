import { Component } from '@angular/core';
import { Header } from '../../sections/header/header';
import { Footer } from '../../sections/footer/footer';
import { ProductCarousel } from '../../sections/product-carousel/product-carousel';

@Component({
  selector: 'app-ice-creams',
  imports: [Header, ProductCarousel, Footer],
  template: `
    <app-header></app-header>
    <app-product-carousel 
      category="ice-creams" 
      title="Our Ice Creams"
      subtitle="Premium handcrafted scoops with bold and delicate flavours">
    </app-product-carousel>
    <app-footer></app-footer>
  `,
  styleUrl: './ice-creams.less',
})
export class IceCreams {}
