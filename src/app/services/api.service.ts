import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../types/api';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = "https://restcountries.com/v3.1/"

  constructor(private http: HttpClient) { }

  getAllCountries(){
    console.log("getAllCountries running")
    return this.http.get<Country[]>(`${this.api}/all`)
  }

  getCountryByName(name: string){
    console.log("getCountryByName running")
    return this.http.get<Country>(`$(this.api}/name/${name}`).pipe(map((res)=>{return res}))
  }

  getCountriesByCodes(codes: string[]) {
    console.log("getCountriesByCodes running")
    console.log(`${this.api}/alpha/${codes.join(';')}`);
    return this.http.get<Country[]>(
      `${this.api}/alpha?codes=${codes.join(';')}`
    );
  }
}
