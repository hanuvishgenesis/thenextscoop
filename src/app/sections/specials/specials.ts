import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-specials',
  imports: [CommonModule],
  templateUrl: './specials.html',
  styleUrl: './specials.less',
})
export class Specials {
  readonly specials = [
    { title: 'Midnight Velvet', text: 'Chocolate and black sesame with candied orange.' },
    { title: 'Golden Hour', text: 'Honeycomb, saffron cream, and toasted almond.' },
  ];
}
