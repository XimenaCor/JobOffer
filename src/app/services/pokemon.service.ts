import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { 
    console.log('service done');
  }

  getAllPokemons(){
    this.http.get('https://pokeapi.co/api/v2/pokemon/')
      .subscribe( data=> {
        console.log(data);
      });
  }

  catchPokemon( pokemonName: string ){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${ pokemonName }`);
  }
}
