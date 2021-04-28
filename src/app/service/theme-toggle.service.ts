import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { LocalStorageManagerService } from "./local-storage-manager.service";


export enum ThemeMode {
  DARK, LIGHT
}

@Injectable()
export class ThemeToggleService {

  public theme = new BehaviorSubject<ThemeMode>(ThemeMode.LIGHT);
  private readonly THEME_KEY = 'GJ_THEME';
  private readonly DARK = 'DARK';
  private readonly LIGHT = 'LIGHT';
  private readonly DARK_CLASSNAME = 'theme-dark';

  private darkThemeOn = false;

  constructor(private lsmSvc: LocalStorageManagerService) { }

  private isDarkThemeOn(): boolean {
    this.darkThemeOn = this.lsmSvc.get(this.THEME_KEY) === this.DARK;
    return this.darkThemeOn;
  }

  public activateOnInit() {
    this.isDarkThemeOn() ? this.activateDark() : this.activateLight();
    setTimeout(() => {
      document.body.classList.add('theme-transition');
    }, 500);
  }

  public toggle() {
    this.isDarkThemeOn() ? this.activateLight() : this.activateDark();
  }

  private activateLight() {
    this.lsmSvc.set(this.THEME_KEY, this.LIGHT);
    document.body.classList.remove(this.DARK_CLASSNAME);
    this.darkThemeOn = false;
    this.theme.next(ThemeMode.LIGHT);
  }

  private activateDark() {
    this.lsmSvc.set(this.THEME_KEY, this.DARK);
    document.body.classList.add(this.DARK_CLASSNAME);
    this.darkThemeOn = true;
    this.theme.next(ThemeMode.DARK);
  }

}