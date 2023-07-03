/**
 * ngx-mint.module.ts 
 * @description This file is used to export all of the components that are used in this library.
 */

/**
 * Imports
 */
import { NgModule, Type } from '@angular/core';

import { MintBackgroundComponent } from './partials/background/background.component';
import { MintButtonComponent } from './partials/button/button.component';
import { MintCardComponent } from './partials/card/card.component';
import { MintComingSoonComponent } from './partials/coming-soon/coming-soon.component';
import { MintFooterComponent } from './partials/footer/footer.component';
import { MintHeaderComponent } from './partials/header/header.component';
import { MintImageComponent } from './partials/image/image.component';
import { MintLightboxComponent } from './partials/lightbox/lightbox.component';

/**
 * External components
 * @description Components that are exported from this library
 */
const externalComponents: (any[] | Type<any>)[] = [
  MintBackgroundComponent,
  MintButtonComponent,
  MintCardComponent,
  MintComingSoonComponent,
  MintFooterComponent,
  MintHeaderComponent,
  MintImageComponent,
  MintLightboxComponent
];

/**
 * Internal components
 * @description Components that are not exported from this library
 */
const internalComponents: (any[] | Type<any>)[] = [ ];

/**
 * NgxMintModule
 */
@NgModule({
  declarations: [ ...internalComponents, ...externalComponents ],
  exports: [ ...externalComponents ]
})
export class NgxMintModule { }
export default NgxMintModule;
