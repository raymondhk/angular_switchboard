import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switch: object = {
    btn1: true,
    btn2: true,
    btn3: true,
    btn4: true,
    btn5: true,
    btn6: true,
    btn7: true,
    btn8: true,
    btn9: true,
    btn10: true,
  };
  board: Array<string> = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8', 'btn9', 'btn10'];
  click(btn) {
    if (this.switch[btn] === true) {
      this.switch[btn] = false;
    }
    else {
      this.switch[btn] = true;
    }
  }
}
