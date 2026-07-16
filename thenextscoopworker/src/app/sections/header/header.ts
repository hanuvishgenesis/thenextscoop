import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.less',
})
export class Header {
  readonly navItems = [
    { label: 'Our Story', target: 'our-story' },
    { label: 'Our Products', target: 'our-products' },
    { label: 'Contact Us', target: 'contact-us' }
  ];
}
