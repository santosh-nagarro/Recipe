import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed = true;
  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
