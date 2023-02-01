import { TestBed } from '@angular/core/testing';

import { AccessresolverResolver } from './accessresolver.resolver';

describe('AccessresolverResolver', () => {
  let resolver: AccessresolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AccessresolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
