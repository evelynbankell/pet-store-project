import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpsApiService } from './services/https-api.service';
import { PetsComponent } from './pets/pets.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    HttpsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
