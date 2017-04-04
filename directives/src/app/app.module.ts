import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { BetterHgDirective } from './better-directivesHl/better-hg.directive';
import { UnlessDirective } from './unless/unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    BetterHgDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
