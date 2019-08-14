import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Platform } from '../shared/platform.model';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})

export class ToolsComponent implements OnInit {
  @Output() gplatform = new EventEmitter<Platform>();
  pnum = "";
  confirmit = /p\d{7}$/;
  decipher = /^\d+$/;
  result = false;
  constructor() { }

  ngOnInit() {
  }

  onGenerate(){
    //debugger;
    let projnum = this.pnum.trim();
    let platform = '';
    if(this.confirmit.test(projnum)){
      platform = 'confirmit';
    } else if(this.decipher.test(projnum)){
      platform = 'decipher';
    }

    if(platform !== ''){
      this.gplatform.emit(new Platform(platform,projnum));
      this.result = false;
    } else {
      this.result = true;
    }
  }

}
