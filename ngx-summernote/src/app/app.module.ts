import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SummernoteTestComponent} from './summernote-test/summernote-test.component';
import {NgxSummernoteModule} from 'ngx-summernote';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SummernoteTestComponent
  ],
  imports: [
    BrowserModule,
    NgxSummernoteModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
