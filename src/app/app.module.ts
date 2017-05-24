
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecuredComponent } from './secured/secured.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecuredComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
