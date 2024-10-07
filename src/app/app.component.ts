import { NavbarComponent } from './componentes/navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginacionComponent } from './pages/pokemon/paginacion/paginacion.component';
import { CardComponent } from './pages/pokemon/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica-angular';
}
