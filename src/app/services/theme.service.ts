import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  light = "light",
  dark = "dark"
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme_color: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(Theme.light);
  constructor() { }

  get theme_color$(){
    return this.theme_color.asObservable();
  }

  toggleThemeColor(){
    console.log("this.theme_color.value=" , this.theme_color.value)
    if (this.theme_color.value === Theme.light){
      this.theme_color.next(Theme.dark)} else {
        this.theme_color.next(Theme.light)
    }
  }
  
}