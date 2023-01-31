import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authFeaturekey, authReducer } from './store/auth.reducer';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeaturekey, authReducer),
  ]
})
export class AuthStoreModule { }
