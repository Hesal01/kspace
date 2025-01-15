import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { PhotoComponent } from "./photo/photo.component";
import { CallService } from './call.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, PhotoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private callService: CallService) {}

  makeCall(): void {
    const phoneNumber = '123456789'; // Numéro à appeler
    this.callService.callNumber(phoneNumber);
  }
}
