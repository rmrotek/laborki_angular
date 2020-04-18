import { Component } from '@angular/core';

// ! TEGO NIE USUWAC
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// !

export class AppComponent {
  inputText = 'Moj input';
  zmienKolor = 'color-black';
  isDisabled = true;

  kolorButtona = 'background-red';
  
  zmienKolorButtona() {
    this.kolorButtona = 'background-blue';
  }

  onInputFocus() {
    this.kolorButtona = 'background-red';
  }

  zmienUstawienia() {
    this.isDisabled = false;
  }
  onFocus() {
    this.zmienKolor = 'color-brown';
  }
  onClick(event) {
    console.log(event);
  }
  onMouseMove(event) {
    console.log('punktX: ' + event.clientX + ' punktY: ' + event.clientY);
  }
  onPaste() {
    this.inputText = 'Wklejanie zabronione!';
  }
}
