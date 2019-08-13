import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsComponent } from './tools/tools.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
