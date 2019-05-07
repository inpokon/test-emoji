import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {EmojiService} from "./service/emoji.service";
import { EmojiComponent } from './emoji/emoji.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { NavComponent } from './common/nav/nav.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ChosenComponent } from './chosen/chosen.component';
import { DeletedComponent } from './deleted/deleted.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmojiComponent,
    PaginationComponent,
    SideBarComponent,
    NavComponent,
    ChosenComponent,
    DeletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [EmojiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
