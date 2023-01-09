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

  regionOptions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  countries!: Country[];
  displayCountries?: Country[];

  destroy$ = new Subject<void>()
  countryControl = new FormControl();

  windowScrolled: Boolean = false;

  ngOnInit(){

    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });

    this.api.getAllCountries().subscribe((response: Country[]) => {
      this.countries = response;
      this.displayCountries = response;
    });

    this.countryControl.valueChanges.pipe(takeUntil(this.destroy$),debounceTime(100)).subscribe((value: string) => this.updateDisplayCountries(value))
  }
  //SEARCH BAR
  private updateDisplayCountries(searchTerm: string): void {
    this.displayCountries = this.countries.filter((country: Country ) => this.isCountrySearched(country, searchTerm.toLowerCase()))
  }
  private isCountrySearched(country: any, searchTerm: string): boolean {
    return country.name.common.toLowerCase().includes(searchTerm) || country.name.official.toLowerCase().includes(searchTerm)
  }
  
  //DROPDOWN
  public updateDisplayRegions(region: string): void {
    this.displayCountries = this.countries.filter((country: Country ) => this.isRegionFiltered(country, region.toLowerCase()))
  }
  private isRegionFiltered(country: any, selectedRegion: string): boolean {
    return country.region.toLowerCase().includes(selectedRegion)
  }

  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}

//COMBINELATEST METHOD SEARCH BAR

/*

this.countries$ = combineLatest([
  this.loadCountries$, 
  this.searchTerm$
])
.pipe(
    map(([countries, searchTerm])
      => filterFunction(countries, searchTerm)),
);
*/
