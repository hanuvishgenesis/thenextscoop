import { Component } from '@angular/core';
import { About } from '../../sections/about/about';
import { Contact } from '../../sections/contact/contact';
import { Features } from '../../sections/features/features';
import { Flavours } from '../../sections/flavours/flavours';
import { Footer } from '../../sections/footer/footer';
import { Gallery } from '../../sections/gallery/gallery';
import { Header } from '../../sections/header/header';
import { Hero } from '../../sections/hero/hero';
import { Specials } from '../../sections/specials/specials';
import { Testimonials } from '../../sections/testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Hero,
    Flavours,
    Features,
    Specials,
    Gallery,
    Testimonials,
    About,
    Contact,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class Home {}
