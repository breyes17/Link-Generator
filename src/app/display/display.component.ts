import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Platform } from 'src/app/shared/platform.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, DoCheck {
@Input() getGenerated : Platform;
  constructor() { }
  ctestlink = '';
  cnewtestlink = '';
  clivelink = '';
  dtestlink = '';
  dtestlinklive = '';
  preconfirmit = 'https://online.ssisurveys.com/wix/';
  predecipher = 'https://survey-d.researchnow.com/survey/selfserve/53b/';
  pform = '';
  ngOnInit() {
  }

  ngDoCheck(): void {
    this.generateLinks(this.getGenerated.platform);    
  }

  generateLinks(p){
    this.pform = p;
    let projnum = this.getGenerated.pnum;
    if(p === 'confirmit'){
      this.ctestlink = this.preconfirmit+projnum+'.aspx?MODE=2';
      this.cnewtestlink = this.preconfirmit+projnum+'.aspx?pin=1234&test=sp';
      this.clivelink = this.preconfirmit+projnum+'.aspx?__extsid__=<#EncryptedConfirmitID[]>&l=9&pid=<#DubKnowledge[1500/Entity id]>&<#IdParameter[Name]>=<#IdParameter[Value]>';
    } else {
      this.dtestlink = this.predecipher+projnum;
      this.dtestlinklive = this.predecipher+projnum+'/temp-edit-live';
    }
  }



}
