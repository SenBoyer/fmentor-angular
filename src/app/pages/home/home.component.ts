import { Component, OnInit, OnDestroy } from '@angular/core';
import {ApiService} from '../../services/api.service'
import {FormControl} from '@angular/forms'
import { Country } from '../../types/api';
import {Subject} from 'rxjs'
import {takeUntil, debounceTime} from 'rxjs/operators'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private api: ApiService){}

  countries: any;
  displayCountries: any;

  destroy$ = new Subject<void>()
  countryControl = new FormControl();

  ngOnInit(){
    this.api.getAllCountries().subscribe((response: Country[]) => {
      this.countries = response;
      this.displayCountries = response;
    });

    this.countryControl.valueChanges.pipe(takeUntil(this.destroy$),debounceTime(100)).subscribe((value: string) => this.updateDisplayCountries(value))
  }

  private updateDisplayCountries(searchTerm: string): void {
    this.displayCountries = this.countries.filter((country: Country ) => this.isCountrySearched(country, searchTerm.toLowerCase()))
  }

  private isCountrySearched(country: any, searchTerm: string): boolean {
    return country.name.common.toLowerCase().includes(searchTerm) || country.name.official.toLowerCase().includes(searchTerm)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
