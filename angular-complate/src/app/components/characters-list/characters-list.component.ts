import { Component, OnInit } from '@angular/core';
import { Character } from '../../classes/character';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [CharactersService]
})
export class CharactersListComponent implements OnInit {
 characters : Character[];

  constructor(private charactesService : CharactersService) { }

  getCharacters():void{
    this.charactesService.getCharacters()
    .then(characters => this.characters = characters);
  }
  
  ngOnInit() {
    this.getCharacters();
  }

}
