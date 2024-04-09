import { Component, Input, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})

export class GamesComponent {
@Input() username ='';
@Output() addFavoriteEvent = new EventEmitter<string>(); //aqui estamos creando un EventEmitter que emite un string

fav(gameName: string) {
  this.addFavoriteEvent.emit(gameName); //por eso aqui usamos this.addFavoriteEvent.emit(que es un metodo de EventEmitter)
}

  games = [
   {
    id: 1, 
    name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Horizon Zero Dawn'
    },
    {
      id: 3,
      name: 'The Last of Us'
    }
  ]
}
