import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CallService {
  callNumber(number: string): void {
    
    console.log(`Appel en cours vers : ${number}`);
    window.location.href = `tel:${number}`; 
  }
}

