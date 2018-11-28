import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  get imageVersion() {
    return Math.floor(Math.random() * 10000000);
  }

  constructor() {}

  ngOnInit() {}
}
