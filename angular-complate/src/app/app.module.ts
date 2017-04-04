import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoiveListComponent } from './components/moive-list/moive-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { MoiveComponent } from './components/moive/moive.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    MoiveListComponent,
    CharactersListComponent,
    MoiveComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path : 'moives',
        component : MoiveListComponent
      },
      {
        path : 'characters',
        component : CharactersListComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
