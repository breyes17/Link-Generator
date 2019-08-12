import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  pnum = "";
  confirmit = /p\d{7}/g;
  decipher = /^\d+$/g;
  result = false;
  constructor() { }

  ngOnInit() {
  }

  onGenerate(){
    let projnum = this.pnum.trim();
    if(this.confirmit.test(projnum)){
      console.log('confirmit')
    }
    else if(this.decipher.test(projnum)){
      console.log('decipher')
    } else {
      this.result = !this.result;
    }
  }

}
