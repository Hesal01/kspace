import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-liens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-liens.component.html',
  styleUrl: './mes-liens.component.scss'
})
export class MesLiensComponent {
  isclicked = false
  openMenu(){
    this.isclicked = ! this.isclicked
  }
}


