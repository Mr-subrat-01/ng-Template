import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgTemplate';
  toggle: boolean = false;
  ToggleFun() {
    this.toggle = !this.toggle;
  }
}
