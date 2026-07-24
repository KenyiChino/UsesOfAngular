import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais-interface';


@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private apiURL = 'https://api.restcountries.com/countries/v5?q=Canada&api-key=rc_live_demo&pretty=1'
  constructor(private http: HttpClient){}
    obtenerPaises(): Observable<Pais[]>{
      return this.http.get<Pais[]> (this.apiURL);
    }
}
