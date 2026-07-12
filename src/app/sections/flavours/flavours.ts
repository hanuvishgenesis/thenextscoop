import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flavours',
  imports: [CommonModule],
  templateUrl: './flavours.html',
  styleUrl: './flavours.less',
})
export class Flavours {
  readonly flavours = [
    { name: 'Cocoa Velvet', note: 'Dark chocolate, sea salt, espresso', accent: '🍫' },
    { name: 'Rose Petal', note: 'Blooming petals, vanilla bean, berry', accent: '🌹' },
    { name: 'Caramel Citrus', note: 'Toffee swirl, orange zest, crème fraîche', accent: '🍊' },
  ];
}
