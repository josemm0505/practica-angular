import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Pokemons } from '../interfaces/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrlBase = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient
  ) { }

  getPokemon(): Observable<Pokemons>{
    return this.http.get<Pokemons>(this.apiUrlBase);
  }

  getpokemon(termino: string|number): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.apiUrlBase}${termino}`);
}
}
