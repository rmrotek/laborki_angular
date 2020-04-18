import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-studenci-view',
  templateUrl: './studenci-view.component.html',
  styleUrls: ['./studenci-view.component.scss']
})
export class StudenciViewComponent implements OnInit {
  @Input() studenciItems: string[] = [];
  constructor() { }
  ngOnInit() { }
}