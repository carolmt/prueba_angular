import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //para saber si el usuario está logueado o no
  username = 'carol';
  isLoggedIn = false;
  favGame =''; //aqui guardamos el juego favorito

  getFavorite(gameName: string) {
    this.favGame = gameName;
  }

  greet() {
    alert('Hola!!!');
  }

}
