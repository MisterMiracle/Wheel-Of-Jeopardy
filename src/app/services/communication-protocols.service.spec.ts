import { TestBed, inject } from '@angular/core/testing';

import { CommunicationProtocolsService } from './communication-protocols.service';

describe('CommunicationProtocolsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunicationProtocolsService]
    });
  });

  it('should be created', inject([CommunicationProtocolsService], (service: CommunicationProtocolsService) => {
    expect(service).toBeTruthy();
  }));
});
