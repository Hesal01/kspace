import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {HeroComponent} from "./hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {}

  makeCall(): void {
    const phoneNumber = '1234567890';
  }
}
