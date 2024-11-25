import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jujutsu, listaJujutsu } from '../interfaces/jujutsu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiapiService {

  private urlBase:string = 'http://localhost:3000/api/jujutsu';

  constructor(private http:HttpClient) { }

  getAllJujutsu(url:string=this.urlBase):Observable<listaJujutsu>{
    return this.http.get<listaJujutsu>(url);
  }

  getJujutsu(id:any):Observable<Jujutsu>{
    return this.http.get<Jujutsu>(`${this.urlBase}/${id}`);
  }

  putJujutsu(form:Jujutsu):Observable<Jujutsu>{
    return this.http.put<Jujutsu>(`${this.urlBase}/${form._id}`, form);
  }
}
