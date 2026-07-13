import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.less',
})
export class Hero {
  readonly navItems = [
    { label: 'Our Story', target: 'our-story' },
    { label: 'Our Products', target: 'our-products' },
    { label: 'Contact Us', target: 'contact-us' },
    { label: 'Order Online', target: 'contact-us' },
  ];
}
