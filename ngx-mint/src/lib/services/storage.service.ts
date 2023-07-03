/**
 * Imports
 */
import { Injectable } from '@angular/core';

/**
 * StorageService
 * @description - used to save settings to local storage
 */
@Injectable({
  providedIn: 'root'
})
export class MintStorageService {
  /**
   * Enabled
   * @description - whether or not local storage is enabled
   */
  enabled = false;

  /**
   * Main - check if local storage is enabled
   */
  constructor () { 
    if (typeof(Storage) !== undefined) {
      this.enabled = true;
    }
  }

  /**
   * Set
   * @description - set a value in local storage
   * @param key - the key whose value will be set
   * @param value - the value that will be assigned to the key
   * @returns void
   */
  set (key: string, value: string) {
    if (this.enabled) {
      window.localStorage.setItem(key, value);
    }
  }

  /**
   * Get
   * @description - get a value from local storage
   * @param key - the key whose value will be retrieved
   * @returns string | null
   * @returns null - if local storage is not enabled
   */
  get (key: string): string | null {
    if (this.enabled) {
      return window.localStorage.getItem(key);
    } else {
      return null;
    }
  }

  /**
   * Remove
   * @description - remove a value from local storage
   * @param key - the key whose value will be removed
   * @returns void
   */
  remove (key: string): void {
    if (this.enabled) {
      window.localStorage.removeItem(key);
    }
  }

  /**
   * Clear
   * @description - clear all values from local storage
   * @returns void
   */
  clear (): void {
    if (this.enabled) {
      window.localStorage.clear();
    }
  }
}
