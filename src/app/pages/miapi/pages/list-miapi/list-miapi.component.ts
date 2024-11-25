
import { listaJujutsu } from './../interfaces/jujutsu';
import { Component, OnInit} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MiapiService } from '../services/miapi.service';

@Component({
  selector: 'miapi-list-miapi',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './list-miapi.component.html',
  styleUrl: './list-miapi.component.css'
})

export class ListMiapiComponent implements OnInit{

  jujutsu: listaJujutsu|undefined;

  constructor(
    private srvJujutsu: MiapiService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.srvJujutsu.getAllJujutsu().subscribe((data)=>{
      if(!data){
        console.log('no hay personajes')
      }else{
        this.jujutsu = data;
        console.log(this.jujutsu)
      }
    },(error)=>{
      console.log(error)
    })
  }

  editarJujutsu(id:string){
    this.router.navigate(['miapi/edit',id]);
  }
}
