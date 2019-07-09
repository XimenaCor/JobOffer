import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  catchedPokemons: any[] = [];
  constructor( private pokemonService: PokemonService) { 
    // this.pokemonService.getAllPokemons();
  }

  
  catchPokemon(pokemonName: string){
    console.log(pokemonName);
    this.pokemonService.catchPokemon(pokemonName)
    console.log(pokemonName);
    this.pokemonService.catchPokemon( pokemonName )
      .subscribe( (data: any) => {
        console.log(data);
        this.catchedPokemons.push(data)
      })
  }
  }

