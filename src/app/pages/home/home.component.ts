import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { Country } from '../../types/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  countries$!: Observable<Country[]>;
  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.countries$ = this.apiService.getAllCountries();
  }

}
