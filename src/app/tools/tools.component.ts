import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Platform } from '../shared/platform.model';
import { r3JitTypeSourceSpan } from '@angular/compiler';

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
  cnt : number = 0;
  constructor() { }

  ngOnInit() {
  }

  incNum(){
    this.cnt++;
    return this.cnt >= 5 ? this.cnt = 5 : this.cnt;
  }

  decNum(){
    this.cnt--;
    return this.cnt === 0 ? this.cnt = 0 : this.cnt;
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
