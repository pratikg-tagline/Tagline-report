import { TestBed } from '@angular/core/testing';

import { AccesstokenInterceptor } from './accesstoken.interceptor';

describe('AccesstokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AccesstokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AccesstokenInterceptor = TestBed.inject(AccesstokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
