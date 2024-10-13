
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dbz, Item, Links, Meta } from '../interfaces/dbz';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private apiUrlBase = 'https://dragonball-api.com/api/characters/';
  private next:string|null=null;
  private previous:string|null=null;

  constructor(
    private http: HttpClient
  ) { }

  getDbz(url:string = this.apiUrlBase): Observable<Dbz>{
    return this.http.get<Dbz>(url);
  }

  getdbz(termino: string|number): Observable<Item>{
    return this.http.get<Item>(`${this.apiUrlBase}${termino}`);
  }

  getDbzLinks(enlace: any):Observable<Links>{
    return this.http.get<Links>(enlace);
  }


set nextUrl(url:string|null){
  this.next=url;
}

set previousUrl(url:string|null){
  this.previous=url;
}

get nextUrl(){
  return this.next;
}

get previousUrl(){
  return this.previous;
}

}
