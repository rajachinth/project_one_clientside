import { TestBed } from '@angular/core/testing';

import { AsyncUniquecheckService } from './async-uniquecheck.service';

describe('AsyncUniquecheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsyncUniquecheckService = TestBed.get(AsyncUniquecheckService);
    expect(service).toBeTruthy();
  });
});
