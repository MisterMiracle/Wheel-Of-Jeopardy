import { TestBed, inject } from '@angular/core/testing';

import { RecomendationsService } from './recomendations.service';

describe('ReccomendationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecomendationsService]
    });
  });

  it('should be created', inject([RecomendationsService], (service: RecomendationsService) => {
    expect(service).toBeTruthy();
  }));
});
