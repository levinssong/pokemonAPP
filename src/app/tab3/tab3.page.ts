import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  resultsJSON = {'metadata': {}, 'data': {}};

  pokedex: any = {
  
    name:'',
    abilities:'',
    derrotas:0,
    vitorias:0,
    empates:0,
    image: ''

 
}

  constructor(private pokeAPIService: PokeAPIService,) {}
 
pokemon(){
  this.pokedex.push({
    name:'',
    abilities:'',
    derrotas:0,
    vitorias:0,
    empates:0,
    image: ''
  })
  
  this.pokeAPIService.getPokeAPIService().subscribe((value) => {
    this.pokedex.name = JSON.parse(JSON.stringify(value))['name'];
    this.pokedex.derrotas = JSON.parse(JSON.stringify(value))['derrotas'];
    this.pokedex.vitorias = JSON.parse(JSON.stringify(value)) ['vitorias'];
    this.pokedex.empates = JSON.parse(JSON.stringify(value))['empates'];
    this.pokedex.image = JSON.parse(JSON.stringify(value))['sprites']['other']['dream_world']['front_default'];
  });
}
}
