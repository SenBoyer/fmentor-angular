import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import {Country} from './types/api'

@Pipe({
  name: 'filterCountries'
})
export class FilterCountriesPipe implements PipeTransform {

  transform(items: Country[], input: string): any {
    if (!items || !input || !input.replace(/[\n\r\s\t]+/g, '')) {
       return items;
    }
    return items.filter((item) => item.name.official.toLowerCase().includes(input.toLowerCase()));
}

}

