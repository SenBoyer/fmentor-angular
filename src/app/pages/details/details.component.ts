import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap, mergeMap, of, map} from 'rxjs';
import { Country, Currency, Language } from 'src/app/types/api';
import { ApiService } from 'src/app/services/api.service';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})

export class DetailsComponent implements OnInit {

  country$!: Observable<Country>;
  countryBorders$!: Observable<Country[]>

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        let countryName = params['country'];
        this.country$ = this.apiService.getCountryByName(countryName).pipe(map(info=>{return info[0]}))
        this.countryBorders$ = this.country$.pipe(
            switchMap((info) => this.apiService.getCountriesByCodes(info.borders))
        );
    });
}

  displayCurrencies(currencies: any) {
    let array = Object.values(currencies);
    return array.map((val: any)=>val.name).join(', ')
  };

  displayLanguages(languages: Language[]) {
    let array = Object.values(languages);
    console.log(array)
    return array.map((val: any)=>val).join(', ')
  }

    getCountryBorders(borders: any){
    if (borders) {
    borders.map((val: any)=> {
      console.log("val", val)});
  }}
};