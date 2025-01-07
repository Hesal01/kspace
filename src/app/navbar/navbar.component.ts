import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { MesLiensComponent } from "../mes-liens/mes-liens.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, MesLiensComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
