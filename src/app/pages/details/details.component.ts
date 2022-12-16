import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap, mergeMap, of } from 'rxjs';
import { Country } from 'src/app/types/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})

export class DetailsComponent implements OnInit {
  country$!: Observable<Country>
  countryBorders$!: Observable<Country[]>

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.country$ = this.apiService.getCountryByName(params['country']).pipe(
        tap((res) => console.log("res=", res)),
        mergeMap((res) => {
          this.countryBorders$ = this.apiService.getCountriesByCodes(res.borders);
          return of(res);
        })
      );
    });
  }}
