import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flavours',
  imports: [CommonModule],
  templateUrl: './flavours.html',
  styleUrl: './flavours.less',
})
export class Flavours {
  readonly products = [
    {
      name: 'ICE CREAMS',
      icon: '🍦',
      description: 'Premium handcrafted scoops with bold and delicate flavours. From classic favorites to exotic blends.',
      route: '/ice-creams',
    },
    {
      name: 'SHAKES',
      icon: '🥤',
      description: 'Creamy, dreamy shakes blended to perfection. Rich textures that melt in your mouth.',
      route: '/shakes',
    },
    {
      name: 'MOJITOS',
      icon: '🍹',
      description: 'Refreshing mojito-inspired ice cream cocktails. Cool, vibrant, and utterly refreshing.',
      route: '/mojitos',
    },
    {
      name: 'CAKES',
      icon: '🎂',
      description: 'Decadent ice cream cakes for every celebration. Custom creations that steal the show.',
      route: '/cakes',
    },
  ];
}
