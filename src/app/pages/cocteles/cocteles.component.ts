import { Component, OnInit } from '@angular/core';
import { Cocteles } from './interfaces/cocteles';
import { CoctelService } from './services/cocteles.service';


@Component({
  selector: 'app-cocteles',
  standalone: true,
  imports: [],
  templateUrl: './cocteles.component.html',
  styleUrl: './cocteles.component.css',
})
export class CoctelesComponent implements OnInit {
  coctelAll: Cocteles | undefined;

  constructor(private _srvCocteles: CoctelService) { }

  ngOnInit(): void {
    this._srvCocteles.getPaginacionCoctel().subscribe(
      (cocteles) => {
        if (!cocteles) {
          console.log('no hay cocteles');
        } else {
          this.coctelAll = cocteles;
        }
      },
      (error) => {
        console.error('Error al obtener cocteles: ', error);
      }
    );
  }

  setNewCocteles(newCocteles: Cocteles): void {
    this.coctelAll = newCocteles
  }

  searchCoctel(termin: string) {
    if (termin) {
      let numero = Number(termin)
      if(!isNaN(numero)){
        this._srvCocteles.getcoctelId(numero).subscribe(coctel =>{
          this.coctelAll = coctel
        })
      }else{
        this._srvCocteles.getcostelEncontrado(termin).subscribe(coctel => {
          this.coctelAll = coctel
        })
      }
      
    } else {
      this.ngOnInit()
    }
  }

}