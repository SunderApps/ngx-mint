/**
 * Imports
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

import { MintStorageService } from 'ngx-mint/src/lib/services/storage.service';
import { mintItem } from '@appartmint/mint';

/**
 * SettingsService
 * @description Service for managing settings
 */
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  /**
   * Settings
   */
  private _settings: {[key: string]: string | number | boolean | mintItem } = {};
  private subSettings: Subject<{[key: string]: string | number | boolean | mintItem}> = new Subject<{[key: string]: string | number | boolean | mintItem}>();
  settings: Observable<{[key: string]: string | number | boolean | mintItem}> = this.subSettings.asObservable();

  /**
   * Id of the settings
   */
  private _settingsId = 'mint-settings';

  /**
   * Constructor
   * @param storageService - used to save settings to local storage
   */
  constructor (
    private storageService: MintStorageService
  ) {
    this.load()
  }

  /**
   * Load settings from local storage
   */
  load (): void {
    const str: string | null = this.storageService.get(this._settingsId);
    if (str) {
      const obj: {[key: string]: string | number | boolean | mintItem } = JSON.parse(str);
      if (obj) {
        this._settings = { ...this._settings, ...obj };
      }
    }
    this.update();
  }

  /**
   * Set a setting then update
   * @param key - the key whose value will be set
   * @param value - the value that will be assigned to the key
   */
  set (key: string, value: string | number | boolean | mintItem): void {
      this._settings[key] = value;
      this.update();
  }

  /**
   * Update the settings site-wide and in local storage
   */
  update (): void {
    this.subSettings.next(this._settings);
    this.storageService.set(this._settingsId, JSON.stringify(this._settings));
  }
}
