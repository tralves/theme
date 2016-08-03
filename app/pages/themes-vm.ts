import {Observable} from 'data/observable';
import {topmost} from 'ui/frame';
import {knownFolders} from 'file-system';
var themes = require('nativescript-themes');

export class ThemesModel extends Observable {
  public btnText: string;
  private _toggled: boolean = false;

  constructor() {
    super();
    this.set('btnText', 'Nina');
  }

  public switchTheme() {
    this._toggled = !this._toggled;

    let appPath = knownFolders.currentApp().path + '/';
    
    if (this._toggled) {
      this.set('btnText', 'Default');
      themes.applyTheme(`${appPath}theme-nina.css`);
      
    } else {
      this.set('btnText', 'Nina');
      themes.applyTheme(`${appPath}app.css`);
    }

  }
}