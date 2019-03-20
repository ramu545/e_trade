import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topfooter',
  templateUrl: './topfooter.component.html',
  styleUrls: ['./topfooter.component.css']
})
export class TopfooterComponent implements OnInit {

  @Input('parentData') public title;
  constructor() { }

  ngOnInit() {
  }

}
