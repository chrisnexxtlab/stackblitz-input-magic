import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  rawValue = '00000000';
  displayValue = '0.00';

  onKeyPress(event: KeyboardEvent): void {
    // Check if the Backspace key is pressed
    if (event.key === 'Backspace') {
      this.rawValue = '0' + this.rawValue.slice(0, -1);
      event.preventDefault(); // Prevent default backspace behavior
    }
    // Check if the pressed key is a number
    else if (event.key >= '0' && event.key <= '9') {
      this.rawValue = this.rawValue.slice(1) + event.key;
      const intValue = parseInt(this.rawValue, 10);
      if (intValue > 99999999) {
        this.rawValue = '99999999';
      }
      event.preventDefault(); // Prevent default character input behavior
    }
    // Update the display value
    const intValue = parseInt(this.rawValue, 10);
    this.displayValue = (intValue / 100).toFixed(2);
  }

  onFocus(event: FocusEvent): void {
    (event.target as HTMLInputElement).setSelectionRange(0, 0);
  }
}
