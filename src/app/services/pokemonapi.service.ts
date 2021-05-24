import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonapiService {
  constructor(public http: HttpClient) {}

  getInfoPokeApi(pokemonId: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  }
}
