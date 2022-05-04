import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes:string []=['spider','ironman','hulk'];
  hero: string = ''

  borrarHero(){
    this.hero = this.heroes.shift() || '';
  }

}
