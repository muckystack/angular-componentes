import { Component, OnInit } from '@angular/core';
import { PokemonapiService } from 'src/app/services/pokemonapi.service';

@Component({
  selector: 'app-implement-pipes',
  templateUrl: './implement-pipes.component.html',
  styles: [],
})
export class ImplementPipesComponent implements OnInit {
  public pokemons: any[] = [];
  private list: number[] = [10, 12, 13, 14];

  constructor(private _pokemonapiService: PokemonapiService) {}

  ngOnInit(): void {
    this.list.map((pokemonId) => {
      this.getInfoPokeApi(pokemonId);
    });
  }

  getInfoPokeApi(pokemonId: number) {
    this._pokemonapiService.getInfoPokeApi(pokemonId).subscribe((response) => {
      const abilities = response.abilities.map((item) => {
        return item.ability.name;
      });

      const element = {
        img: response.sprites.other.dream_world.front_default,
        name: response.forms[0].name,
        abilities: abilities.length * 10000,
        url: response.forms[0].url,
      };

      this.pokemons.push(element);
    });
  }
}
