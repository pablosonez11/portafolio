import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ItemsModule } from './items/items.module';
import { HomeModule } from './home/home.module';
import {Routes, RouterModule} from '@angular/router';
import { ItemsComponent } from './items/items/items.component';
import { HomeComponent } from './home/home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

const ROUTES: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'items/:id', component: ItemsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
  ],
  imports: [
    BrowserModule,
    ItemsModule,
    HomeModule,
    RouterModule.forRoot(ROUTES),

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

