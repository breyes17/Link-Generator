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
  ctestlink = ''
  cnewtestlink = ''
  clivelink = ''
  dtestlink = ''
  dtestlinklive = ''
  pform = ''
  ngOnInit() {
  }

  ngDoCheck(): void {
    this.generateLinks(this.getGenerated.platform);    
  }

  generateLinks(p){
    this.pform = p;
    let projnum = this.getGenerated.pnum;
    if(p === 'confirmit'){
      this.ctestlink = 'https://online.ssisurveys.com/wix/'+projnum+'.aspx?MODE=2';
      this.cnewtestlink = 'https://online.ssisurveys.com/wix/'+projnum+'.aspx?pin=1234&test=sp';
      this.clivelink = 'https://online.ssisurveys.com/wix/'+projnum+'.aspx?__extsid__=<#EncryptedConfirmitID[]>&l=9&pid=<#DubKnowledge[1500/Entity id]>&<#IdParameter[Name]>=<#IdParameter[Value]>';
    } else {
      this.dtestlink = 'https://survey-d.researchnow.com/survey/selfserve/53b/'+projnum;
      this.dtestlinklive = 'https://survey-d.researchnow.com/survey/selfserve/53b/'+projnum+'/temp-edit-live';
    }
  }



}
