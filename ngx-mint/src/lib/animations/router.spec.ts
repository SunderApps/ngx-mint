import { RouterAnimations } from './router';
import { trigger } from '@angular/animations';

describe('RouterAnimations', () => {
  it('should create an animation trigger', () => {
    expect(typeof RouterAnimations === typeof trigger).toBeTruthy();
  });
});
