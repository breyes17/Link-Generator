import { Component, OnInit, Input } from '@angular/core';
import { Platform } from 'src/app/shared/platform.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
@Input() onGenerated : Platform;
  constructor() { }

  ngOnInit() {
  }

}
