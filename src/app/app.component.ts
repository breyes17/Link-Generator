import { Component } from '@angular/core';
import { Platform } from 'src/app/shared/platform.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'linkGenerator';
  onGenerated : Platform;
  // pform = '';
  // pnum = '';
  // onGenerated(event){
  //   this.pform = event.platform;
  //   this.pnum = event.pnum;
  // }
}
