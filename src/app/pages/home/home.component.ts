import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {FormControl} from '@angular/forms';
import { Observable, filter } from 'rxjs';
import {startWith, map, withLatest} from 'rxjs/operators'
import { Country } from '../../types/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  allCountries: Country[] = [];
  countries$!: Observable<Country[]>;
  myControl = new FormControl('');
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .getAllCountries().subscribe(countries => this.allCountries = countries);

    this.countries$ = this.myControl.valueChanges.pipe(
      startWith(''),
      map(searchTerm => this._filter(searchTerm))
    );
  }

  private _filter(value: string): Country[] {
    const filterValue = value.toLowerCase();

    return this.allCountries.filter(country => country.name.common.toLowerCase().includes(filterValue));
  }
}