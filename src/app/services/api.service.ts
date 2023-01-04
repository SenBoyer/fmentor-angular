import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Country } from '../types/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  getAllCountries() {
    console.log('get All countries running');
    return this.http.get<Country[]>(`${this.api}/all`);
  }

  getCountryByName(name: string) {
    console.log("getCountryByName running")
    return this.http
      .get<Country[]>(`${this.api}/name/${name}`)
  }

  getCountriesByCodes(codes: string[]) {
    console.log(`${this.api}alpha?codes=${codes.join(',')}`);
    return this.http.get<Country[]>(
      `${this.api}alpha?codes=${codes.join(',')}`
    );
  }
}
