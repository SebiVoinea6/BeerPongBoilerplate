import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {

  hit = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.hit = !this.hit;
  }

}
