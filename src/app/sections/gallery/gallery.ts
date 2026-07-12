import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.less',
})
export class Gallery {
  readonly images = [
    'A velvet scoop served in a glass coupe',
    'A scattering of pistachios and citrus glaze',
    'A moonlit dessert bar with warm lighting',
  ];
}
