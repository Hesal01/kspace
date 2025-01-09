import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";  
import { MesLiensComponent } from "../mes-liens/mes-liens.component"; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [LogoComponent, MesLiensComponent]
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild('hamburger') hamburger: ElementRef | undefined;
  @ViewChild('navLinks') navLinks: ElementRef | undefined;
  nativeElement: any;

  constructor() { }

  ngAfterViewInit(): void {
    
    if (this.hamburger && this.navLinks) {
      this.hamburger.nativeElement.addEventListener('click', () => {
        this.nativeElement.classList.toggle('active');
      });
    }
  }
}
