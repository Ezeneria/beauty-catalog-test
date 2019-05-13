import { TestBed } from '@angular/core/testing';

import { CatalogMockDataService } from './services/catalog-mock-data.service';

describe('CatalogMockDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatalogMockDataService = TestBed.get(CatalogMockDataService);
    expect(service).toBeTruthy();
  });
});
