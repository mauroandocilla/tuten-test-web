import {TestBed} from '@angular/core/testing';

import {TutenService} from './tuten.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TutenService', () => {
  let service: TutenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(TutenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

