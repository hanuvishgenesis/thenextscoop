import { Component } from '@angular/core';
import { Contact } from '../../sections/contact/contact';
import { Features } from '../../sections/features/features';
import { Flavours } from '../../sections/flavours/flavours';
import { Footer } from '../../sections/footer/footer';
import { Header } from '../../sections/header/header';
import { Hero } from '../../sections/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, Flavours, Features, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class Home {}
