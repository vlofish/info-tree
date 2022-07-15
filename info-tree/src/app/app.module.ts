import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { AppComponent } from './app.component';
import { CardsComponent } from './features/cards/cards.component';
import { DashboardComponent } from './structure/dashboard/dashboard.component';
import { NavigationComponent } from './structure/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DashboardComponent,
    NavigationComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
