/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseHistoryComponent } from './case-history.component';
import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../../environments/environment';
import { getAuth } from '@firebase/auth';
import { provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient } from '@angular/common/http';

describe('CaseHistoryComponent', () => {
  let component: CaseHistoryComponent;
  let fixture: ComponentFixture<CaseHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseHistoryComponent],
      providers: [
        provideHttpClient(),
        importProvidersFrom([
          provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
          provideFirestore(() => getFirestore()),
          provideAuth(() => getAuth()),
          provideStorage(() => getStorage())
        ]),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CaseHistoryComponent);
    component = fixture.componentInstance;
    component.caseHistory = [];
    component.userName = "";
    component.userEmail = "";
    component.userId = "";
    component.userPhotoURL = "";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
