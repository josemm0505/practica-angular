import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {FormGroup,FormControl, Validators, ReactiveFormsModule, FormsModule, NgModel } from '@angular/forms';
import { Jujutsu, listaJujutsu } from '../interfaces/jujutsu';
import { MiapiService } from '../services/miapi.service';

@Component({
  selector: 'app-jujutsu-nuevo',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule, FormsModule ],
  templateUrl: './jujutsu-nuevo.component.html',
  styleUrl: './jujutsu-nuevo.component.css'
})
export class JujutsuNuevoComponent implements OnInit{

  nuevoForm = new FormGroup({
    nombre: new FormControl(''),
    kanji: new FormControl(''),
    hiragana: new FormControl(''),
    romaji: new FormControl(''),
    especie: new FormControl(''),
    genero: new FormControl(''),
    edad: new FormControl(''),
    afiliacion: new FormControl(''),
    ocupacion: new FormControl(''),
    grado: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),
  });

  constructor(private api:MiapiService, private route:Router){}

  ngOnInit(): void {
    
  }

  postForm(){
    this.api.postJujutsu(this.nuevoForm.value).subscribe(data=>{
      console.log(this.nuevoForm.value);
    })
  }
}
