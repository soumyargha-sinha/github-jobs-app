import { Component, OnInit } from '@angular/core';
import { ThemeToggleService } from 'src/app/service/theme-toggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private themeToggleSvc: ThemeToggleService) { }

  currentTheme = this.currentThemeDecider();

  ngOnInit(): void {
  }

  toggleTheme() {
    this.themeToggleSvc.toggle();
  }

  currentThemeDecider(): boolean {
    return localStorage.getItem('THEME')==='DARK'?true:false;
  }

}
