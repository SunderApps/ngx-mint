/**
 * Imports
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { mintItem } from '@appartmint/mint';

/**
 * BackgroundService
 * @description Service for managing background images and videos
 */
@Injectable({
  providedIn: 'root'
})
export class MintBackgroundService {
  private _active = 1;
  private _img1: mintItem = { src: '', position: '' };
  private _img2: mintItem = { src: '', position: '' };
  private _vid1: mintItem = { src: '', position: '' };
  private _vid2: mintItem = { src: '', position: '' };
  private subActivate: Subject<boolean> = new Subject<boolean>();
  private subImg1: Subject<mintItem> = new Subject<mintItem>();
  private subImg2: Subject<mintItem> = new Subject<mintItem>();
  private subVid1: Subject<mintItem> = new Subject<mintItem>();
  private subVid2: Subject<mintItem> = new Subject<mintItem>();
  img1: Observable<mintItem> = this.subImg1.asObservable();
  img2: Observable<mintItem> = this.subImg2.asObservable();
  vid1: Observable<mintItem> = this.subVid1.asObservable();
  vid2: Observable<mintItem> = this.subVid2.asObservable();

  /**
   * Update the background
   * @param bg - background data
   */
  update (bg: mintItem) {
    if (bg.src?.endsWith('.mp4')) {
      if (this._active == 3) {
        if (this._vid1.src != bg.src) {
          this._vid2 = bg
          this.subVid2.next(this._vid2)
          this._active = 4
        }
      } else {
        if (this._vid2.src != bg.src) {
          this._vid1 = bg
          this.subVid1.next(this._vid1)
          this._active = 3
        }
      }
    } else {
      if (this._active == 1) {
        if (this._img1.src != bg.src) {
          this._img2 = bg
          this.subImg2.next(this._img2)
          this._active = 2
        }
      } else {
        if (this._img2.src != bg.src) {
          this._img1 = bg
          this.subImg1.next(this._img1)
          this._active = 1
        }
      }
    }
  }

  /**
   * Update the background
   * @param src - background source
   * @param position - background position
   * @returns void
   */
  updateString (src: string, position: string) : void {
    this.update({ src: src, position: position });
  }

  /**
   * Trigger a background update
   * @returns void
   */
  trigger () : void {
    this.subActivate?.next(false);
    this.subActivate?.next(true);
  }
}
