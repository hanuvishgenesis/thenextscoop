import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.less',
})
export class Features {
  readonly features = [
    { title: 'House-made sauces', text: 'Each spoonful carries a carefully layered finish from our pastry kitchen.' },
    { title: 'Sensory tasting flights', text: 'Guided pairings with seasonal fruits, nuts, and warm spices.' },
    { title: 'Private scoop soirées', text: 'Bring the boutique experience to birthdays, weddings, and after-hours events.' },
  ];
}
