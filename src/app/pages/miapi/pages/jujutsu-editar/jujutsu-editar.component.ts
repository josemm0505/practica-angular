import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Jujutsu, listaJujutsu } from '../interfaces/jujutsu';
import { MiapiService } from '../services/miapi.service';
import {FormGroup,FormControl, Validators, ReactiveFormsModule } from '@angular/forms'
import { __values } from 'tslib';

@Component({
  selector: 'app-jujutsu-editar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule ],
  templateUrl: './jujutsu-editar.component.html',
  styleUrl: './jujutsu-editar.component.css'
})
export class JujutsuEditarComponent implements OnInit{

  constructor(private router:Router, private activatedRouter: ActivatedRoute, private api:MiapiService){}

  datosJujutsu:Jujutsu|undefined;

  editarForm = new FormGroup({
    _id: new FormControl(''),
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


  ngOnInit(): void {
    let jujutsuId=this.activatedRouter.snapshot.paramMap.get('id');
    this.api.getAllJujutsu().subscribe((jujutsuAll)=>{
      jujutsuAll.jujutsu.forEach((jujutsu:Jujutsu)=>{
        if(jujutsu._id==jujutsuId){
          this.datosJujutsu=jujutsu;
          this.editarForm.setValue({
            _id: this.datosJujutsu._id,
            nombre: this.datosJujutsu.nombre,
            kanji: this.datosJujutsu.kanji,
            hiragana: this.datosJujutsu.hiragana,
            romaji: this.datosJujutsu.romaji,
            especie: this.datosJujutsu.especie,
            genero: this.datosJujutsu.genero,
            edad: this.datosJujutsu.edad,
            afiliacion: this.datosJujutsu.afiliacion,
            ocupacion: this.datosJujutsu.ocupacion,
            grado: this.datosJujutsu.grado,
            descripcion: this.datosJujutsu.descripcion,
            imagen: this.datosJujutsu.imagen,
          });
        }
      });
    })
    
  }

  postForm(form:Jujutsu):void{
    const formulario = this.editarForm.value;
    console.log(formulario);
  }
  
}
