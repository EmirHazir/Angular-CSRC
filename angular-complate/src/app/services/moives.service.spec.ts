import { TestBed, inject } from '@angular/core/testing';

import { MoivesService } from './moives.service';

describe('MoivesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoivesService]
    });
  });

  it('should ...', inject([MoivesService], (service: MoivesService) => {
    expect(service).toBeTruthy();
  }));
});
