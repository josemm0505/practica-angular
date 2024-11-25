import { Component, OnInit } from '@angular/core';
import { listaJujutsu } from './pages/interfaces/jujutsu';
import { MiapiService } from './pages/services/miapi.service';
import { ListMiapiComponent } from './pages/list-miapi/list-miapi.component';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-miapi',
  standalone: true,
  imports: [],
  templateUrl: './miapi.component.html',
  styleUrl: './miapi.component.css'
})
export class MiapiComponent implements OnInit {
  jujutsu: listaJujutsu|undefined;

  constructor(
    private srvJujutsu: MiapiService
  ){}

  ngOnInit(): void {
    this.srvJujutsu.getAllJujutsu().subscribe((data)=>{
      this.jujutsu = data;
      console.log(this.jujutsu);
    })
  }
}
