import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  typeView: string = 'table'
  house: string = 'slytherin';
  characters: object[] = [];
  displayedColumns: string[] = [
    'name',
    'patronus',
    'age',
    'image',
  ];
  search: string = '';

  constructor(
    private characterService: CharacterService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this.spinner.show();
    this.characterService.getCharacters(this.house).subscribe((res: object[]) => {
      this.spinner.hide();
      this.characters = res;
    });

  }
}
