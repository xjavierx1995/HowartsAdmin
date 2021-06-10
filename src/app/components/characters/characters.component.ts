import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  house: string = 'slytherin';
  characters: object[] = [];
  displayedColumns: string[] = [
    'name',
    'patronus',
    'age',
    'image',
  ];

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    console.log(this.house);

    this.characterService.getCharacters(this.house).subscribe((res: object[]) => {
      console.log(res);
      this.characters = res;
    });

  }
}
