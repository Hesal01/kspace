import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CallService } from './call.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private callService: CallService) {}

  makeCall(): void {
    const phoneNumber = '1234567890'; 
    this.callService.callNumber(phoneNumber);
  }
}
