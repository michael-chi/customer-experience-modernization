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

import { UserJourneyComponent } from './user-journey.component';
import { importProvidersFrom } from '@angular/core';
import { getAuth } from '@firebase/auth';
import { provideAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserJourneyComponent', () => {
  let component: UserJourneyComponent;
  let fixture: ComponentFixture<UserJourneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserJourneyComponent, RouterTestingModule],
      providers: [
        importProvidersFrom([
          provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
          provideAuth(() => getAuth())]),
      ]
    })
      ;
    fixture = TestBed.createComponent(UserJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
