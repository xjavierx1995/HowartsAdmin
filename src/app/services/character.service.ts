import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    public http: HttpClient,
  ) { }

  getCharacters(house: string){
    return this.http.get(environment.API_URL + `characters/house/${house}`);
  }
}
