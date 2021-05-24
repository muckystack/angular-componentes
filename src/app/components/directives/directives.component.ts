import { PokemonapiService } from './../../services/pokemonapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [],
})
export class DirectivesComponent implements OnInit {
  public pokemons: any[] = [];
  private list: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

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
        abilities,
        url: response.forms[0].url,
      };

      this.pokemons.push(element);

      this.pokemons[0].img = '';
    });
  }
}
