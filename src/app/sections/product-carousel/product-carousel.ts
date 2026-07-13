import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  imports: [CommonModule],
  templateUrl: './product-carousel.html',
  styleUrl: './product-carousel.less',
})
export class ProductCarousel {
  @Input() category: 'ice-creams' | 'shakes' | 'mojitos' | 'cakes' = 'ice-creams';
  @Input() title = 'Our Products';
  @Input() subtitle = 'Explore our range';

  activeIndex = 0;

  readonly allProducts = {
    'ice-creams': [
      { name: 'Strawberry', description: 'Strawberry flavoured ice cream with strawberry fruit crush', image: '/assets/strawberry.jpg' },
      { name: 'Dark Chocolate', description: 'Chocolate flavoured ice cream with chocolate buttons', image: '/assets/dark-chocolate.jpg' },
      { name: 'Pistachio', description: 'Pistachio flavoured ice cream with pistachio nuts', image: '/assets/pistachio.jpg' },
      { name: 'Almond Crunch', description: 'Natural vanilla flavoured ice cream with almond nuts coated with chocolate & honey sauce', image: '/assets/almond-crunch.jpg' },
    ],
    shakes: [
      { name: 'Caramel Drizzle Shake', description: 'Rich, buttery caramel sauce perfect for any shake', image: '/assets/caramel-shake.jpg' },
      { name: 'Chocolate Fudge Shake', description: 'Decadent dark chocolate fudge shake', image: '/assets/chocolate-shake.jpg' },
      { name: 'Vanilla Shake', description: 'Smooth, aromatic vanilla shake', image: '/assets/vanilla-shake.jpg' },
      { name: 'Berry Shake', description: 'Tart and sweet berry reduction shake', image: '/assets/berry-shake.jpg' },
    ],
    mojitos: [
      { name: 'Classic Mojito', description: 'Refreshing mojito-inspired ice cream with mint', image: '/assets/classic-mojito.jpg' },
      { name: 'Strawberry Mojito', description: 'Fruity strawberry mojito ice cream cocktail', image: '/assets/strawberry-mojito.jpg' },
      { name: 'Mango Mojito', description: 'Tropical mango mojito ice cream blend', image: '/assets/mango-mojito.jpg' },
      { name: 'Berry Mojito', description: 'Mixed berry mojito ice cream cocktail', image: '/assets/berry-mojito.jpg' },
    ],
    cakes: [
      { name: 'Chocolate Cake', description: 'Decadent chocolate ice cream cake with fudge layers', image: '/assets/chocolate-cake.jpg' },
      { name: 'Strawberry Cake', description: 'Fresh strawberry ice cream cake with vanilla sponge', image: '/assets/strawberry-cake.jpg' },
      { name: 'Vanilla Cake', description: 'Classic vanilla ice cream cake for celebrations', image: '/assets/vanilla-cake.jpg' },
      { name: 'Mixed Berry Cake', description: 'Mixed berry ice cream cake with cream frosting', image: '/assets/berry-cake.jpg' },
    ],
  };

  get currentItems() {
    return this.allProducts[this.category];
  }

  get currentItem() {
    return this.currentItems[this.activeIndex];
  }

  prevItem() {
    this.activeIndex = (this.activeIndex - 1 + this.currentItems.length) % this.currentItems.length;
  }

  nextItem() {
    this.activeIndex = (this.activeIndex + 1) % this.currentItems.length;
  }
}
