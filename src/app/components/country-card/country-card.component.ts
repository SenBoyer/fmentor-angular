import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Country } from '../../types/api';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.sass']
})
export class CountryCardComponent {
  constructor(public route: ActivatedRoute){}
   @Input() country!: Country;


}
