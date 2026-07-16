import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.less',
})
export class Features {
  activeTab = 'flavours';
  activeIndex = 0;

  readonly flavours = [
    { name: 'Strawberry', description: 'Strawberry flavoured ice cream with strawberry fruit crush', image: '/assets/strawberry.jpg' },
    { name: 'Dark Chocolate', description: 'Chocolate flavoured ice cream with chocolate buttons', image: '/assets/dark-chocolate.jpg' },
    { name: 'Pistachio', description: 'Pistachio flavoured ice cream with pistachio nuts', image: '/assets/pistachio.jpg' },
    { name: 'Almond Crunch', description: 'Natural vanilla flavoured ice cream with almond nuts coated with chocolate & honey sauce', image: '/assets/almond-crunch.jpg' },
  ];

  readonly sauces = [
    { name: 'Caramel Drizzle', description: 'Rich, buttery caramel sauce perfect for any scoop', image: '/assets/caramel.jpg' },
    { name: 'Chocolate Fudge', description: 'Decadent dark chocolate fudge sauce', image: '/assets/chocolate-fudge.jpg' },
    { name: 'Vanilla Syrup', description: 'Smooth, aromatic vanilla sauce', image: '/assets/vanilla-syrup.jpg' },
    { name: 'Berry Coulis', description: 'Tart and sweet berry reduction', image: '/assets/berry-coulis.jpg' },
  ];

  readonly toppings = [
    { name: 'Mixed Nuts', description: 'Roasted almonds, cashews, and pecans', image: '/assets/mixed-nuts.jpg' },
    { name: 'Chocolate Sprinkles', description: 'Colorful chocolate and rainbow sprinkles', image: '/assets/sprinkles.jpg' },
    { name: 'Cookie Crumbles', description: 'Crushed cookie pieces and brownie bites', image: '/assets/cookie-crumbles.jpg' },
    { name: 'Fruit Medley', description: 'Fresh berries and dried fruit pieces', image: '/assets/fruit-medley.jpg' },
  ];

  setTab(tab: string) {
    this.activeTab = tab;
    this.activeIndex = 0;
  }

  get currentItems() {
    if (this.activeTab === 'flavours') return this.flavours;
    if (this.activeTab === 'sauces') return this.sauces;
    return this.toppings;
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
