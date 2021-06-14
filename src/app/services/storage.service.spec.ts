import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import {RouterTestingModule} from "@angular/router/testing";

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
      ]
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
