import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  constructor(private themeService: ThemeService) { }

  toggleTheme(){
    this.themeService.toggleThemeColor()
  }

}
