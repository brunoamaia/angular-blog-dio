import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { SmallCardComponent } from './component/small-card/small-card.component';
import { BigCardComponent } from './component/big-card/big-card.component';
import { MenuTitleComponent } from './component/menu-title/menu-title.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SmallCardComponent,
    BigCardComponent,
    MenuTitleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
