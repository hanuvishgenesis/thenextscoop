import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.less',
})
export class Testimonials {
  readonly testimonials = [
    { quote: 'It felt like stepping into a private salon for dessert.', name: 'Mina L.' },
    { quote: 'The balance of richness and freshness is unlike anything else.', name: 'Jules R.' },
  ];
}
