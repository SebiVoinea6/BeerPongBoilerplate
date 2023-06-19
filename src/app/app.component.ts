import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'BeerPong';
  yura = 90;
  enes = 90;

  onYura(): void {
    this.yura = this.yura = this.yura + 1;
  }

  onEnes(): void {
    this.enes = this.enes = this.enes + 1;
  }
}
